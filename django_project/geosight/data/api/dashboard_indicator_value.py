# coding=utf-8
"""
GeoSight is UNICEF's geospatial web-based business intelligence platform.

Contact : geosight-no-reply@unicef.org

.. note:: This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation; either version 3 of the License, or
    (at your option) any later version.

"""
__author__ = 'irwan@kartoza.com'
__date__ = '13/06/2023'
__copyright__ = ('Copyright 2023, Unicef')

import json
import time
from datetime import datetime

import pytz
from dateutil import parser as date_parser
from django.conf import settings
from django.http import (
    HttpResponseBadRequest
)
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from geosight.data.models.dashboard import (
    Dashboard
)
from geosight.data.models.indicator import Indicator
from geosight.georepo.models.reference_layer import ReferenceLayerIndicator
from geosight.georepo.serializer.entity import EntitySerializer
from geosight.permission.access import (
    read_permission_resource, ResourcePermissionDenied
)
from geosight.permission.models.factory import PERMISSIONS
from geosight.permission.models.resource import (
    ReferenceLayerIndicatorPermission
)


class _DashboardIndicatorValuesAPI(APIView):
    """Base indicator values API."""

    def check_permission(self, user, dashboard, indicator):
        """Check permission."""
        if not dashboard.reference_layer:
            return Response([])

        ref, created = ReferenceLayerIndicator.permissions.get_or_create(
            user=user,
            indicator=indicator,
            have_creator=False,
            reference_layer=dashboard.reference_layer
        )
        try:
            read_permission_resource(ref, user)
        except ReferenceLayerIndicatorPermission.DoesNotExist:
            ref.permission = ReferenceLayerIndicatorPermission(
                organization_permission=PERMISSIONS.NONE.name,
                public_permission=PERMISSIONS.NONE.name
            )
            read_permission_resource(ref, user)

    def return_parameters(self, request):
        """Return parameters for data."""
        max_time = request.GET.get('time__lte', None)
        if max_time:
            max_time = date_parser.parse(max_time)
        else:
            max_time = datetime.now()

        min_time = request.GET.get('time__gte', None)
        if min_time:
            min_time = date_parser.parse(min_time).date()
        return min_time, max_time


class DashboardIndicatorValuesAPI(_DashboardIndicatorValuesAPI):
    """API for Values of indicator."""

    def get(self, request, slug, pk, **kwargs):
        """Return Values."""
        dashboard = get_object_or_404(Dashboard, slug=slug)
        indicator = get_object_or_404(Indicator, pk=pk)
        self.check_permission(request.user, dashboard, indicator)
        min_time, max_time = self.return_parameters(request)
        return Response(
            indicator.values(
                date_data=max_time,
                min_date_data=min_time,
                admin_level=request.GET.get('admin_level', None),
                reference_layer=dashboard.reference_layer
            )
        )


class DashboardIndicatorValueListAPI(DashboardIndicatorValuesAPI):
    """API for Values of indicator in periodically."""

    def get(self, request, slug, pk, **kwargs):
        """Return Values."""
        dashboard = get_object_or_404(Dashboard, slug=slug)
        indicator = get_object_or_404(Indicator, pk=pk)
        self.check_permission(request.user, dashboard, indicator)
        min_time, max_time = self.return_parameters(request)
        concept_uuid = request.GET.get('concept_uuid', None)

        query = indicator.query_values(
            date_data=max_time,
            min_date_data=min_time,
            reference_layer=dashboard.reference_layer,
            concept_uuid=concept_uuid
        )
        distinct = ['geom_id', 'concept_uuid']
        frequency = request.GET.get('frequency', 'daily')
        if frequency.lower() == 'daily':
            distinct.append('year')
            distinct.append('month')
            distinct.append('day')
        elif frequency.lower() == 'monthly':
            distinct.append('year')
            distinct.append('month')
        elif frequency.lower() == 'yearly':
            distinct.append('year')

        order_by = ['-' + field for field in distinct]
        order_by.append('-date')
        query = query.order_by(
            *[field for field in order_by]
        ).distinct(*distinct)

        output = []
        for row in query:
            new_date = datetime.combine(
                row.date, datetime.max.time(),
                tzinfo=pytz.timezone(settings.TIME_ZONE)
            )
            output.append({
                'time': time.mktime(new_date.timetuple()),
                'value': row.value
            })
        return Response(output)


class DashboardIndicatorDatesAPI(DashboardIndicatorValuesAPI):
    """API for of indicator."""

    def get(self, request, slug, pk, **kwargs):
        """Return Values."""
        dashboard = get_object_or_404(Dashboard, slug=slug)
        indicator = get_object_or_404(Indicator, pk=pk)
        self.check_permission(request.user, dashboard, indicator)

        dates = [
            datetime.combine(
                date_str, datetime.min.time(),
                tzinfo=pytz.timezone(settings.TIME_ZONE)
            ).isoformat()
            for date_str in set(
                indicator.query_values(
                    reference_layer=dashboard.reference_layer
                ).values_list('date', flat=True)
            )
        ]
        dates.sort()

        return Response(dates)


class DashboardEntityDrilldown(_DashboardIndicatorValuesAPI):
    """Return all values for the geometry code."""

    def get(self, request, slug, concept_uuid):
        """Return values of all indicators in specific geometry.

        :param slug: slug of the dashboard
        :param concept_uuid: the concept_uuid
        :return:
        """
        dashboard = get_object_or_404(Dashboard, slug=slug)
        entity = dashboard.reference_layer.entity_set.filter(
            concept_uuid=concept_uuid
        ).first()
        if not entity:
            return HttpResponseBadRequest(
                f'Entity with concept_uuid :{concept_uuid} does not exist.'
            )
        try:
            parent = entity.parents[0]
            siblings = dashboard.reference_layer.entity_set.filter(
                parents__contains=parent,
                admin_level=entity.admin_level
            ).exclude(pk=entity.pk)
            parent = dashboard.reference_layer.entity_set.filter(
                geom_id=parent,
                reference_layer=dashboard.reference_layer
            ).first()
        except IndexError:
            siblings = []
            parent = None

        children = dashboard.reference_layer.entity_set.filter(
            parents__contains=entity.geom_id,
            admin_level=entity.admin_level + 1
        )
        concept_uuids = [entity.concept_uuid] + \
                        [sibling.concept_uuid for sibling in siblings] + \
                        [children.concept_uuid for children in children]
        if parent:
            concept_uuids.append(parent.concept_uuid)

        # INIDATORS DATA
        indicators = {}
        for dashboard_indicator in dashboard.dashboardindicator_set.all():
            indicator = dashboard_indicator.object
            try:
                self.check_permission(request.user, dashboard, indicator)
                values = indicator.values(
                    date_data=None,
                    min_date_data=None,
                    reference_layer=dashboard.reference_layer,
                    concept_uuids=concept_uuids,
                    last_value=False,
                    use_time=True
                )
                for value in values:
                    key = value['concept_uuid']
                    if key not in indicators:
                        indicators[key] = {}

                    indicator_key = indicator.shortcode if \
                        indicator.shortcode else indicator.id
                    if indicator_key not in indicators[key]:
                        indicators[key][indicator_key] = []

                    indicators[key][indicator_key].append({
                        'value': value['value'],
                        'time': value['time']
                    })
            except ResourcePermissionDenied:
                pass

        # RELATED TABLES DATA
        related_tables = {}
        rt_config = json.loads(request.GET.get('rtconfigs', '{}'))
        for dashboard_related in dashboard.dashboardrelatedtable_set.all():
            related_table = dashboard_related.object
            date_field = None
            date_format = None
            try:
                date_field = rt_config[f'{related_table.id}']['date_field']
                date_format = rt_config[f'{related_table.id}']['date_format']
            except KeyError:
                pass
            values = related_table.data_with_query(
                reference_layer_uuid=dashboard.reference_layer.identifier,
                geo_field=dashboard_related.geography_code_field_name,
                geo_type=dashboard_related.geography_code_type,
                date_field=date_field,
                date_format=date_format,
            )
            for value in values:
                key = value['concept_uuid']
                if key not in related_tables:
                    related_tables[key] = {}
                if related_table.name not in related_tables[key]:
                    related_tables[key][related_table.name] = []
                del value['id']
                del value['order']
                del value['concept_uuid']
                del value['geometry_code']
                related_tables[key][related_table.name].append(value)

        # Construct context
        admin_boundary = EntitySerializer(entity).data
        try:
            admin_boundary['indicators'] = indicators[
                admin_boundary['concept_uuid']
            ]
        except KeyError:
            admin_boundary['indicators'] = {}
        try:
            admin_boundary['related_tables'] = related_tables[
                admin_boundary['concept_uuid']
            ]
        except KeyError:
            admin_boundary['related_tables'] = {}

        # For parent
        if parent:
            admin_boundary['parent'] = EntitySerializer(parent).data
            try:
                admin_boundary['parent']['indicators'] = indicators[
                    parent.concept_uuid
                ]
            except KeyError:
                admin_boundary['parent']['indicators'] = {}

            try:
                admin_boundary['parent']['related_tables'] = related_tables[
                    parent.concept_uuid
                ]
            except KeyError:
                admin_boundary['parent']['related_tables'] = {}

        # For children
        admin_boundary['children'] = EntitySerializer(children, many=True).data
        for child in admin_boundary['children']:
            try:
                child['indicators'] = indicators[child['concept_uuid']]
            except KeyError:
                child['indicators'] = {}

            try:
                child['related_tables'] = related_tables[child['concept_uuid']]
            except KeyError:
                child['related_tables'] = {}

        # For siblings
        admin_boundary['siblings'] = EntitySerializer(siblings, many=True).data
        for sibling in admin_boundary['siblings']:
            try:
                sibling['indicators'] = indicators[
                    sibling['concept_uuid']
                ]
            except KeyError:
                sibling['indicators'] = {}
            try:
                sibling['related_tables'] = related_tables[
                    sibling['concept_uuid']
                ]
            except KeyError:
                sibling['related_tables'] = {}

        return Response(admin_boundary)
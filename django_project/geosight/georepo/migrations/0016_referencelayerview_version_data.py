# Generated by Django 3.2.16 on 2024-01-29 04:07

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('geosight_georepo', '0015_auto_20231030_0254'),
    ]

    operations = [
        migrations.AddField(
            model_name='referencelayerview',
            name='version_data',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
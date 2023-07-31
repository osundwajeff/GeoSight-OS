# Generated by Django 3.2.16 on 2023-07-11 06:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('geosight_importer', '0017_remove_harvester'),
    ]

    operations = [
        migrations.AlterField(
            model_name='importer',
            name='input_format',
            field=models.CharField(choices=[('Excel Wide Format', 'Excel Wide Format'), ('Excel Long Format', 'Excel Long Format'), ('SharePoint Wide Format', 'SharePoint Wide Format'), ('SharePoint Long Format', 'SharePoint Long Format'), ('API With Geography Wide Format', 'API With Geography Wide Format'), ('API With Geography Long Format', 'API With Geography Long Format'), ('Vector Context Layer Format', 'Vector Context Layer Format'), ('Related Table Format', 'Related Table Format'), ('Formula Based on Other Indicators', 'Formula Based on Other Indicators'), ('SDMX Format', 'SDMX Format')], default='Excel Wide Format', help_text='Format of input. It will used for deciding what importer will be used.', max_length=128),
        ),
    ]
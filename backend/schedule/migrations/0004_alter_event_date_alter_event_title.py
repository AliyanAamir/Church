# Generated by Django 4.2.5 on 2023-09-30 09:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schedule', '0003_rename_name_event_date_rename_time_event_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='event',
            name='title',
            field=models.CharField(default='', max_length=255),
        ),
    ]
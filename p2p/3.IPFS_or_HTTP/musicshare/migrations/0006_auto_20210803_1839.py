# Generated by Django 3.1.6 on 2021-08-03 18:39

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('musicshare', '0005_auto_20210803_1838'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='date_upload',
            field=models.DateField(default=datetime.datetime(2021, 8, 3, 18, 39, 24, 16592, tzinfo=utc)),
        ),
    ]

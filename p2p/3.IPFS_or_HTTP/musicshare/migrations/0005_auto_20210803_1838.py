# Generated by Django 3.1.6 on 2021-08-03 18:38

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('musicshare', '0004_song_date_upload'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='date_upload',
            field=models.DateField(blank=True, default=datetime.datetime(2021, 8, 3, 18, 38, 38, 93251, tzinfo=utc)),
        ),
    ]

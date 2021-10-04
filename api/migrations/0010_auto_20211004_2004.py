# Generated by Django 3.2.7 on 2021-10-04 20:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_award'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='github',
            field=models.URLField(blank=True, default='', max_length=70),
        ),
        migrations.AlterField(
            model_name='project',
            name='link',
            field=models.CharField(blank=True, default='', max_length=70),
        ),
    ]
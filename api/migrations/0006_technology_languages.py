# Generated by Django 3.2.7 on 2021-09-24 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_technology_link'),
    ]

    operations = [
        migrations.AddField(
            model_name='technology',
            name='languages',
            field=models.CharField(default='', max_length=20),
            preserve_default=False,
        ),
    ]

# Generated by Django 3.2.7 on 2021-09-27 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_technology_languages'),
    ]

    operations = [
        migrations.CreateModel(
            name='Award',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contest', models.CharField(max_length=100)),
                ('year', models.PositiveIntegerField()),
                ('award', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=300)),
            ],
        ),
    ]

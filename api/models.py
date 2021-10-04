from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=30)
    short_description = models.CharField(max_length=30)
    long_description = models.CharField(max_length=150)
    github = models.URLField(max_length=70, default="", blank=True)
    link = models.CharField(max_length=70, default="", blank=True)
    icon = models.CharField(max_length=20)
    color = models.CharField(max_length=20)
    languages = models.CharField(max_length=10)


class Technology(models.Model):
    category = models.CharField(max_length=30, blank=False, unique=False)
    name = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=120, default="", blank=True)
    project = models.CharField(max_length=50, blank=True, default="")
    link = models.CharField(max_length=150, blank=True)
    languages = models.CharField(max_length=20, blank=True, default="")


class Award(models.Model):
    contest = models.CharField(max_length=100)
    year = models.PositiveIntegerField()
    award = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
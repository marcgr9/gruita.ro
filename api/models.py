from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=30, blank=False)
    short_description = models.CharField(max_length=30, blank=False)
    long_description = models.CharField(max_length=100)
    github = models.URLField(default="")
    link = models.URLField(default="")
    icon = models.CharField(max_length=20)
    color = models.CharField(max_length=20)
    languages = models.JSONField(encoder=None)

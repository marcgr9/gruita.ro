from django.db.models.fields import mixins
from .models import Project
from rest_framework import serializers, viewsets, permissions, mixins
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProjectSerializer
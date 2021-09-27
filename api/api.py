from django.db.models.fields import mixins
from .models import Award, Project, Technology
from rest_framework import serializers, viewsets, permissions, mixins
from .serializers import AwardSerializer, ProjectSerializer, TechnologySerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProjectSerializer

class TechnologyViewSet(viewsets.ModelViewSet):
    queryset = Technology.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = TechnologySerializer

class AwardsViewSet(viewsets.ModelViewSet):
    queryset = Award.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AwardSerializer
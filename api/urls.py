from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import ProjectViewSet


router = DefaultRouter()
router.register('projects', ProjectViewSet, basename='projects')

urlpatterns = [
    path('', include(router.urls))
 ]
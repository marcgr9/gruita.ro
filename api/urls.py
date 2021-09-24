from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import ProjectViewSet, TechnologyViewSet


router = DefaultRouter()
router.register('projects', ProjectViewSet, basename='projects')
router.register('technologies', TechnologyViewSet, basename='technologies')

urlpatterns = [
    path('', include(router.urls))
 ]
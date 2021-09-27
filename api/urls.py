from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import AwardsViewSet, ProjectViewSet, TechnologyViewSet


router = DefaultRouter()
router.register('projects', ProjectViewSet, basename='projects')
router.register('technologies', TechnologyViewSet, basename='technologies')
router.register('awards', AwardsViewSet, basename='awards')

urlpatterns = [
    path('', include(router.urls))
 ]
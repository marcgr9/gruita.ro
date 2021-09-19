from django.urls import path
from .api import ProjectViewSet


urlpatterns = [
    path('', ProjectViewSet.as_view({
        'get': 'list',
        'post': 'create'
    }))
]
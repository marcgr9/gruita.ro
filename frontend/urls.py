
from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('marc', index),
    path('resume', index)
]
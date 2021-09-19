from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"

    # def create(self, validated_data):
    #     print(validated_data)
    #     return Project(**validated_data)
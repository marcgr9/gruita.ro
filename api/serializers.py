from rest_framework import serializers
from .models import Award, Project, Technology

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"

    # def create(self, validated_data):
    #     print(validated_data)
    #     return Project(**validated_data)


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = "__all__"

class AwardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Award
        fields = "__all__"
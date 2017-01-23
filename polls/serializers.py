from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

from polls.models import Question


class QuestionSerializer(ModelSerializer):
    total_votes = serializers.FloatField(max_value=None, min_value=None)

    class Meta:
        model = Question
        fields = ('question_text', 'total_votes')

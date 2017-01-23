from factory.declarations import SubFactory
from factory.django import DjangoModelFactory
from django.utils import timezone

from polls.models import Question, Choice


class QuestionFactory(DjangoModelFactory):
    class Meta:
        model = Question

    pub_date = timezone.now()


class ChoiceFactory(DjangoModelFactory):
    class Meta:
        model = Choice

    question = SubFactory(QuestionFactory)

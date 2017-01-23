from json import loads

from django.test.testcases import TestCase
from django.urls import reverse

from .factories import QuestionFactory, ChoiceFactory


class QuestionsApiViewTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        super(QuestionsApiViewTest, cls).setUpTestData()

        cls.question_a = QuestionFactory()

        cls.choice_a = ChoiceFactory(question=cls.question_a)
        cls.choice_b = ChoiceFactory(question=cls.question_a)

        cls.question_b = QuestionFactory()

        cls.choice_c = ChoiceFactory(question=cls.question_b)
        cls.choice_d = ChoiceFactory(question=cls.question_b)

    def test_json_view_returns_all_quesitons(self):
        response = self.client.get(reverse('polls:api-question-list'))
        self.assertEqual(200, response.status_code)

        actual = loads(response.content)
        self.assertEqual(2, len(actual))

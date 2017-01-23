from django.test.testcases import TestCase

from .factories import QuestionFactory, ChoiceFactory
from polls.data import list_all_questions_with_total_votes


class QuestionsApiViewTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        super(QuestionsApiViewTest, cls).setUpTestData()

        cls.question_a = QuestionFactory()

        cls.choice_a = ChoiceFactory(question=cls.question_a, votes=2)
        cls.choice_b = ChoiceFactory(question=cls.question_a, votes=2)

        cls.question_b = QuestionFactory()

        cls.choice_c = ChoiceFactory(question=cls.question_b, votes=3)
        cls.choice_d = ChoiceFactory(question=cls.question_b, votes=3)

    def test_list_all_questions_returns_correct_vote_counts(self):
        questions = list_all_questions_with_total_votes()
        self.assertEqual(len(questions), 2)
        self.assertEqual(questions[0].total_votes, 6)
        self.assertEqual(questions[1].total_votes, 4)

from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from django_timer import Timer

from polls.serializers import QuestionSerializer
from polls.data import list_all_questions_with_total_votes


class QuestionSet(ViewSet):
    def list(self, request):
    	with Timer() as t:
	        questions = list_all_questions_with_total_votes()
        serializer = QuestionSerializer(questions, many=True)
        res = {
        	'data': serializer.data,
        	'took': t.delta
    	}
        return Response(res)

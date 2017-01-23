from django.db.models import Sum
from django.utils import timezone
from polls.models import Question


def list_all_questions_with_total_votes():
    return Question.objects.all() \
                           .filter(pub_date__lte=timezone.now()) \
                           .annotate(total_votes=Sum('choice__votes')) \
                           .order_by('-total_votes', '-pub_date')

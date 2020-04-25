from django.urls import path
from api.views import views_cbv, views_fbv


urlpatterns = [
    path('sections/', views_cbv.SectionsListAPIView.as_view()),
    path('sections/<int:section_id>/topics/', views_fbv.topics_list),
    path('sections/<int:section_id>/', views_fbv.section_details),
    path('topics/<int:topic_id>/subtopics/', views_cbv.SubtopicsListAPIView.as_view()),
    path('topics/<int:topic_id>/edit/', views_cbv.TopicDetailsAPIView.as_view()),
    path('subtopics/<int:subtopic_id>/edit/', views_fbv.subtopic_details)
]
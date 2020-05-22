from django.conf.urls import url, include
from myapp import views

urlpatterns = [
    url(r'show_books$', views.show_books)
]
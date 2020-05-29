from django.conf.urls import url, include
from myapp import views

urlpatterns = [
    url(r'show_books$', views.show_books),
    url(r'barcode_get_item', views.barcode_get_item),
    url(r'update_info', views.update_info),
    url(r'overview_item',views.overview_item)
]
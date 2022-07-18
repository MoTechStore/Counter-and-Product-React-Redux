from django.contrib import admin
from .models import User,Product,OrderItem,Order,ShippingAddress,Review


models_list = [Product,Order,OrderItem,ShippingAddress,Review] 
admin.site.register(models_list)

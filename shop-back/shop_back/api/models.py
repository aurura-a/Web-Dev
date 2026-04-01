from django.db import models
class Category(models.Model):
    name = models.CharField()


class Product(models.Model):
    name = models.CharField()
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)




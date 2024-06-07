from django.db import models

# Create your models here.
class Recipe(models.Model):
    x=[
        ('Breakfast','Breakfast'),
        ('Lunch','Lunch'),
        ('Dinner','Dinner'),
        ('Desserts','Desserts'),
        
    ]
    category=models.CharField(max_length=100,null=True,blank=True,choices=x)
    title=models.CharField(max_length=500,null=True,blank=True)
    image_url=models.ImageField(upload_to='photos/')
    description=models.TextField(max_length=2000,null=True,blank=True)
    video_url=models.URLField(max_length=1000)
    
    def __str__(self) -> str:
        return self.title
    
    
    
    
    
    
   
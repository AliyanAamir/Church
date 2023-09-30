from django.db import models
import uuid
# Create your models here.
class Event(models.Model):
    id = models.UUIDField(
         primary_key = True,
         default = uuid.uuid4,
         editable = False)
    date = models.DateField()
    title = models.CharField(max_length=255,default="")
    def __str__(self):
        return str(self.id)
    


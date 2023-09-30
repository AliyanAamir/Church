# views.py
from rest_framework import viewsets, status
from rest_framework.response import Response
from schedule.models import Event
from schedule.serializers import EventSerializer
from accounts.models import User
from django.core.mail import send_mail
import os
import dotenv


dotenv.load_dotenv()


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def list(self, request, *args, **kwargs):
      
        events = self.get_queryset()
        serializer = self.get_serializer(events, many=True)
        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
   
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        
        
        self.perform_create(serializer)

        
        admin_email = os.environ['EMAIL_USER']   
        users_except_admin = User.objects.exclude(email=admin_email)
        event_data = serializer.data

        for user in users_except_admin:
            send_mail(
                subject='Church Stream Scheduled',
                message=f'A Stream "{event_data["title"]}" has been scheduled at "{event_data["date"]}".',
                from_email=os.environ['EMAIL_USER'] ,  
                recipient_list=[user.email],
                fail_silently=False,
            )

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
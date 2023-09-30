from django.urls import path, include
from accounts.views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', UserViewSet)

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
    path('approve/<pk>/', UserViewSet.as_view({'post': 'approve'}), name='user-approve'),
    # Add the paths for standard CRUD operations using the router
    path('', include(router.urls)),

    # You can also add custom paths here if needed
    # path('custom-path/', CustomView.as_view(), name='custom-view'),
]







from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# A view function is a Python function that takes a web request and returns a web response.

def say_hello(request):
  return render(request, 'hello.html', {'name': 'Teddy'})
from django.http import HttpResponse


def hola_mundo(request):
    return HttpResponse("<h1>Hola, mundo</h1>")

from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.core import serializers
from django.http import JsonResponse
import json
import socket

def queryBarcode(barcode):
    #make connection
    HOST = '127.0.0.1'
    PORT = 9000
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect((HOST, PORT))
    #sending query message
    msg = barcode
    sock.send(msg.encode())
    reply = sock.recv(1024).decode('utf-8')
    print(reply)
    #send ending message
    end = "QUIT"
    sock.send(end.encode())
    return reply

def queryPos():
    #make connection
    HOST = '127.0.0.1'
    PORT = 9002
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect((HOST, PORT))
    #send query message
    msg = "UPDATE"
    sock.send(msg.encode())
    reply = sock.recv(1024).decode('utf-8')
    print(reply)
    #send ending message
    end = "QUIT"
    sock.send(end.encode())
    return reply


# Create your views here.
@require_http_methods(["GET"])
def show_books(request):
    response = {}
    try:
        # books = Book.objects.filter()
        # response['list'] = json.loads(serializers.serialize("json", books))
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1
    return JsonResponse(response)
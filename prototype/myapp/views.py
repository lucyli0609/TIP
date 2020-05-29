from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.core import serializers
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import socket
import os

path = os.getcwd()
with open(path+'/myapp/database.json', encoding='utf-8') as f:
        database = json.load(f)


def queryBarcode(barcode):
    #make connection
    print('hi!!!!')
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
    print("I want to connect!")
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect((HOST, PORT))
    print("I connected")
    #send query message
    msg = "UPDATE"
    sock.send(msg.encode())
    reply = sock.recv(1024).decode('utf-8')
    print(reply)
    #send ending message
    end = "QUIT"
    sock.send(end.encode())
    return reply

# HOST = '127.0.0.1'
# PORT = 9002

# sk = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# sk.connect((HOST, PORT))
# msg = "UPDATE"
# sk.send(msg.encode())
# print(sk.recv(1024).decode('utf-8'))

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

@require_http_methods(["GET"])
def barcode_get_item(request):
    response = {}
    # try:
    responseGet=json.loads(queryBarcode(request.GET.get('barcode')))
    print("1111",response)
        # response['productInfo'] ={'barcode': '012000000133','name': 'Pepsi','price': '4'}
    response['msg'] = 'success'
    response['error_num'] = 0
    response['newItem'] = responseGet['newItem']
    if(response['newItem']==0):
        response['productInfo']=json.loads(responseGet['productInfo'])
        # response['newItem'] =0
    # except  Exception as e:
    #     response['msg'] = str(e)
    #     response['error_num'] = 1
    return JsonResponse(response)

def add_product(barcode, quantity, name, price):
    print('Yes')
    if barcode in database:
        database[barcode]['quantity']=int(database[barcode]['quantity'])+int(quantity)
        print('here')
    else:
        database[barcode]={'barcode':barcode,'name':name, 'quantity':int(quantity), 'price': price, 'salesQuantity': 0}
        print('there')
    with open(path+'/myapp/database.json', 'w') as jsonFile:
        print(database)
        json.dump(database, jsonFile)
        print('success')

@require_http_methods(["POST"])
@csrf_exempt
def update_info(request):
    response = json.loads(request.body)
    print(response['barcode'])
    print(request.body)
    add_product(response['barcode'],response['quantity'],response['name'],response['price'])
    response={}
    response['msg'] = 'success'
    return JsonResponse(response)


@require_http_methods(["GET"])
def overview_item(request):
    pos_quantity()
    # response= json.dumps(database)
    # print(response)
    return JsonResponse(database)



def pos_quantity():
    # posData ={}
    print("Step1")
    posData = json.loads(queryPos())
    print("Step2")
    for item in posData:
       value = posData[item]
       barcode = value['barcode']
       print("barcode",barcode)
       if barcode in database:
            database[barcode]['quantity'] = int(database[barcode]['quantity'])-int(value['salesQuantity'])
            database[barcode]['salesQuantity'] = int(value['salesQuantity'])
    with open(path+'/myapp/database.json', 'w') as jsonFile:
        json.dump(database, jsonFile)


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
    sock.close()
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
    sock.close()

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
def barcode_get_item(request):
    barcode = request.GET.get('barcode')
    try:
    #First query database
        response = queryDatabase(barcode)

        #current database no recode query barcode system
        if response['newItem']==1:
            productInfo=json.loads(queryBarcode(barcode))
            print(">>>>",productInfo)
            response['productInfo']=productInfo
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1
    return JsonResponse(response)

def queryDatabase(barcode):
    reply={}
    if barcode in database:
        reply['productInfo'] = database[barcode]
        reply['newItem']=0
    else:
        reply['newItem']=1
    return reply


def add_product(barcode, quantity, name, price, supplier):
    print('Yes')
    if barcode in database:
        database[barcode]['quantity']=int(database[barcode]['quantity'])+int(quantity)
        print('here')
    else:
        database[barcode]={'barcode':barcode,'name':name, 'quantity':int(quantity), 'price': price, 'salesQuantity': 0,'supplier': supplier}
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
    add_product(response['barcode'],response['quantity'],response['name'],response['price'], response['supplier'])
    response={}
    response['msg'] = 'success'
    return JsonResponse(response)


@require_http_methods(["GET"])
def overview_item(request):
    pos_quantity()
    # response= json.dumps(database)
    # print(response)
    response={}
    response['productInfo']=[]
    for barcode in database:
        value = database[barcode]
        response['productInfo'].append(value)
    print(response)
    return JsonResponse(response)


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
            database[barcode]['salesQuantity'] = int(database[barcode]['salesQuantity'])+int(value['salesQuantity'])
    with open(path+'/myapp/database.json', 'w') as jsonFile:
        json.dump(database, jsonFile)


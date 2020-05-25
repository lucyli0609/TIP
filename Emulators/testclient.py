import socket

HOST = '127.0.0.1'
PORT = 9000

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect((HOST, PORT))
while True:
    msg = "049000006346"
    sock.send(msg.encode())
    print(sock.recv(1024).decode('utf-8'))


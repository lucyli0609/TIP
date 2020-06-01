import socket
import json

HOST = '127.0.0.1'  # Standard loopback interface address (localhost)
PORT = 9000  # Port to listen on (non-privileged ports are > 1023)

with open('data.json') as json_file:
    data = json.load(json_file)

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen(1)
    while True:
        print("Listening at", PORT)
        conn, addr = s.accept()
        try:
            print('Connected by', addr)
            stopped = False
            while True:
                msg = conn.recv(1024)
                barcode = msg.decode('utf-8')
                print("Client sent:" ,barcode)
                reply = {}
                if not barcode:
                    reply = "FALSE"
                else:
                    reply= data[barcode]
                print(json.dumps(reply))
                conn.sendall(json.dumps(reply).encode())
        except Exception:
            print("closing connection")
            conn.close()

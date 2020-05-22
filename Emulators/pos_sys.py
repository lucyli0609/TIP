import socket
import threading
import json

def updateQuantity(barcode, data):
    if barcode:
        temp = data[barcode]["quantity"]
        data[barcode]["quantity"] = temp+1

def main():
    HOST = '127.0.0.1'
    PORT = 9002
    size = 1024

    #open server thread for communication
    thread1 = ServerThread(HOST, PORT, size)
    thread1.start()

    with open('sales.json') as json_file:
        sales = json.load(json_file)

    while True:
        #wait for keyboard input
        item = input("Please enter your purchase item's barcode here:")
        if item == "QUIT":
            print("Quiting")
            break
        updateQuantity(item, sales)
        with open("sales.json", "w") as jsonFile:
            json.dump(sales, jsonFile)

class ServerThread(threading.Thread):
    def __init__(self, host, port, size):
        super(ServerThread, self).__init__()
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.host = host
        self.port = port
        self.sock.bind((self.host, self.port))
        self.data_size = size
        self.stopped = False

    def run(self):
        self.sock.listen(1)
        while True:
            print('Listening at', self.port)
            conn, addr = self.sock.accept()
            print('Connected by', addr)
            with open('sales.json') as json_file:
                sales = json.load(json_file)
            try:
                while not self.stopped:
                    msg = conn.recv(self.data_size)
                    msg_str = msg.decode('utf-8')
                    print('clent sent', msg_str)
                    reply = ""
                    if msg_str == 'QUIT':
                        print('Client close the connection')
                        self.stopped = True
                    elif msg_str != "UPDATE":
                        reply = "FALSE"
                        conn.sendall(reply.encode())
                    else:
                        reply = json.dumps(sales)
                        conn.sendall(reply.encode())
                conn.close()
            except Exception as msg:
                print ("Socket Error: %s" % msg)
                conn.close()

if __name__ == '__main__':
    main()
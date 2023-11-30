from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
class MyHandler(SimpleHTTPRequestHandler):

    def do_GET(self):
        f = open('routing.json')
        data = json.load(f)
        for i in data['routes']:
            if self.path == i['path']:
                self.path = "src/components/" + i['component']
        f.close()
        return SimpleHTTPRequestHandler.do_GET(self)

def run_custom_server(port, my_file_path):
    handler = MyHandler
    server = HTTPServer(('localhost', port), handler)
    server.serve_forever()

if __name__ == "__main__":
    run_custom_server(8000, "")

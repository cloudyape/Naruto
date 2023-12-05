from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
from backend.app.index import handle_api_request
class MyHandler(SimpleHTTPRequestHandler):

    def do_GET(self):
        if self.path.startswith("/api"):
            api_response = handle_api_request(self.path)
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(api_response).encode('utf-8'))
        else:
            f = open('routing.json')
            data = json.load(f)
            for i in data['routes']:
                if self.path == i['path']:
                    print(i['path'] + "   " + i['component'])
                    self.path = "src/components/" + i['component']
                    print(self.path)
                    
            f.close()
            return SimpleHTTPRequestHandler.do_GET(self)
            


def run_custom_server(port, my_file_path):
    handler = MyHandler
    server = HTTPServer(('localhost', port), handler)
    server.serve_forever()

if __name__ == "__main__":
    run_custom_server(8000, "")

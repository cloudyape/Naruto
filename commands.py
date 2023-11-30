import subprocess
import sys
import os
import socket
import time
import signal
import webbrowser
import threading
import io
from http.server import HTTPServer, SimpleHTTPRequestHandler

 
def get_dir_size(path='.'):
    total = 0
    with os.scandir(path) as it:
        for entry in it:
            if entry.is_file():
                total += entry.stat().st_size
            elif entry.is_dir():
                total += get_dir_size(entry.path)
    return total

def is_port_open(port):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(1)

    try:
        result = sock.connect_ex(('127.0.0.1', port))
        return result == 0
    except Exception as e:
        print(f"Error checking port {port}: {e}")
        return False
    finally:
        sock.close()

class MyHandler(SimpleHTTPRequestHandler):

    def do_GET(self):
        requested_path = self.path

        if requested_path.endswith('/'):
            requested_path += 'index.html'

        self.path = requested_path

        result = SimpleHTTPRequestHandler.do_GET(self)

        if "404 Not Found" in str(result):
            self.path = '/404.html'
            result = SimpleHTTPRequestHandler.do_GET(self)

        return result


def run_port(port, my_file_path, newStatus):
    status = get_dir_size(my_file_path)
    if is_port_open(int(port)):
        error(f"Port {port} is already in use.", "Choose a different port.")
    else:
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            pass
        finally:
            try:
                if newStatus != status:
                    print(f"Starting server on Port .... {port}")
                    server_command = [sys.executable, 'custom_server.py', my_file_path, port]
                    p = subprocess.Popen(
                        server_command, cwd=os.path.dirname(os.path.realpath(__file__)))
                    print(f"Server started at http://localhost:{port}")

                    # Wait for the subprocess to finish
                    p.wait()
                else:
                    run_port(port, my_file_path, status)

            except Exception as e:
                print(e)

            except KeyboardInterrupt:
                print("Saanp Dead")
                p.terminate()

            # Kill the subprocess after 1 second
            time.sleep(1)
            p.terminate()


def no_setup():
    print("Error: You need to set up the project... Solution: Use Command -> saanp setup new")

def error(problem, solution):
    print(f"Error: {problem}... Solution: {solution}")

def create_directory(directory):
    try:
        os.makedirs(directory, exist_ok=True)
    except Exception as e:
        error("Failed to create directory", f"Error: {e}")

def main(file_path):
    setupFlag = 0
    newStatus = 0
    file_path = "./"
    while True:
        user_input = input("Welcome to Saanp!...Hisssss!!!...Enter a Command : ")
        
        index_html_path = "./index.html"  # Replace with the actual path of index.html

        if user_input.lower() == "saanp run":
            if not os.path.exists(index_html_path):
                no_setup()
            else:
                run_port('8000', file_path, 0)
        elif user_input.lower().startswith("saanp run port"):
            if not os.path.exists(index_html_path):
                no_setup()
            else:
                split_ip = user_input.lower().split()
                try:
                    run_port(split_ip[3], file_path, 0)
                except IndexError:
                    run_port("8000", file_path, 0)
        elif user_input.lower().startswith("saanp setup new"):
            try:
                if not os.path.exists(index_html_path):
                
                    print("**************************************************")
                    file = io.open("index.html", "w", encoding='utf-8')
                    file.write('''

<!DOCTYPE html>
<html>
<head>
</head>
<body>

<script>
    // Flag to ensure loadAnotherHTML is called only once
    var loaded = false;
  
    // Function to load another HTML file
    function loadAnotherHTML() {
      if (!loaded) {
        fetch('src/components/app/app.component.html')
          .then(response => response.text())
          .then(htmlContent => {
            // Insert the loaded content into the body
            document.body.innerHTML = htmlContent;
  
            // Extract and execute scripts
            var scriptRegex = /<script\\b[^>]*>([\s\S]*?)<\/script>/gm;
            var matches;
            while ((matches = scriptRegex.exec(htmlContent)) !== null) {
              var scriptCode = matches[1];
              var srcAttribute = matches[0].match(/src=["'](.*?)["']/);
  
              if (srcAttribute) {
                // External script with src attribute
                var scriptSrc = srcAttribute[1];
                loadExternalScript(scriptSrc);
              } else {
                // Inline script
                try {
                  new Function(scriptCode)();
                } catch (error) {
                  console.error('Error executing script:', error);
                }
              }
            }
  
            // Set the flag to true to prevent further calls
            loaded = true;
          })
          .catch(error => {
            console.error('Error loading HTML:', error);
          });
      }
    }
  
    // Function to load an external script
    function loadExternalScript(src) {
      var scriptElement = document.createElement('script');
      scriptElement.src = src;
      document.head.appendChild(scriptElement);
    }
  
    // Call the function to load another HTML file
    loadAnotherHTML();
  </script>

</body>
</html>


                               
                               ''')
                    file = io.open("routing.json", "w", encoding='utf-8')
                    file.write('''
{"routes": [
    {"path": "/", "component": "app/app.component.html"}, 
    {"path": "/tagName", "component": "app/app.component.html"}
    ]
}                               
                               ''')
                    # Creating directories
                    directories = [
                        "backend",
                        "backend/app",
                        "backend/test",
                        "src",
                        "src/static",
                        "src/static/css",
                        "src/static/js",
                        "src/static/archive",
                        "src/components/app"
                    ]

                    for directory in directories:
                        try:
                            os.makedirs(os.path.join(file_path, directory), exist_ok=True)
                        except FileExistsError:
                            print(f"Directory {os.path.join(file_path, directory)} already exists. Skipping creation.")
                    file = io.open("src/static/js/main.js", "w", encoding='utf-8')
                    file.write('''
function loadTag(tagName) {
    document.addEventListener("DOMContentLoaded", function() {
        var tagNameTags = document.querySelectorAll(tagName);
        tagNameTags.forEach(function(tagNameTag, index) {
            var fileName = 'src/components/' + tagName + "/" + tagName + '.component.html'; // Adjust the filename as needed

            // Load content from the corresponding HTML file
            loadContent(fileName, function(response) {
                // Set the content inside the <tagName> tag
                tagNameTag.innerHTML = response;
            });
        });

        function loadContent(url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    callback(xhr.responseText);
                }
            };
            xhr.open("GET", url, true);
            xhr.send();
        }
    });
}
                               ''')
                    file = io.open("src/components/app/app.component.html", "w", encoding='utf-8')
                    file.write('''
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="src/static/js/main.js"></script>
<link href="src/static/css/style.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<link href="src/components/app/app.component.css" rel="stylesheet">
<script src="src/components/app/app.component.js"></script>
<div class="app_component" id="app_component">
    <div class="text">
        <h1>Welcome to Saanp... Hisss!!!</h1>
    </div>
</div>               
                               ''')
                    file = io.open("src/components/app/app.component.css", "w", encoding='utf-8')
                    file.write('''
html, body {
    height: 100%; margin: 0; padding: 0;
}

* html #outer {/* ie6 and under only*/
    height:100%;
}

.wrapper {
    min-height: 100%;
    margin: -240px auto 0;
}

.content {padding-top: 240px;}

.footer {
    height: 240px; background: #F16924;
}

.app_component {
    background: #fe5e54;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width: 100%;
    height: 100%;
}

.app_component h1 {
    font-weight: 100 !important;
}

.logo {
    font-size: 114px;
    text-align: center;
}           
                               ''')
                    file = io.open("src/components/app/app.component.js", "w", encoding='utf-8')
                    file.write('''''')
                    print(f"Saanp Project Setup Complete")
                    print("**************************************************")
                    print("Killing Saanp")
                else:
                    error("Project already exists", "Solution: Log on to that project and run -> saanp run")
            except Exception as e:
                print(e)
                error("This is on us", f'Email us at admin@xanfinity.com\nError: {e}')
        elif user_input.lower() == "exit":
            print("Saanp dead")
            break
        elif user_input.lower().startswith("saanp n c"):
            print("**************************************************")
            split_comp = user_input.lower().split(" ")
            try:
                os.mkdir("src/components/" +split_comp[3])
                file = open("src/components/" + split_comp[3] + "/" +split_comp[3]+".component.html", 'w')
                file.write(f'''

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="src/static/js/main.js"></script>
<link href="src/static/css/style.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script>
    // Function to dynamically add a stylesheet
    function addStyleSheet(url) {{
      var link = document.createElement('link');
      link.href = url;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }}

    // Function to dynamically add a script
    function addScript(url) {{
        console.log(url);
      var script = document.createElement('script');
      script.src = url;
      document.head.appendChild(script);
    }}
      // Add the stylesheet dynamically
    addStyleSheet("http://"+window.location.host + '/src/components/{split_comp[3]}/{split_comp[3]}.component.css');
    // Add the script dynamically
    addScript("http://"+window.location.host + '/src/components/{split_comp[3]}/{split_comp[3]}.component.js');
</script>
<!-------------HTML BELOW-------------->
<div class="{split_comp[3]}_component" id="{split_comp[3]}_component">
    <div class="text">
        <h1>{split_comp[3]} component Work... Hisss!!!</h1>
    </div>
</div>
''')

                file.close()
                file = open("src/components/" + split_comp[3] + "/" +split_comp[3]+".component.css", 'w')
                file.close()
                file = open("src/components/" + split_comp[3] + "/" +split_comp[3]+".component.js", 'w')
                file.close()
                file = open("src/components/" + split_comp[3] + "/" +split_comp[3]+".component.test.js", 'w')
                file.close()
                print("Generated New Component " + split_comp[3])
            except Exception as e:
                print(e)
            print("**************************************************")
        else:
            print("Invalid command. Type 'saanp run' to start the server or 'exit' to quit.")

if __name__ == "__main__":
    main("")

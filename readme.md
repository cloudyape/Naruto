# Naruto - A Full Stack Development Framework using Python
Naruto is a full stack Python Development library. It really fun and Easy.
## Below are some useful commands
| Command | Action |
| ----------- | ----------- |
| naruto setup new | Setup a new Project |
| naruto n c <componentName> | To Setup a new component|
| naruto run | To start local server on 8000|
| naruto run port <portNumber> | To start local server on Custom Port|
| naruto auto create <variable name> | To auto create a variable using AI |

For Further Docs : Please log into https://naruto.design

## Update to be uploaded soon to website
Here how I handedled post request
In index.py
```import json

def handle_api_request(path, payload=None):
    # Handle API requests here
    if path == "/api/data":
        if payload:
            # Assuming payload is in JSON format
            data = json.loads(payload)
            # Your logic with the received payload data can go here
            response = {'message': f'Hello from API! Received payload: {data}'}
            return response
        else:
            return {'error': 'Payload is missing'}
    else:
        return {'error': 'Endpoint not found'}
```
Then in js in component i use #callApi
The syntax of Naruto function callApi is below
```callApi('http://localhost:8000/api/data', 'json', 'POST', {'muload': "muload"}).then(
    data => {
        console.log('mydata' , data);
    }
)
```

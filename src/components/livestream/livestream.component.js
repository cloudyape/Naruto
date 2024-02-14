loadTag('headTag');
window.base = "http://localhost:8000/";
window.resposeDat = [];

const socket = new WebSocket("ws://localhost:8765");

socket.onopen = function (event) {
    console.log("Connected to the server.");
};

socket.onmessage = function (event) {
    const video = document.createElement("video");
    video.srcObject = event.data;
    video.autoplay = true;
    video.className = "video";
    document.getElementById("videos").appendChild(video);
};

socket.onerror = function (error) {
    console.error("WebSocket error: ", error);
};

socket.onclose = function () {
    console.log("Connection closed.");
};

vc();

bla().then(() => {
    console.log('mystrem' ,window.resposeDat); // Access window.resposeDat after it's updated
});
              
function bla() {
    return new Promise((resolve, reject) => {
        callApi(base + 'api/ls', 'json', 'POST').then(
            data => {
                window.resposeDat = data;
                resolve(); // Resolve the promise after updating window.resposeDat
            }
        ).catch(error => {
            reject(error); // Reject the promise if there's an error
        });
    });
}  

function vc() {
    return new Promise((resolve, reject) => {
        callApi(base + 'api/vc', 'json', 'POST').then(
            data => {
                window.resposeDat = data;
                resolve(); // Resolve the promise after updating window.resposeDat
            }
        ).catch(error => {
            reject(error); // Reject the promise if there's an error
        });
    });
}          


function stop() {
    callApi(base + 'api/lsend', 'json', 'POST').then(
        data => {
            window.resposeDat = data;
            resolve(); // Resolve the promise after updating window.resposeDat
        }
    );
}
                
/***********************Write all JS above this ******************/
updateHtml()
                
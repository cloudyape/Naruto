loadTag('headTag');
window.base = "http://localhost:8000/";
window.resposeDat = [];
bla().then(() => {
    console.log(window.resposeDat); // Access window.resposeDat after it's updated

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function creates an <iframe> (and YouTube player)
    // after the API code downloads.
    window.onYouTubeIframeAPIReady = function () {
        // Randomly select a video from the videoData array
        for (let i = 0; i < window.resposeDat.length; i++) {
            if (window.resposeDat[i].title.toLowerCase().indexOf("zero to six figure front end developer") > 0) {
                $("#player").append('<div id="player' + i + '" class="col-lg-6 p-3"></div>')
                player = new YT.Player('player' + i, {
                    height: '390',
                    width: '100%',
                    videoId: window.resposeDat[i].videoId,
                    playerVars: {
                        'playsinline': 1
                    },
                    events: {}
                });
            }
        }
    };
});

function bla() {
    return new Promise((resolve, reject) => {
        callApi(base + 'api/yt', 'json', 'POST').then(
            data => {
                window.resposeDat = data;
                resolve(); // Resolve the promise after updating window.resposeDat
            }
        ).catch(error => {
            reject(error); // Reject the promise if there's an error
        });
    });
}

                
                
                
/***********************Write all JS above this ******************/
updateHtml()
                
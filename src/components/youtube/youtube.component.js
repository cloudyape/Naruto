loadTag('headTag');
window.base = "http://localhost:8000/";
window.resposeDat = [];

// Function to call youSearch() when enter key is pressed
$(".searchProduct").keypress(function(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.which === 13) {
        youSearch(); // Call youSearch() function
    }
});

bla("").then(() => {
    console.log(window.resposeDat);

    window.onYouTubeIframeAPIReady = function () {
        for (let i = 0; i < window.resposeDat.length; i++) {
            $("#playerSection").append('<div id="player' + i + '" class="col-lg-6 p-0"></div>')
            player = new YT.Player('player' + i, {
                height: '390',
                width: '100%',
                videoId: window.resposeDat[i].video_id,
                playerVars: {
                    'playsinline': 1
                },
                events: {
                    'onReady': function (event) {
                        $(".loader").hide();
                    }
                }
            });
        }
    };

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

function bla(payloadData) {
    let payload = { "query": payloadData }
    return new Promise((resolve, reject) => {
        callApi(base + 'api/syt', 'json', 'POST', payload).then(
            data => {
                window.resposeDat = data;
                resolve();
            }
        ).catch(error => {
            reject(error);
        });
    });
}

function youSearch() {
    var searchVal = $(".searchProduct").val();
    bla(searchVal).then(() => {
        $("#playerSection").html('');
        $(".loader").show();

        for (let i = 0; i < window.resposeDat.length; i++) {
            $("#playerSection").append('<div id="player' + i + '" class="col-lg-6 p-0"></div>')
            player = new YT.Player('player' + i, {
                height: '390',
                width: '100%',
                videoId: window.resposeDat[i].video_id,
                playerVars: {
                    'playsinline': 1
                },
                events: {
                    'onReady': function (event) {
                        $(".loader").hide();
                    }
                }
            });
        }

        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    });
}

/***********************Write all JS above this ******************/
updateHtml();

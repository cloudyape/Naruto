loadTag('headTag');
window.base = "http://localhost:8000/";
window.changedText = "Hi I am Botlix, your Career Councellor. How can I help you?";
bla = "hiii";

document.addEventListener("keyup", function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        chatVal = $(".chatBoxInner").val();
        if (chatVal.length > 0) {
            sp();
        }
    }
  });

function sp() {
    chatVal = $(".chatBoxInner").val();
    payload = { "bla": chatVal }
    window.resposeDat = "";
    callApi(base + 'api/data', 'json', 'POST', payload).then(
        data => {
            window.resposeDat = data.message;
            textToSpeak = data.message;
            // Check if the browser supports the SpeechSynthesis API
            if ('speechSynthesis' in window) {
                // Create a new SpeechSynthesisUtterance instance
                var utterance = new SpeechSynthesisUtterance(textToSpeak);

                // Use the SpeechSynthesis API to speak the text
                window.speechSynthesis.speak(utterance);
            } else {
                // Handle the case where the browser does not support the SpeechSynthesis API
                alert('Speech synthesis is not supported in this browser.');
            }
            changedText = textToSpeak;
            console.log('nulla', textToSpeak);
            updateVariable('changedText', changedText);
            console.log('gettexttospeak', textToSpeak, data);
        }
    );
    $(".chatBoxInner").val("")
}


/***********************Write all JS above this ******************/
updateHtml()

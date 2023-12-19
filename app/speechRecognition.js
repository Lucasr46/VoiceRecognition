const saidResult = document.getElementById('guess')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){  
  result = (e.results[0] [0].transcript)
  showResultOnScreen(result)
  verifyValidatedValue(result)
}

function showResultOnScreen(result){
    saidResult.innerHTML = `
      <div>You have said</div>
      <span class="box">${result}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())
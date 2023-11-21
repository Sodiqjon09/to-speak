function convertTextToSpeech() {
    var inputText = document.getElementById('inputText').value;

    // Brauzerda Web Speech API qo'llanilganmi tekshirish
    if ('speechSynthesis' in window) {
        var synthesis = window.speechSynthesis;
        
        // So'zni ovozga aylantirish uchun qo'llanilgan SpeechSynthesisUtterance obyekti
        var utterance = new SpeechSynthesisUtterance(inputText);

        // Ovozni tinglash va boshlash
        synthesis.speak(utterance);
    } else {
        alert("Kechirasiz, brauzeringiz Web Speech API ni qo'llamaydi.");
    }
}

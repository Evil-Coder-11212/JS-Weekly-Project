// Initializing Variables
const result = document.getElementById('result');
const findBtn = document.getElementById('find-btn');
const sentenceInput = document.getElementById('words-input');
const letterInput = document.getElementById('letter-input');

// Finding the letter in the sentence in here
const findLetterInSentence = (sentence, letter) =>{
    let error = false;
    let message = ""
    if(sentence != null && letter != null && sentence != "" && letter != ""){
        if(sentence.toLowerCase().includes(letter.toLowerCase())){
            message = `Yeah, the sentence contains the letter: ${letter}`
            result.textContent = message;
        }else{
            message = `No, the sentence doesn't contains the letter: ${letter}`
            result.textContent = message;
        }
    }else{
        error = true;
        message = "You didn't put value in sentence or letter input:";
        result.textContent = message;
    }
}
// Calling Function
findBtn.addEventListener('click', ()=>{
    findLetterInSentence(sentenceInput.value, letterInput.value);
})
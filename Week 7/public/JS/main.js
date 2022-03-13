// Initializing Variables
const outputEl = document.getElementById('output')
const generateBtn = document.getElementById('password-btn');
const copyIcon = document.getElementById('copy-Btn');
const copyEl = document.getElementById('copy');

// Generating Random Password
const randomPassword = () =>{
    const chars  = `1234567890-_=+{}[]\\|:;'"<>?/.,~+-/*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`
    let stringLength = 10;
    let total = ""
    for(let i = 0; i <= stringLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        total += chars.substring(randomNumber,randomNumber+1);
    }
    return total;
} 

// Render The Password
const render = () =>{
    outputEl.textContent = randomPassword();
}

// Copy
const copy = () =>{
    navigator.clipboard.writeText(outputEl.innerText)
    copyEl.style.display="block"
    copyEl.style.animation="fade 0.6s 0s 1"
}

const deleteEl = () =>{
    copyEl.style.display="none"
}

// Calling Functions
generateBtn.addEventListener('click', ()=>{
    render();
})

copyIcon.addEventListener('click', ()=>{
    copy()
    setTimeout(deleteEl, 1000)
})
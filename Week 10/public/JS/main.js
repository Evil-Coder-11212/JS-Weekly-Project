// Random Number Function and button click
const guessBtn = document.getElementById('guess-btn');
const hintEl = document.getElementById('hint-text');
let hintMessage = "";
const answerBtn = document.getElementById('answer-btn');
const randomNumber = () =>{
    let total = Math.floor(Math.random()*100)+1;
    guessBtn.addEventListener('click', ()=>{
        const inputEl = document.getElementById('guess-input');
        if(inputEl.value == total){
            timeEl.innerText = countDown;
            timeEl.textContent = "Correct"
            countDown = 10;
            total = Math.floor(Math.random()*100)+1;
            hintEl.innerText = `HINT: ${hintMessage}`
            if(total <= 10){
                hintMessage = "Less than or equal to 10 and greater than 0"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 20){
                hintMessage = "Less than or equal to 20 and greater than 10"
            }else if(total <= 30){
                hintMessage = "Less than or equal to 30 and greater than 20"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 40){
                hintMessage = "Less than or equal to 40 and greater than 30"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 50){
                hintMessage = "Less than or equal to 50 and greater than 40"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 60){
                hintMessage = "Less than or equal to 60 and greater than 50"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 70){
                hintMessage = "Less than or equal to 70 and greater than 60"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 80){
                hintMessage = "Less than or equal to 80 and greater than 70"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 90){
                hintMessage = "Less than or equal to 90 and greater than 80"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 100){
                hintMessage = "Less than or equal to 100 and greater than 90"
            }else{
                hintMessage = "An error occurs try referring the page"
            hintEl.innerText = `HINT: ${hintMessage}`
        }
        }else{
            timeEl.innerText = countDown;
            timeEl.textContent = "InCorrect"
            countDown = 10;
            total = Math.floor(Math.random()*100)+1;
            hintEl.innerText = `HINT: ${hintMessage}`
            if(total <= 10){
                hintMessage = "Less than or equal to 10 and greater than 0"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 20){
                hintMessage = "Less than or equal to 20 and greater than 10"
            }else if(total <= 30){
                hintMessage = "Less than or equal to 30 and greater than 20"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 40){
                hintMessage = "Less than or equal to 40 and greater than 30"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 50){
                hintMessage = "Less than or equal to 50 and greater than 40"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 60){
                hintMessage = "Less than or equal to 60 and greater than 50"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 70){
                hintMessage = "Less than or equal to 70 and greater than 60"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 80){
                hintMessage = "Less than or equal to 80 and greater than 70"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 90){
                hintMessage = "Less than or equal to 90 and greater than 80"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 100){
                hintMessage = "Less than or equal to 100 and greater than 90"
            }else{
                hintMessage = "An error occurs try referring the page"
            hintEl.innerText = `HINT: ${hintMessage}`
        }
        }
    });
    answerBtn.addEventListener('mousedown', ()=>{
            timeEl.innerText = total;
    });
    hintEl.innerText = `HINT: ${hintMessage}`
    if(total <= 10){
        hintMessage = "Less than or equal to 10 and greater than 0"
    hintEl.innerText = `HINT: ${hintMessage}`
    }else if(total <= 20){
            hintMessage = "Less than or equal to 20 and greater than 10"
    }else if(total <= 30){
            hintMessage = "Less than or equal to 30 and greater than 20"
        hintEl.innerText = `HINT: ${hintMessage}`
    }else if(total <= 40){
            hintMessage = "Less than or equal to 40 and greater than 30"
        hintEl.innerText = `HINT: ${hintMessage}`
    }else if(total <= 50){
            hintMessage = "Less than or equal to 50 and greater than 40"
        hintEl.innerText = `HINT: ${hintMessage}`
    }else if(total <= 60){
            hintMessage = "Less than or equal to 60 and greater than 50"
        hintEl.innerText = `HINT: ${hintMessage}`
    }else if(total <= 70){
            hintMessage = "Less than or equal to 70 and greater than 60"
        hintEl.innerText = `HINT: ${hintMessage}`
    }else if(total <= 80){
            hintMessage = "Less than or equal to 80 and greater than 70"
        hintEl.innerText = `HINT: ${hintMessage}`
    }else if(total <= 90){
            hintMessage = "Less than or equal to 90 and greater than 80"
        hintEl.innerText = `HINT: ${hintMessage}`
    }else if(total <= 100){
            hintMessage = "Less than or equal to 100 and greater than 90"
    }else{
            hintMessage = "An error occurs try referring the page"
        hintEl.innerText = `HINT: ${hintMessage}`
    }
    return total;
}

// Calling Functions
randomNumber();

// Timer Function and the logic
const timeEl = document.getElementById('timer');
let countDown = 10;
const timer = () =>{
    setInterval(() => {
    timeEl.innerText = countDown;
    if(countDown <= 10){
        countDown--
    }
    if(countDown === 0){
        randomNumber();
        countDown = 10;
        hintEl.innerText = `HINT: ${hintMessage}`
        if(total <= 10){
                hintMessage = "Less than or equal to 10 and greater than 0"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 20){
                hintMessage = "Less than or equal to 20 and greater than 10"
        }else if(total <= 30){
                hintMessage = "Less than or equal to 30 and greater than 20"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 40){
                hintMessage = "Less than or equal to 40 and greater than 30"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 50){
                hintMessage = "Less than or equal to 50 and greater than 40"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 60){
                hintMessage = "Less than or equal to 60 and greater than 50"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 70){
                hintMessage = "Less than or equal to 70 and greater than 60"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 80){
                hintMessage = "Less than or equal to 80 and greater than 70"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 90){
                hintMessage = "Less than or equal to 90 and greater than 80"
            hintEl.innerText = `HINT: ${hintMessage}`
        }else if(total <= 100){
                hintMessage = "Less than or equal to 100 and greater than 90"
        }else{
                hintMessage = "An error occurs try referring the page"
        }
    }
}, 1000)
}
// Calling Functions
timer();
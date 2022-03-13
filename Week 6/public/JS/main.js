// Initializing Variables
const resultEl = document.getElementById('results');
const meterInputEl = document.getElementById('meter-input');
const feetInputEl = document.getElementById('feet-input');
const calculateBtn = document.getElementById('calculate-btn');
const switchBtn = document.getElementById('switch-btn');
let error = false;

// This function helps in the logic of whole application
const logic = (num1, num2) =>{
    if(meterInputEl.value == "" && feetInputEl.value == ""){
        let errorMessage = "Please type an number to convert meters to feet, feet to meters or both"
        error = true;
        resultEl.textContent = errorMessage;
    }else if(meterInputEl.value && feetInputEl.value ==''){
        let total = Math.round(num1 * 3.28084);
        error = false;
        resultEl.textContent = `${total}Feet`;
    }else if(meterInputEl.value == '' && feetInputEl.value){
        let total = Math.round(num2 / 3.28);
        error = false;
        resultEl.textContent = `${total}Meter`;
    }else if(meterInputEl.value && feetInputEl.value){
        let feetTotal = Math.round(num2 / 3.28);
        let meterTotal = Math.round(num1 * 3.28084);
        let total = `${meterTotal}Meter && ${feetTotal}Feet`
        resultEl.textContent = total;
    }
}

// Calling Functions
calculateBtn.addEventListener('click', ()=>{
    logic(Number(meterInputEl.value), Number(feetInputEl.value));
})

// Switcher
const firstContainer = document.getElementById('first-container');
const lastContainer = document.getElementById('last-container');
switchBtn.addEventListener('click', ()=>{
    if(lastContainer.classList.contains("display-off")) {
        lastContainer.style.animation="left 2s 0s 1"
        firstContainer.style.animation="right 2s 0s 1"
        lastContainer.classList.remove("display-off");
        firstContainer.classList.add("display-off");
        switchBtn.innerText="Back To Calculator"
    }
    else{
        lastContainer.classList.add("display-off");
        firstContainer.classList.remove("display-off");
        switchBtn.innerText="How to Use"
    }
})



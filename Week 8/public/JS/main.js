// Initializing Variables
const calculateBtn = document.getElementById('calculate-btn');
const addBtn = document.getElementById('add-btn');
const resultEl = document.getElementById('result');
const marks = [
    
]

const percentage = ()=>{
    const marksEl = document.getElementById('marks-input');
    const offEl = document.getElementById('of-marks');
    if(marksEl != null && offEl != null){
        let total = "";
        total = `${(Number(marksEl.value)*Number(offEl.value))/100}%`;
        resultEl.textContent = total;
    }else{
        return null;
    }
}

// Calling Functions

calculateBtn.addEventListener('click', ()=>{
    percentage();
})

// To Do
// Do THis For Every element
// Print it into DOM
// add the value inside the array
// SOlve the formula by: /Future/
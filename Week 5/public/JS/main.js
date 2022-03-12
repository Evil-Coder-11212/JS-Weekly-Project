// Initializing Variables
const Btns = document.querySelectorAll('.btn');
const dropdown = document.getElementById('size-dropdown');
const allOptions = document.querySelectorAll('.options');
let count = 4;

// Creating Element inside dropdown and a little logic
const createElement = () =>{
    const inputEl = document.getElementById('add-item');
    let options = document.createElement('option');
    options.setAttribute('class', "options");
    dropdown.append(options);
    if(inputEl.value == ""){
        count++;
        options.innerText = count;
        options.setAttribute('value', count);
    }else{
        count++;
        options.innerText = `${inputEl.value}`;
        options.setAttribute('value',  `"${inputEl.value}"`);
    }
        
}

// Calling Functions
Btns[0].addEventListener('click', ()=>{
    createElement();
})


// Problems
// Creating the delete button: 
// Solving the array problem: 
// remove functions
// Saving it into local system
// When open this sit for the first time save the px into local system
// Initializing Variables
// Creating Element inside dropdown and a little 

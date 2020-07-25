// TODO: keyboard functionality, improve code readability, input for 
// amount of digits after comma

let allBtns = document.querySelectorAll('button');
const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equals]');
const ansBtn = document.querySelector('[data-ans]');
const clearEverythingBtn = document.querySelector('[data-clear-everything]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const outputDiv = document.querySelector('.output');
let currentOperand = document.querySelector('[data-current-operand]');
let previousOperand = document.querySelector('[data-previous-operand]');
let operator;
let ans = 0;

// functions
// add the number/operator pressed to the section below.
function append(number) {
    if (number === '.' && currentOperand.innerText.includes('.')) return;
    currentOperand.innerText += number;
}

// if the section above is not empty, compute. Then, add the operator to the section below.
function chooseOperator(chosenOperator) {
    if (currentOperand.innerText === '') return;
    if (previousOperand.innerText !== '') {
        compute()
    }
    operator = chosenOperator;
    append(operator);
    updateDisplay();
}

// after that, the top section gets the below section appened to it. the below section gets cleared. 
function updateDisplay() {
    previousOperand.innerText += currentOperand.innerText;
    currentOperand.innerText = '';
}

function compute() {
    let computation;
    let prev = parseFloat(previousOperand.innerText);
    let current = parseFloat(currentOperand.innerText);
    if (isNaN(prev) || isNaN(current)) return;
    switch(operator){
        case '+':
            computation = prev + current;
            break;

        case '-':
            computation = prev - current;
            break;
            
        case '÷':
            computation = prev / current;
            break;

        case '*':
            computation = prev * current;
            break;

        default:
            return;
    }
    previousOperand.innerText = parseFloat(computation.toFixed(4));
    ans = previousOperand.innerText;
    currentOperand.innerText = '';
}

function clearEverything() {
    previousOperand.innerText = '';
    currentOperand.innerText = '';
    prev = '';
    operator = undefined;
    current = '';
    computation = '';
}

function clear() {
    currentOperand.innerText = '';
}

// 'delete' is reserved word so 'backspace' is alternative.
function backspace() {
    currentOperand.innerText = currentOperand.innerText.slice(0,-1);
}

function disableInput() {
    allBtns.forEach(button => {
        button.disabled = true;
    })
    clearEverythingBtn.disabled = false;
}

function enableInput() {
    allBtns.forEach(button => {
        button.disabled = false;
    })
}

function newRound() {
    disableInput();
    clearEverythingBtn.classList.add('new-round-btn');
    outputDiv.classList.add('new-round-output');
}

function ansFunc() {
    append(ans)
}

// event listeners
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        append(button.innerText);
    })
})
operationBtns.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperator(button.innerText);
        // updateDisplay();
    })
})

equalBtn.addEventListener('click', () => {
    if (previousOperand.innerText === '' || currentOperand.innerText === '') return;
    compute();
    newRound();
})

ansBtn.addEventListener('click', () => {
    ansFunc();
})

clearEverythingBtn.addEventListener('click', () => {
    clearEverything();
    clearEverythingBtn.classList.remove('new-round-btn');
    outputDiv.classList.remove('new-round-output');
    enableInput();
})

clearBtn.addEventListener('click', () => {
    clear();
})

deleteBtn.addEventListener('click', () => {
    backspace();
})
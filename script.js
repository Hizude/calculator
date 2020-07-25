// On numBtn press, append num to currentOperand.innerText
// have 3 vars: prev, operator, current
 // on operator press, move operand up and type new num in current operand

const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equals]');
const ansBtn = document.querySelector('[data-ans]');
const clearEverythingBtn = document.querySelector('[data-clear-everything]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
let currentOperand = document.querySelector('[data-current-operand]');
let previousOperand = document.querySelector('[data-previous-operand]');
let prev;
let operator;
let current;
let computation;

function append(number) {
    if (number === '.' && currentOperand.innerText.includes('.')) return;
    if (currentOperand.innerText === '' && isNaN(number)) return;
    currentOperand.innerText += number;
}

function chooseOperator(chosenOperator) {
    operator = chosenOperator;
    append(operator);
    if (currentOperand == '' && number == operator) {
        updateDisplay();
    }
}

function updateDisplay() {
    previousOperand.innerText += currentOperand.innerText;
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
    //
}

// 'delete' is reserved word so 'backspace' is alternative.
function backspace() {
    //
}

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        append(button.innerText);
    })
})
operationBtns.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperator(button.innerText);
        updateDisplay();
    })
})

equalBtn.addEventListener('click', () => {
    compute();
})

ansBtn.addEventListener('click', () => {
    //
})

clearEverythingBtn.addEventListener('click', () => {
    clearEverything();
})

clearBtn.addEventListener('click', () => {
    //
})

deleteBtn.addEventListener('click', () => {
    //
})
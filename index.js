// add Ans button
const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equals]');
const clearEverythingBtn = document.querySelector('[data-clear-everything]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
let previousOperand = document.querySelector('[data-previous-operand]');
let currentOperand = document.querySelector('[data-current-operand]');
// previousOperand.innerText = '324 * 201 - (41 + 24)'
// currentOperand.innerText = '1241';

function add() {

}

function minus() {

}

function divide() {

}

function multiply() {

}

function append(number) {
    if (number == '.' && currentOperand.innerHTML.includes(".")) {
        return;
    }
    else {
        currentOperand.innerText += number;
    }
}

function del() {
    let temp = currentOperand.innerHTML;
    clear();
    append(temp.slice(0, -1));
}

function clear() {
    currentOperand.innerText = '';
}

function clearEverything() {
    currentOperand.innerText = '';
    previousOperand.innerText = '';
}

// event listeners
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        append(button.innerText);
    })
})

deleteBtn.addEventListener('click', () => {
    del();
})

clearBtn.addEventListener('click', () => {
    clear();
})

clearEverythingBtn.addEventListener('click', () => {
    clearEverything();
})

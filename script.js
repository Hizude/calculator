class Calculator {
    constructor(operand, answer){
        this.operand = operand;
        this.answer = answer;
        // clearEverything();
    }
    
    clear() {
        
    }

    clearEverything() {

    }

    delete() {

    }

    updateDisplay() {

    }

    append() {

    }

    compute() {

    }

}

const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equals]');
const ansBtn = document.querySelector('[data-ans]');
const clearEverythingBtn = document.querySelector('[data-clear-everything]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
let operand = document.querySelector('[data-operand]');
let answer = document.querySelector('[data-answer]');
answer.innerText = '1241';
operand.innerText = '324 * 20 - (41 + 24)'

const calculator = new Calculator(operand, answer);

// event listeners
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        //
    })
})

operationBtns.forEach(button => {
    button.addEventListener('click', () => {
        //
    })
})

equalBtn.addEventListener('click', () => {
    //
})

ansBtn.addEventListener('click', () => {
    //
})

clearEverythingBtn.addEventListener('click', () => {
    //
})

clearBtn.addEventListener('click', () => {
    //
})

deleteBtn.addEventListener('click', () => {
    //
})
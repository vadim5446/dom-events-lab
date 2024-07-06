/*-------------------------------- Constants --------------------------------*/
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const display = document.getElementById("display");
/*-------------------------------- Variables --------------------------------*/
let result=document.getElementById("inputext");

let calculate=(number)=>{
    result.value+=number;

}

let currentInput = '';
let previousInput = '';
/*------------------------ Cached Element References ------------------------*/
const displayElement = document.querySelector('.calculator-display');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const decimalButton = document.querySelector('.decimal');
/*----------------------------- Event Listeners -----------------------------*/
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})
/*-------------------------------- Functions --------------------------------*/
function appendToDisplay(input){
    display.value += input;
}

chooseOperation(operation) {
    if (this.currentOperand === ' ') return
    if (this.previousOperand !== ' ') {
        this.getComputedStyle()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ' '
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval();
    }
    catch(error){
        display.value = "Error";
    }
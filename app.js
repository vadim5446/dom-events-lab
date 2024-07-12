/*-------------------------------- Constants --------------------------------*/
const numberButtons = document.querySelectorAll('.button number')
const operationButtons = document.querySelectorAll('.button operator')
const equalsButton = document.querySelector('.button equals')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const display = document.querySelector(".display");
const calculator = document.querySelector('#calculator');
/*-------------------------------- Variables --------------------------------*/
let result=document.getElementById("inputext");

let calculate=(number)=>{
    result.value+=number;

}

let currentInput = '';
let previousInput = '';
/*------------------------ Cached Element References ------------------------*/
const displayElement = document.querySelector('.calculator-display');

const clearButton = document.querySelector('.clear');

const decimalButton = document.querySelector('.decimal');
/*----------------------------- Event Listeners -----------------------------*/
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    // console.log(event.target.innerText);
  
    // Example
    if (event.target.classList.contains('number')) {
        display.innerText+=event.target.innerText // Do something with a number
    console.log(eval(display.innerText))
    }

    // Example
    if (event.target.innerText === '*') {
       display.innerText+=event.target.innerText// Do something with this operator
    }
    if (event.target.innerText === '/') {
        display.innerText+=event.target.innerText
    }
    if (event.target.innerText === '+') {
        display.innerText+=event.target.innerText
    }
    if (event.target.innerText === '-') {
        display.innerText+=event.target.innerText
    }
    if (event.target.innerText === '=') {
        console.log(eval(display.innerText))
        display.innerText=eval(display.innerText)
    }
  });
/*-------------------------------- Functions --------------------------------*/
function appendToDisplay(input){
    display.value += input;
}

function chooseOperation(operation) {
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


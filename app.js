//Creating a calculator class
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    };
//To clear variables from calculator
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
//To delete variables from calculator
    delete() {

    }
//Adds numbers a user clicks to the display screen of the calculator, which takes in the number selected
    appendNum(number) {
        this.currentOperand = number;
    }

//Selects the operation of choice made by the user, which takes in the operation selected
    chooseOp(operation) {

    }
//Takes the value and operation selected by the user and calculates them to the display
    calculation() {

    }
//This function updates the display output
    updateScreen() {
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

//Hook the calculator up and make everything work properly
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText)
        calculator.updateScreen()
    })
});


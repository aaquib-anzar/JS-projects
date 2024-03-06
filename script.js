let firstOperand = "";
let secondOperand = "";
let operator = null;
let resetScreen = false;
const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".numButton");
const oprButtons = document.querySelectorAll(".oprButton");
const clrButton = document.querySelector(".clrButton");
const equalButton = document.querySelector(".eqButton");

numButtons.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});

oprButtons.forEach((button) => {
  button.addEventListener("click", () => setOperation(button.textContent));
});
equalButton.addEventListener("click", () => compute());
clrButton.addEventListener("click", () => clear());

function appendNumber(num) {
  if (resetScreen) {
    display.textContent = "";
    resetScreen = false;
  }
  display.textContent += num;
}
function setOperation(op) {
  if (operator !== null) {
    compute();
  }
  firstOperand = display.textContent;
  operator = op;
  resetScreen = true;
}
function compute() {
  secondOperand = display.textContent;
  display.textContent = operate(operator, firstOperand, secondOperand);
  operator = null;
}
function clear() {
  display.textContent = "";
  firstOperand = "";
  secondOperand = "";
  operator = null;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "Error! division by 0 is undefined.";
  }
  return a / b;
}

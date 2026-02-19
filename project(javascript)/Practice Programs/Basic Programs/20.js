// JavaScript Program to Make a Simple Calculator

let num1 = parseInt(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = parseInt(prompt("Enter second number:"));

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
        break;
    default:
        result = "Invalid operator!";
}

alert("Result: " + result);

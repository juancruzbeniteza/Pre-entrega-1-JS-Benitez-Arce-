
function add(num1, num2) {
    return num1 + num2;
  }
  

  function subtract(num1, num2) {
    return num1 - num2;
  }
  

  function multiply(num1, num2) {
    return num1 * num2;
  }
  

  function divide(num1, num2) {
    if (num2 === 0) {
      return "Cannot divide by zero";
    }
    return num1 / num2;
  }
  

  let operation = prompt("Choose operation: add, subtract, multiply, divide");
  

  let number1 = parseFloat(prompt("Enter first number"));
  let number2 = parseFloat(prompt("Enter second number"));
  
  let result;
  
  if (operation === "add") {
    result = add(number1, number2);
  } else if (operation === "subtract") {
    result = subtract(number1, number2);
  } else if (operation === "multiply") {
    result = multiply(number1, number2);
  } else if (operation === "divide") {
    result = divide(number1, number2);
  } else {
    result = "Invalid operation";
  }
  
  alert(`Result: ${result}`);
  
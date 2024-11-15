//* Functions - JavaScript

/* In JavaScript, functions are reusable blocks of code that can be defined and called anywhere in the
code. Functions allow you to organize your code, facilitate reuse, and modularize the program. Here I
leave you a basic guide on functions in JavaScript: */

//? Declaration of Functions:

// Function declaration without parameters
function greet() {
  console.log("Hello!");
}

// Function declaration with parameters
function add(a, b) {
  return a + b;
}

//? Function Call:

greet(); // Displays "Hello!" on the console

let result = add(3, 5); // Assigns the result of the sum (8) to the variable 'result'
console.log(result); // Display 8 in the console

//? Function Expressions (Function Expressions):

//Unnamed function expression (anonymous)
let multiply = function(a, b) {
  return a * b;
};

let product = multiply(4, 6);
console.log(product); // Display 24 in the console

//? Arrow Functions:

// Arrow function syntax
let split = (a, b) => a/b;

let quotient = divide(8, 2);
console.log(quotient); // Display 4 in the console

//? Default Parameters:

function greet(name = "User") {
  console.log("Hello, " + name + "!");
}

greet(); // Displays "Hello, User!" on the console
greet("John"); // Displays "Hello, Juan!" on the console

//? Scope of Variables in Functions:

function example() {
  let variableLocal = "I am local";
  console.log(localvariable);
}

/* console.log(localvariable); // This will raise an error, since 'variableLocal' is defined only within
from the function 'example' */

//? Return of Multiple Values:

function getInformation() {
  return { name: "Juan", age: 30, city: "Exampleville" };
}

let information = getInformation();
console.log(information.name); // Display "John" in the console

//? Functions as Arguments:

function operate(a, b, operation) {
  return operation(a, b);
}

let sum = operate(4, 5, (x, y) => x + y);
console.log(sum); // Display 9 in the console

/* These are just some basic examples of how you can use functions in JavaScript. The functions are
fundamental to JavaScript programming and are used extensively in the development of Applications. */
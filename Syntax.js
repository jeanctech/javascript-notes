//* Syntax - JavaScript

/* Syntax in JavaScript refers to the rules and structures that must be followed when writing code
in this language. Below are some of the key features of the syntax of
JavaScript: */

//? 1. **Declaration of Variables:**

var x = 5; /* Variable declaration with var (let and const can also be used in older versions recent
JavaScript)*/
let y = 10; // Variable declaration with let (with block scope)
const z = 15; //Constant variable declaration (cannot be reassigned)

//? 2. **Types of Data:**

let name = "John"; // Text string
let age = 25; // Number
let isStudent = true; // Boolean
let listOfNumbers = [1, 2, 3]; // Array
let person = { name: "John", age: 25 }; // Object

//? 3. **Flow Control Structures:**

//* - **if-else:**

if (condition) {
// code if condition is true
} else {
// code if condition is false
}

//* - **switch:**

switch (value) {
case 1:
// code if value is 1
break;
case 2:
// code if value is 2
break;
default:
// code if the value does not match any of the above cases
}

//* - **loops (for, while, do-while):**

for (let i = 0; i < 5; i++) {
// code that is executed in each iteration
}

while (condition) {
// code that runs as long as the condition is true
}

do {
// code that executes at least once and then repeats as long as the condition is true
} while (condition);

//? 4. **Functions:**

function sum(a, b) {
return a + b;
}

// Arrow function (introduced in ECMAScript 6)
const subtraction = (a, b) => a - b;

//? 5. **Events:**

const button = document.getElementById("myButton");

button.addEventListener("click", function() {
// code that runs when the button is clicked
});

//? 6. **Error Handling:**

try {
// code that could generate an error
} catch (error) {
// code that is executed in case of error
} finally {
// code that runs whether there is an error or not
}

/* These are just some basic examples of JavaScript syntax. The syntax may vary depending on
the version of JavaScript you are using and the specifics of the environment (such as
browser or Node.js). Also, keep in mind that JavaScript is a constantly evolving language, with
New features introduced in later versions. */

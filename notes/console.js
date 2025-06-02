//* Console - JavaScript

/* In JavaScript, the console is a fundamental tool for displaying messages and debugging code. You can
use various methods provided by the `console` object to interact with the console of the browser or the
environment in which you are running your code. Here are some of the most popular methods common: */

// 1. `console.log()`:

// Print messages to the console.

let name = "John";
console.log("Hello, I am", name);
// Sample: Hello, I'm Juan

// 2. `console.error()`:

// Print error messages to the console.

console.error("This is an error message");
// Sample: This is an error message

// 3. `console.warn()`:

// Print warning messages to the console.

console.warn("This is a warning");
// Sample: This is a warning

// 4. `console.info()`:

// Print informational messages to the console.

console.info("This is an informational message");
// Sample: This is an informational message

// 5. `console.clear()`:

// Clear the console.

console.clear();
// Clear the console

// 6. `console.table()`:

//* Displays tabular data.

let data = [
   { name: "John", age: 30 },
   { name: "Maria", age: 25 },
   { name: "Carlos", age: 35 }
];

console.table(data);
// Display a table in the console with the data

// 7. `console.group()` and `console.groupEnd()`:

// Group messages into a block.

console.group("Group 1");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();

console.group("Group 2");
console.log("Message 3");
console.log("Message 4");
console.groupEnd();
// Display messages grouped into blocks in the console

// 8. `console.time()` and `console.timeEnd()`:

// Measures the time it takes to execute a block of code.

console.time("Execution time");

// Your code here

console.timeEnd("Execution time");
// Display the execution time in the console

/* These are just some of the methods available on the `console` object. You can use them according
to your needs to debug and display useful information while developing your applications in JavaScript.
Please note that some methods may not be supported in all runtime environments, especially if you are
working in an environment other than a web browser. */

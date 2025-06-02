//* Loops - JavaScript

/* Loops (or cycles) in JavaScript are structures that allow several blocks of code to be executed
times. There are several types of loops in JavaScript, and each has its own application. Here are the
most common loops: */

// 1. `for` loop:

// The `for` loop is used when you know the exact number of iterations.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// In this example, the loop will run five times, displaying the numbers 0 to 4.

// 2. `while` loop:

/* The `while` loop is used when you do not know how many times the loop will be executed, but the condition
must be true for it to continue executing. */

let counter = 0;

while (counter < 5) {
  console.log(counter);
  counter++;
}

// In this example, the `while` loop will also print the numbers 0 to 4.

// 3. `do...while` loop:

/* Similar to the `while` loop, but ensures that the code block is executed at least once, even
if the condition is false. */

let count = 0;

do {
  console.log(count);
  count++;
} while (count < 5);

// 4. `for...in` loop:

/* The `for...in` loop iterates over the enumerable properties of an object. It is especially useful for
iterate over the properties of an object. */

let person = { name: "John", age: 30, city: "Exampleville" };

for (let property in person) {
  console.log(property + ": " + person[property]);
}

// 5. `for...of` loop:

/* The `for...of` loop was introduced in EcmaScript 6 and is used to iterate over iterable elements
like arrays, strings, maps, sets, etc. */

let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

// Interrupt and Continue:

/* You can use the keywords `break` to exit a loop and `continue` to move to the next loop.
iteration. */

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Exit the loop when i is 3
  }
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip iteration when i is 2
  }
  console.log(i);
}

/* These are some examples of how you can use loops in JavaScript. Loops are essential for
repeat tasks and process data in programming. */

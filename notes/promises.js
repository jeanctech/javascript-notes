//* Promises - JavaScript

/* Promises in JavaScript are a mechanism to handle asynchronous operations in a more
elegant and structured. They allow you to work with asynchronous code in a more readable and maintainable way.
A promise represents a value that may be available now, in the future, or never. */

// Basic Syntax:

// Create a promise
let myPromise = new Promise(function(resolve, reject) {
  // Asynchronous code or task
  let success = true;

  if (success) {
    resolve("Operation successful!"); // Resolve the promise
  } else {
    reject("Error!"); // Reject the promise
  }
});

// Handle the result of the promise
mypromise
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error(error);
  });

/* In this example, the promise is resolved if the operation is successful and rejected if there is an error. Then,
The `.then()` and `.catch()` methods are used to handle the success case and the fail case respectively.
mistake. */

// Example with Timeout (setTimeout):

function wait(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

console.log("Home");

wait(2000) // Wait 2 seconds
  .then(function() {
    console.log("After 2 seconds");
    return wait(1000); // Wait 1 more second
  })
  .then(function() {
    console.log("After 3 seconds total");
  });

console.log("End");

/* In this example, `wait` returns a promise that resolves after a wait time.
Promises are chained using the `.then()` method, allowing a further execution flow to be specified.
clear. */

// Promises in Asynchronous Functions (async/await):

// Using `async` and `await` provides a more concise and readable way of working with promises.

function wait(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

async function run() {
  console.log("Home");

  await wait(2000); // Wait 2 seconds
  console.log("After 2 seconds");

  await wait(1000); // Wait 1 more second
  console.log("After 3 seconds total");

  console.log("End");
}

execute();

/* Using `async` declares an asynchronous function and the `await` operator is used inside the function
to wait for resolution of the promise before continuing with execution. */

/* Promises are an essential part of asynchronous programming in JavaScript and are used
extensively in modern web application development. Facilitates writing asynchronous code
more readable and maintainable way. */

//* Exceptions - JavaScript

/* In JavaScript, exceptions are unforeseen events or errors that occur during the execution of a program.
Handling exceptions is crucial to prevent errors from interrupting the normal flow of execution and to
provide useful information about what went wrong. Here's an introduction to how work with exceptions in
JavaScript: */

//? `try...catch` block:

/* You can use a `try...catch` block to handle exceptions. The code that can generate a
exception is placed inside the `try` block, and any exceptions that are thrown will be handled in the
`catch` block. */

try {
  // Code that can generate an exception
  throw new Error("This is a custom error.");
} catch (error) {
  //Exception handling
  console.error("An error occurred:", error.message);
} finally {
  // This block is always executed, whether there is an exception or not
  console.log("This block will always be executed.");
}

//? Throw Exceptions:

/* You can throw your own exceptions using the `throw` keyword. This is useful when you want
point out a specific error in your code. */

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a/b;
}

try {
  let result = divide(10, 0);
  console.log(result); // This line will never be executed if an exception is thrown
} catch (error) {
  console.error("An error occurred:", error.message);
}

//? Types of Integrated Exceptions:

/* JavaScript has several built-in exception types, such as `Error`, `SyntaxError`, `TypeError`,
among others. You can catch specific exceptions to handle them differently. */

try {
  // Code that can generate an exception
  let x = y; // This will raise a TypeError
} catch (error) {
  if (error instanceof TypeError) {
    console.error("A TypeError: occurred", error.message);
  } else {
    console.error("An error occurred:", error.message);
  }
}

//? Exception Chaining:

// You can chain `catch` blocks to handle different types of exceptions separately.

try {
    // Code that can generate an exception
    throw new TypeError("This is a TypeError.");
  } catch (errortype) {
    console.error("A TypeError occurred:", typeError.message);
  } try {
    // Code that can generate an exception
  } catch (error) {
    console.error("An error occurred:", error.message);
  }

//? `finally`:

/* The `finally` block is always executed, whether there is an exception or not. It is useful
for performing tasks cleanup, such as closing connections or freeing resources. */

try {
  // Code that can generate an exception
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("This block will always be executed.");
}

/* Handling exceptions is an essential part of robust programming. Allow your code to recover
of errors and provide a friendlier user experience instead of simply crashing in case from problems. */

//* Brackticks - JavaScript

/* In JavaScript, "backticks" or backticks (\``) are used to define templates.
string, also known as "template strings". Chain insoles offer a more comfortable fit
and readable way of concatenating strings and allowing interpolation of variables directly within the
chain. */

//? Example of using string templates:

let name = "John";
let age = 25;

//String template using backticks
let message = `Hello, ${name}. You are ${age} years old.`;

console.log(message);
// Result: "Hello, Juan. You are 25 years old."

/* In this example, `${name}` and `${age}` are placeholders within the string, and the
variables `name` and `age` are interpolated directly into those places. */

/* In addition to variable interpolation, string templates also support expressions and can
span multiple lines without needing additional escape characters: */

let a = 5;
let b = 10;

let result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result);
// Result: "The sum of 5 and 10 is 15."

/* String templates are particularly useful when working with multiline text or when
you need to build complex strings in a more readable way. */

/* It is important to mention that string templates are only compatible with newer versions
JavaScript (EcmaScript 6 and higher). Therefore, if you are writing code for an environment that
does not support EcmaScript 6, you may need to use more traditional concatenation methods or
transpile your code to an older version of JavaScript. */

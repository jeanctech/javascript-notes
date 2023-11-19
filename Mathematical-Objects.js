//* Mathematical Objects - JavaScript

/* In JavaScript, the `Math` object provides functions and constants to perform operations
math. Here are some of the most common functions you can use with the `Math` object: */

//? Constants:

console.log(Math.PI); //Pi value (approximately 3.14159)
console.log(Math.E); // Base value of the natural logarithm (approximately 2.71828)

//? Trigonometric functions:

let angleInRadianes = Math.PI / 4;

console.log(Math.sin(angleInRadians)); // Sine
console.log(Math.cos(angleInRadians)); // Cosine
console.log(Math.tan(angleInRadians)); // Tangent

console.log(Math.asin(0.7071)); // Arcsine (in radians)
console.log(Math.acos(0.7071)); // Arccosine (in radians)

//? Exponential and Logarithmic Functions:

console.log(Math.exp(1)); // Exponential of 1 (e raised to the power 1)
console.log(Math.log(Math.E)); // Natural logarithm of e

console.log(Math.pow(2, 3)); // Power (2 raised to the power 3)
console.log(Math.sqrt(25)); // Square root

//? Rounding and Truncation:

console.log(Math.round(4.6)); // Rounding to the nearest whole number
console.log(Math.ceil(4.1)); // Round up
console.log(Math.floor(4.9)); // Round down

console.log(Math.trunc(4.7)); // Truncation (removes the decimal part)

//? Random Numbers:

console.log(Math.random()); // Random number between 0 (inclusive) and 1 (exclusive)

// Generate random number in a specific range
function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100)); // Random number between 1 and 100 (inclusive)

/* These are just some of the functions and constants provided by the `Math` object in JavaScript.
You can consult the [official Math documentation](https://developer.mozilla.org/es/docs/Web/JavaScript/
Reference/Global_Objects/Math) for more detailed information on available functions. */

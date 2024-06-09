//* Typeof - JavaScript

/* The `typeof` operator in JavaScript is used to get the data type of a variable or
expression. You can use it as follows: */

let x = 5;
console.log(typeof x); // "number"

let y = "Hello";
console.log(typeof y); // "string"

let z = true;
console.log(typeof z); // "boolean"

let a = {};
console.log(typeof a); // "object"

let b = [];
console.log(typeof b); // "object" (careful! Array is a type of object)

let c = null;
console.log(typeof c); // "object" (this is a known bug in JavaScript!)

let d;
console.log(typeof d); // "undefined"

//? It is important to highlight some points:

//* 1. **`typeof null`:**
/* Although `null` is technically of type "object", this is considered a known bug in JavaScript.
This is historical behavior and should not be interpreted as an accurate description of `null`. HE
expect this behavior to be maintained so as not to break backwards compatibility. */

//* 2. **`typeof undefined`:**
// Returns "undefined" when the variable or property is undefined.

//* 3. **`typeof` with Arrays:**
/* Although Arrays are a special type of object in JavaScript, `typeof` will return "object" when
is applied to an Array. To check if a variable is an Array, you can use `Array.isArray()`. */

let arr = [1, 2, 3];
console.log(typeof arr); // "object"
console.log(Array.isArray(arr)); // true

/* In general, `typeof` is useful for checking the data type before performing certain operations or
to do dynamic data handling in your code. However, it is essential to take into account your
particular limitations and behaviors, especially in the case of `null` and Arrays. */

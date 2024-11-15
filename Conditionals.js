//* Conditionals - JavaScript

/* Conditional structures in JavaScript allow blocks of code to be executed depending on whether
meets or does not meet a condition. Here are the main ways to use conditionals in JavaScript: */

//? 1. **if...else:**

let age = 18;

if (age >= 18) {
   console.log("You are of legal age.");
} else {
   console.log("You are a minor.");
}

//? 2. **if...else if...else:**

let time = 14;

if (time < 12) {
   console.log("Good morning.");
} else if (time < 18) {
   console.log("Good afternoon.");
} else {
   console.log("Good evening.");
}

//? 3. **switch:**

letWeekDay = "Monday";

switch (weekday) {
   case "Monday":
     console.log("Start of week");
     break;
   case "Wednesday":
     console.log("Middle of the week");
     break;
   case "Friday":
     console.log("End of the week");
     break;
   default:
     console.log("Another day");
}

//? 4. **Ternary Operator (? :):**

//The ternary operator is a shorthand way to write an `if...else` statement.

let ages = 20;
let message = (age >= 18) ? "You are of age": "You are a minor";
console.log(message);

//? 5. **Truthy and Falsy:**

/* In JavaScript, values that are considered `falsy` are `false`, `0`, `""` (empty string), `null`,
`undefined`, and `Nan`. All other values are considered 'truthy'. You can use this in contexts
conditionals in a concise manner. */

let variable = "Hello";

if (variable) {
   console.log("The variable has a truthy value");
} else {
   console.log("The variable has a false value");
}

//? 6. **Nested Conditions:**

// Conditional structures can also be nested, allowing multiple conditions to be evaluated.

let a = 5;
let b = 10;

if (a > 0) {
   if (b > 0) {
     console.log("Both variables are greater than zero.");
   } else {
     console.log("Only 'a' is greater than zero.");
   }
} else {
   console.log("None of the variables is greater than zero.");
}

/* These are some of the most common ways to use conditionals in JavaScript. The choice of Which
one to use will depend on the specific context and the logic you need to implement in your program. */
//* Concatenation - JavaScript

/* Concatenation in JavaScript refers to the operation of joining text strings. You can concatenate
strings using the addition operator (`+`) or the `concat()` method. */

//? Using the Addition Operator (`+`):

let u_string = "Hello";
let dstring = "World";
let result_o = string_u + ", " + string_d + "!";
console.log(result_o); // "Hello World!"

/* In this example, the variables `string1` and `string2` are concatenated using the addition operator, and
the result is stored in the variable `result`. */

//? Using the `concat()` Method:

let un_string = "Hello";
let string_do = "World";
let result_os = string_a.concat(", ", string_do, "!");
console.log(results); // "Hello World!"

/* The `concat()` method can also be used to concatenate strings. You can pass multiple arguments,
and they will all be concatenated in order. */

//? String Templates (Template Strings):

/* Starting with EcmaScript 6 (ES6), you can use template strings to concatenate
strings in a more readable and convenient way. They are defined with inverted commas (`) and allow the
variable interpolation using `${}`: */

let string_one = "Hello";
let string_two = "World";
let result_two = `${string_one}, ${string_two}!`;
console.log(result_two); // "Hello World!"

/* String templates provide clearer syntax and allow easy incorporation of
variables in a string. */

//? Concatenation with Numbers or Other Variables:

/* When you concatenate a string with a number or another variable that is not a string, JavaScript
automatically converts the non-string variable to a string before performing concatenation: */

let number = 42;
let text = "The number is: " + number;
console.log(text); // "The number is: 42"

/* It is important to note that string concatenation can become less efficient in
compared to other string manipulation methods, especially when working with large
amounts of data. In such cases, consider using more specialized methods, such as `join()` or
construction of strings using arrays. */
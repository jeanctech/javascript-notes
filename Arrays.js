//* Arrays - JavaScript

/* In JavaScript, arrays are data structures that allow you to store and access multiple
elements. They can contain elements of different data types and are defined using `[]` brackets.
Here are some common operations you can perform on arrays: */

//? Declaring an Array:

let numbers = [1, 2, 3, 4, 5];
let colors = ["red", "green", "blue"];
let mixed = [1, "two", true, { name: "John" }];

//? Accessing Array Elements:

let firstNumber = numbers[0]; // Access the first element (index 0)
let secondColor = colors[1]; // Access the second element (index 1)

//? Modifying Array Elements:

numbers[0] = 10; // Modify the first element
colors[1] = "yellow"; // Modify the second element

//? Array Length:

let length = numbers.length; // Returns the length of the array (in this case, 5)

//? Add and Remove Elements:

// Add to the end
numbers.push(6);

// Remove the last element
numbers.pop();

// Add to the beginning
numbers.unshift(0);

// Remove the first element
numbers.shift();

//? Search and Find Elements:

let index = colors.indexOf("green"); // Returns the index of the "green" element or -1 if not found
let existsRed = colors.includes("red"); // Returns true if the array contains "red", otherwise false

//? Iterate over an Array:

// For loop
for (let i = 0; i < numeros.length; i++) {
console.log(numeros[i]);
}

// forEach
numeros.forEach(function(numero) {
console.log(numero);
});

// Map (creates a new array based on the result of the function)
let squares = numeros.map(function(numero) {
return numero * numero;
});

//? Multidimensional Arrays:

// Arrays in JavaScript can also contain other arrays, thus forming multidimensional arrays.

let matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

console.log(matrix[1][2]); // Access the element in the second row and third column (6)

/* These are just a few of the operations you can perform with arrays in JavaScript. Arrays are
a fundamental part of programming and are widely used to store and manipulate data. */
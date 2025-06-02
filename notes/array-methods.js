//* Array Methods - JavaScript

/* In JavaScript, arrays (or matrices) are objects that can contain multiple elements. Also
They have built-in methods that make it easy to manipulate and manipulate data in arrays. Here
you have some of the most common array methods in JavaScript: */

// 1. **length:**
// Returns the length (number of elements) of the array.

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // Display 5 in the console

// 2. **push(element1, element2, ...):**
// Add one or more elements to the end of the array and return the new length of the array.

let fruits = ["apple", "pear"];
fruits.push("orange", "banana");
console.log(fruits); // Display ["apple", "pear", "orange", "banana"] in the console

// 3. **pop():**
// Removes the last element from the array and returns that element.

let fruts = ["apple", "pear", "orange"];
let lastFruit = fruits.pop();
console.log(lastFruit); // Display "orange" in the console
console.log(fruits); // Display ["apple", "pear"] in the console

// 4. **unshift(element1, element2, ...):**
// Adds one or more elements to the beginning of the array and returns the new length of the array.

let colors = ["green", "blue"];
colors.unshift("red", "yellow");
console.log(colors); // Display ["red", "yellow", "green", "blue"] in the console

// 5. **shift():**
// Removes the first element from the array and returns that element.

let colr = ["red", "yellow", "green", "blue"];
let firstColor = colr.shift();
console.log(firstColor); // Display "red" in the console
console.log(colr); // Display ["yellow", "green", "blue"] in the console

// 6. **indexOf(element, start):**
// Returns the index of the first occurrence of an element in the array or -1 if not found.

let fruit = ["apple", "pear", "orange"];
let index = fruits.indexOf("pear");
console.log(index); // Display 1 in the console

// 7. **join(separator):**
// Join all elements of the array into a string. You can specify an optional separator.

let number = [1, 2, 3, 4, 5];
let string = number.join("-");
console.log(string); // Display "1-2-3-4-5" in the console

// 8. **slice(start, end):**
// Returns a part of the array from `start` to `end` (not including `end`).

let numbr = [1, 2, 3, 4, 5];
let slice = numbr.slice(1, 4);
console.log(fragment); // Display [2, 3, 4] in the console

// 9. **splice(start, deleteCount, item1, item2, ...):**
// Change the content of the array by removing existing elements and/or adding new elements.

let color = ["red", "green", "blue"];
color.splice(1, 1, "yellow", "orange");
console.log(color); // Display ["red", "yellow", "orange", "blue"] in the console

// 10. **forEach(callback(element, index, array)):**
// Executes a provided function once for each element in the array, in order.

let fru = ["apple", "pear", "orange"];
fru.forEach(function(fru) {
   console.log(fru);
});
// Display "apple", "pear", "orange" in the console

/* These are just some of the methods available for manipulating arrays in JavaScript. Methods
Array arrays are very useful for performing various operations on data stored in arrays. Can
See the official JavaScript documentation for more information on methods. arrays:
[MDN Web Docs - Array Methods](https://developer.mozilla.org/es/docs/Web/JavaScript/
Reference/Global_Objects/Array) */

//* String Methods - JavaScript

/* In JavaScript, strings are primitives and also objects. This means that the
Strings have methods that you can use to perform various operations. Here are some methods
common strings in JavaScript: */

//? 1. **length:**
// Returns the length of the string (number of characters).

let text = "Hello, World!";
console.log(text.length); // Display 12 in the console

//? 2. **charAt(index):**
// Returns the character at the specified position.

let txte = "Hello, World!";
console.log(txte.charAt(0)); // Display "H" in the console

//? 3. **charCodeAt(index):**
// Returns the Unicode value of the character at the specified position.

let tex = "Hello, World!";
console.log(tex.charCodeAt(0)); // Display 72 in the console (Unicode of "H")

//? 4. **toUpperCase() / toLowerCase():**
// Convert the string to upper or lower case.

let txto = "Hello, World!";
console.log(txto.toUpperCase()); // Displays "HELLO, WORLD!" on the console
console.log(txto.toLowerCase()); // Displays "hello, world!" on the console

//? 5. **concat(str1, str2, ...):**
// Combine two or more strings.

let greeting = "Hello";
let name = "John";
let message = greeting.concat(", ", name, "!");
console.log(message); // Displays "Hello, Juan!" on the console

//? 6. **indexOf(substring, start):**
// Returns the position of the first occurrence of a substring, or -1 if not found.

let txo = "Hello, World!";
console.log(txo.indexOf("World")); // Display 7 in the console

//? 7. **slice(start, end):**
// Extracts a part of the string from `start` to `end` (not including `end`).

let txt = "Hello, World!";
let fragment = txt.slice(0, 5);
console.log(fragment); // Display "Hello" in the console

//? 8. **substring(start, end):**
// Similar to `slice`, but does not support negative indexes.

let xto = "Hello, World!";
let fragmen = xto.substring(0, 5);
console.log(fragment); // Display "Hello" in the console

//? 9. **replace(oldStr, newStr):**
// Replaces one substring with another.

let tto = "Hello, World!";
let newText = tto.replace("World", "Friend");
console.log(newText); // Displays "Hello, Friend!" on the console

//? 10. **split(separator):**
// Splits the string into an array of substrings using the specified separator.

let xo = "Hello, World!";
let words = xo.split(", ");
console.log(words); // Display ["Hello", "World!"] in the console

/* These are just some of the methods available for manipulating strings in JavaScript. Can
Please refer to the official JavaScript documentation for more detailed information on the
string methods: [Mdn Web Docs - String Methods] (https://developer.mozilla.org/es/docs/Web/
JavaScript/Reference/Global_Objects/String) */

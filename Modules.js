//* Modules - JavaScript

/* Modules in JavaScript are a way to organize and reuse code by dividing it into files separated. The
introduction of modules allows the code to be modularized, which facilitates  maintainability and
collaboration on larger projects. The module system was introduced in EcmaScript 6 (also known as Es6)
and is implemented using the `import` and `export` keywords. */

//? Export from a Module:

/* To export functions, variables or objects from a module, the `export` keyword is used.
You can export elements as follows: */

//* Module.js

export const sum = (a, b) => a + b;

export const subtraction = (a, b) => a - b;

export const name = "John";

//* Import into Another Module:

/* To import elements from a module, the `import` keyword is used. You can import
specific elements or import everything using `*`: */

// Main.js
import { addition, subtraction, name } from "./Modulo.js";

console.log(sum(5, 3)); // 8
console.log(subtraction(5, 3)); // 2
console.log(name); // Juan

//? Export and Import by Default:

/* You can also export and import a single element from a module by default. There can only be
a default exported element in each module. */

//* Module.js
const multiply = (a, b) => a * b;

export default multiply;

//* Main.js
import multiply from "./modulo";

console.log(multiply(4, 3)); // 12

//? Modules in the Navigator:

/* In the browser environment, you can use the `type="module"` attribute in the `<script>` tag to
indicate that a file is a module: */

//* Html - Index
/*
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Modules in JavaScript</title>
</head>
<body>
   <script type="module" src="main.js"></script>
</body>
</html>
*/

//* Main.js
import { addition, subtraction } from "./modulo.js";

console.log(sum(5, 3)); // 8
console.log(subtraction(5, 3)); // 2

/* It is important to note that when working with modules in the browser, the file paths must
be relative and must include the file extension, such as `.js`. Additionally, there are rules about how they are loaded
and execute the modules, including the same origin policy. */

/* Using modules in JavaScript is a common practice in modern development, especially in
larger and more complex applications. They make code organization easier, improve readability, and
They encourage code reuse. */

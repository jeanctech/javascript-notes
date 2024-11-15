//* Variables - JavaScript

/* In JavaScript, variables are used to store and represent data. Here you have information
  on how to declare, assign and use variables in JavaScript: */

//? 1. **Declaration of Variables:**

    /*
    - In JavaScript, you can declare variables using the `var`, `let` and `const` keywords.
    - `var` is the old way of declaring variables. `let` and `const` are introduced in EcmaScript 6
    and they have a more precise block scope than `var`.
    */

    var var_variable;
    let let_variable;
    const constant_variable = 10;

//? 2. **Assignment of Values:**

    // - You can assign values to variables when declaring them or at a later time.

    let name = "John";
    let age;
    age = 25;

//? 3. **Dynamic Data Types:**

    /*
    - JavaScript is a dynamically typed language, which means you do not need to specify
    the data type when declaring a variable. The data type may change during the execution of the
    program.
    */

    let x = 5; // x is of type number
    x = "Hello"; // x is now of type string

//? 4. **Scope of the Variables:**

    /*
    - The scope of a variable refers to the part of the code in which the variable is accessible.
    - Variables declared with `var` have function scope, while those declared with
    `let` and `const` are block scoped.
    */

    if (true) {
      var variableGlobal = "Accessible anywhere in the code";
      let variableLocal = "Only accessible within this block";
    }

//? 5. **Constants:**

     // - Variables declared with `const` cannot be reassigned after their declaration.

    const PI = 3.1416;

//? 6. **Name Conventions:**

    /*
    - It is a good practice to follow meaningful naming conventions to make your code more
    readable.
    */

    let FullName = "John Doe";
    let userAge = 25;

//? 7. **Operations with Variables:**

    /*
    - You can perform math operations, string concatenation, and other operations with
    variables.
    */

    let a = 5;
    let b = 3;
    let sum = a + b;
    let concatenation = "Hello, " + "World!";

//? 8. **Objects and Object Variables:**

     // - You can use variables to store objects and access their properties.

     let person = {
      name: "John",
      age: 25,
      city: "Exampleville"
     };

    console.log(person.name); // Display "John" in the console

/* These are basic concepts related to variables in JavaScript. It is important to understand these
concepts to be able to write effective code and understand how data is stored and manipulated in your
programs. */
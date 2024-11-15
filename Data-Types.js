//* Data Types - JavaScript

/* JavaScript is a dynamically typed programming language, which means that variables are not
They are bound to a specific data type and can change type during program execution.
Here are some of the fundamental data types in JavaScript: */

//? 1. **Number:**
    // - Represents numeric values, either integer or floating point.

    let integer = 5;
    let decimal = 3.14;

//? 2. **String (Text String):**
    // - Represents text and is defined between single or double quotes.

    let name = "John";
    let greeting = 'Hello, World!';

//? 3. **Boolean:**
    // - Represents a logical value: `true` or `false`.

    let isMajor = true;
    let isMinor = false;

//? 4. **Undefined:**
    // - Represents a variable that has been declared but has not been assigned a value.

    let variableNotDefined;

//? 5. **Null:**
    // - Represents the absence of a value or a null value.

    let nullValue = null;

//? 6. **Object:**
    /* - Represents a collection of properties. It can be created with curly braces `{}` or by the operator
    `newObject()`.
    */

    let person = {
      name: "Anna",
      age: 30,
      single: true
    };

//? 7. **Array:**
    // - Represents an ordered collection of values, which can be of any type.

    let numbers = [1, 2, 3, 4, 5];
    let colors = ["red", "green", "blue"];

//? 8. **Function:**
    // - Represents a function.

    function add(a, b) {
      return a + b;
    }

//? 9. **Symbol:**
    /*
    - Represents a unique and immutable identifier, used to create object properties that are not
    conventionally accessible.
    */

    let symbol = Symbol("description");

/* These are the main data types in JavaScript. In addition, JavaScript has other types and
more specialized objects, and its flexibility in terms of dynamic typing allows it to adapt to a
variety of situations. */
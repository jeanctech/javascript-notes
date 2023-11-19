//* Input Attributes - JavaScript

/* I assume you mean working with the attributes of input elements in Html using JavaScript. Input
elements in Html, such as `<input>`, can have attributes that contain important information about them.
You can access and manipulate these attributes using JavaScript. Here are some examples: */

//? 1. Access Attributes:

/* You can access the attributes of an element using the `attributes` property and then use the method
`getNamedItem` to get a specific attribute. */

//* Html
/*
<input type="text" id="myInput" value="Hello, world!">
*/

   // Access the element's attributes
   let input = document.getElementById("myInput");
   let attributes = input.attributes;

   // Get the value of the "value" attribute
   let value = attributes.getNamedItem("value").value;

   console.log(value); // Displays "Hello, world!" on the console

//? 2. Change Attributes:

// You can change the value of an attribute directly through the element's property.

//* Html
/*
<input type="text" id="myInput" value="Hello, world!">
*/

   // Change the value of the "value" attribute
   let inpt = document.getElementById("myInput");
   inpt.value = "New value";

//? 3. Get and Set Custom Attributes:

/* In addition to built-in attributes like `value` or `type`, you can work with custom attributes
that you have defined. */

//* Html
/*
<input type="text" id="myInput" data-custom="myCustomAttribute">
*/

   // Get the value of a custom attribute
   let int = document.getElementById("myInput");
   let customValue = int.getAttribute("data-custom");

   console.log(customValue); // Display "myCustomAttribute" in the console

   // Set the value of a custom attribute
   int.setAttribute("data-custom", "NewValue");

/* These are basic examples of how you can work with input element attributes in
Html using JavaScript. Note that some attributes, such as `value`, also have properties
directly into the element object and can be manipulated that way. */

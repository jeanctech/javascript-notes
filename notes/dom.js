//* Dom - JavaScript

/* The Dom - Document Object Model is a programming interface for Html and Xml documents. Provides a
structured representation of the document and defines how programs can access and Manipulate document
elements. In JavaScript, you can use the Dom to interact with Html elements and dynamically make changes
to the page. Here are some concepts and examples basics related to the Dom in JavaScript: */

// 1. Access to Elements:

/* You can access DOM elements using various methods, such as `getElementById`,
`getElementsByClassName`, `getElementsByTagName`, and `querySelector`. */

// Html
/*
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>DOM Example</title>
</head>
<body>
   <div id="myDiv">
     <p class="paragraph">This is a paragraph.</p>
     <p class="paragraph">This is another paragraph.</p>
   </div>
</body>
</html>
*/

//Script

     // Access elements by Id
     let divElement = document.getElementById("myDiv");

     // Access elements by Class
     let paragraphs = document.getElementsByClassName("paragraph");

     // Access elements by Tag
     let firstParagraph = document.querySelector("p");

     console.log(divElement);
     console.log(paragraphs);
     console.log(firstParagraph);

// 2. Content Manipulation:

// You can change the content of an element, either the text or the Html.

let myParagraph = document.getElementById("myParagraph");

// Change the text
myParrafo.textContent = "New paragraph text";

// Change the Html
myParrafo.innerHTML = "<strong>New</strong> paragraph text with HTML format";

//? 3. Change of Styles:

// You can change styles using the `style` property.

let myElement = document.getElementById("myElement");

// Change background color
myItem.style.backgroundColor = "blue";

// Change font size
myItem.style.fontSize = "20px";

//? 4. Events:

// You can assign events to elements to respond to user actions.

// Html
/*
<button id="myButton">Click</button>
*/

let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
     alert("You clicked the button!");
});

//? 5. Creation of Elements:

// You can create new elements and add them to the Dom.

let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

document.body.appendChild(newParagraph);

/* These are just basic examples of using the Dom in JavaScript. You can explore more features and Dom
methods to adapt to your specific needs. Manipulation of the Dom is essential in the web development to
create dynamic and interactive pages. */

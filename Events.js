//* Events - JavaScript

/* In JavaScript, events are actions or events that occur in the user interface, such as clicks.
mouse, keystrokes, window size changes, etc. You can handle these events using functions called
"event handlers" or "event handlers". Here is an introduction basic how to work with events in
JavaScript: */

//? Html events in JavaScript:

/* You can use Html attributes to assign events directly to Html elements. For example, the event
`onclick` is triggered when an element is clicked: */

//* Html
/*
<button onclick="myFunction()">Click</button>
*/

function myFunction() {
  alert("The button was clicked.");
}

//? Events in JavaScript:

/* It is more common to assign events using JavaScript to separate the event handling logic from the
Html markup. */

//* Html
/*
<button id="myButton">Click</button>
*/

// Get the element by its ID
let button = document.getElementById("myButton");

// Assign an event to the element
button.addEventListener("click", function() {
  alert("The button was clicked.");
});

//? Common Types of Events:

//* - **Click:**
  element.addEventListener("click", function() {
    //Handle the click event
  });

//* - **Change:**
  element.addEventListener("change", function() {
    // Handle the change event
  });

//* - **Keydown, Keypress, Keyup:**
  element.addEventListener("keydown", function(event) {
    //Handle key pressed event
  });

//* - **Mouseover, Mouseout:**
  element.addEventListener("mouseover", function() {
    //Handle the mouseover event
  });

//* - **Submit:**
  form.addEventListener("submit", function(event) {
    //Handle the form submit event
    event.preventDefault(); // Prevent form submission by default
  });

//* Event Object:

/* Most event handlers take a parameter, often called `event`, which is an object
`Event`. This object contains information about the event, such as the type of event, the target (item
that triggered the event), etc. */

element.addEventListener("click", function(event) {
  console.log("Event type:", event.type);
  console.log("Target:", event.target);
});

//* Events Delegation:

/* You can use event delegation to manage events on multiple elements with a single
event handler. This is useful when you have dynamically created items or a list of items
Similar. */

//* html
/*
<ul id="myList">
  <li>Element 1</li>
  <li>Element 2</li>
  <li>Element 3</li>
</ul>
*/

let list = document.getElementById("myList");

list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    alert("Element was clicked: " + event.target.textContent);
  }
});

/* This is a basic introduction to events in JavaScript. As you go deeper into development
web, you will find more complex situations and more advanced events that you can handle. */
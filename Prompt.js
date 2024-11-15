//* Prompt - JavaScript

/* `prompt` is a function in JavaScript that is used to obtain user input data through
of a dialog box in the browser. This dialog usually contains an input field
text where the user can write their response. The `prompt` function returns the text string
entered by the user or `null` if the user clicks the "Cancel" button or closes the
dialogue. */

//? Here is a simple example of how `prompt` can be used:

let name = prompt("Please enter your name:");
if (name !== null) {
   alert("Hello, " + name + "! Welcome.");
} else {
   alert("You have canceled or closed the dialog.");
}

//? In this example:

/*
     1. The `prompt` function displays a dialog box with the message "Please enter your name:" and
     a text entry field.
     2. The value entered by the user is stored in the variable `name`.
     3. It is checked if the user clicked "Cancel" or closed the dialog (`name !== null`).
     If so, a message is displayed indicating that the user canceled or closed the dialog box.
     4. If the user entered a name, a custom greeting is displayed using `alert`.
*/

/* It is important to mention that the use of `prompt` can be limited and sometimes it is not the best
option for obtain user input, especially in more modern web applications. In many cases, it is preferred
the use of Html forms or more interactive user interfaces to collect information from the
user in a more structured and friendly way. */
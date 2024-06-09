//* Global Attributes - JavaScript

/* In Html, there are global attributes that can be used on almost all elements. These attributes They
are part of the common set of attributes that can be applied to most Html elements. Some of the most
common global attributes are: */

//? 1. `id`:

// The `id` attribute provides a unique identifier for an element.

//* Html
/*
<div id="myDiv">Content</div>
*/

let myDiv = document.getElementById("myDiv");

//? 2. `class`:

// The `class` attribute is used to apply one or more classes to an element.

//* Html
/*
<p class="featuredparagraph">This is a featured paragraph.</p>
*/

//? 3. `style`:

// The `style` attribute is used to apply styles directly to the element.

//* Html
/*
<div style="color: red; font-size: 16px;">Text in red and font size of 16px.</div>
*/

//? 4. `title`:

/* The `title` attribute is used to provide additional information about an element when the
mouse is placed over it. */

//* Html
/*
<a href="#" title="Example link">Link</a>
*/

//* 5. `lang`:

// The `lang` attribute is used to specify the primary language of the element's content.

//* Html
/*
<html lang="en">
   <!-- Page content -->
</html>
*/

//* 6. `data-*`:

/* The `data-*` attributes are used to store private custom information for use by
scripts. */

//* Html
/*
<div data-info="personalizedinformation">Content</div>
*/

let custominfo = document.querySelector("[data-info]").dataset.info;

/* These are just some examples of global attributes. You can use these attributes in various
Html elements to add functionality and style to your web pages. When you work with JavaScript,
You can access and manipulate these attributes using the Dom to create dynamic interactivity
in your Web page. */

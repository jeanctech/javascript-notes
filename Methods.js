//* Methods - JavaScript

/* Methods in JavaScript are functions that are associated with objects. They can be defined
within objects or added to objects after their creation. Here are some examples of how to work
with methods in JavaScript: */

//? Definition of Methods on Objects:

let pers = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, I am " + this.name);
  }
};

// Call the method
pers.greet(); // Display "Hello, I'm Juan" in the console

//* In this example, `greet` is a method of the `person` object.

//? Definition of Methods with Simplified Syntax (ES6+):

let persn = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

// Call the method
persn.greet(); // Display "Hello, I'm Juan" in the console

//* The syntax is simplified in ECMAScript 6 and later.

//? Add Methods After Object Creation:

let person = {
  name: "John",
  age: 30
};

// Add a method to the object
person.greet = function() {
  console.log("Hello, I am " + this.name);
};

// Call the method
person.greet(); // Display "Hello, I'm Juan" in the console

// You can add methods to an object even after its creation.

//? `this` in Methods:

// Using `this` inside a method refers to the object the method belongs to.

let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, I am " + this.name);
  }
};

let otherPerson = {
  name: "Mary",
  age: 25,
  greet: person.greet // Assign the person method to anotherPerson
};

otherPerson.greet(); // Display "Hello, I'm Maria" in the console

//? Methods in Constructor Functions:

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function() {
    console.log("Hello, I am " + this.name);
  };
}

let john = new Person("John", 30);
john.greet(); // Display "Hello, I'm Juan" in the console

// In this example, `greet` is a method associated with the `Person` constructor function.

//? Methods in Classes (ES6+):

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

let jon = new Person("John", 30);
jon.greet(); // Display "Hello, I'm Juan" in the console

// In classes, methods are defined more declaratively.

/* These are some examples of how to work with methods in JavaScript. The methods are essential
in the object-oriented programming to encapsulate logic related to a specific object. */
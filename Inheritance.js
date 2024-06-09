//* Inheritance - JavaScript

/* In JavaScript, inheritance is achieved through prototypes. Each object has an internal prototype that
It could be another object. When you try to access a property of an object that is not present on it,
JavaScript will look for that property in the object's prototype. This forms the basis of the inheritance
system in JavaScript. Here is a basic example: */

//? Prototypes and Inheritance:

// Define an object constructor
function Animal(name) {
  this.name = name;
}

// Add a method to the prototype
Animal.prototype.greet = function() {
  console.log("Hello, I am " + this.name);
};

// Create an object that inherits from Animal
function Cat(name, color) {
  Animal.call(this, name);
  this.color = color;
}

// Establish the prototype chain
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat; // Restore the constructor

// Add an additional method to the Cat prototype
Cat.prototype.meow = function() {
  console.log("Meow");
};

// Create object instances
let myAnimal = new Animal("Fluff");
let myCat = new Cat("Mittens", "gray");

myAnimal.greet(); // Displays "Hello, I'm Pelusa"
myCat.greet(); // Displays "Hello, I'm Mittens"
myCat.meow(); // Displays "Meow"

//? In this example:

//* - `Animal`
// It is an object constructor that has a property `name` and a method `greet`.
//* - `Cat`
/* is another constructor that inherits from `Animal`. `Object.create` is used to set the prototype
`Cat` as a new instance of `Animal`. */
// - Restore the constructor of `Cat` to make sure it is `Cat` and not `Animal`.
//* - `myCat`
// inherits the properties and methods of `Animal` and has its own `meow` method.

//? Classes in EcmaScript 6:

/* EcmaScript 6 introduced class syntax, which provides a simpler way to achieve inheritance
in JavaScript. */

class Animal {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello, I am " + this.name);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  meow() {
    console.log("Meow");
  }
}

let Animal = new Animal("Fluff");
let Cat = new Cat("Mittens", "gray");

animal.greet(); // Displays "Hello, I'm Pelusa"
Cat.greet(); // Displays "Hello, I'm Mittens"
Cat.meow(); // Displays "Meow"

/*In this example, `class` and `extends` are used to define classes and inheritance more
declarative. */

/* Both forms, prototype-based inheritance and EcmaScript 6 classes, are common in JavaScript.
Choosing between them often depends on the developer's preferences and requirements.
project specific. */

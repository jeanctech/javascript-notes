//* Poo - JavaScript

/* Object-oriented programming - Poo It is a programming paradigm that uses objects and classes
to organize the code. In JavaScript, although it is a multi-paradigm language, you can use
the Poo to organize and structure the code more efficiently. Here is an introduction
basic Poo in JavaScript: */

//? Objects and Properties:

/* In JavaScript, an object is a collection of properties, where each property is an association of
key-value. You can define an object literally: */

let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, I am " + this.name);
  }
};

person.greet(); // Display "Hello, I'm Juan" in the console

//? Builders and Prototypes:

/* Constructors are functions used to create objects. Prototypes are objects that
They serve as prototypes for other objects. */

// Builder
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Method in the prototype
Person.prototype.greet = function() {
  console.log("Hello, I am " + this.name);
};

// Create an instance of the object
let jua = new Person("Juan", 30);
jua.greet(); // Display "Hello, I'm Juan" in the console

//? Classes (EcmaScript 6 and later):

/* Starting with EcmaScript 6, class syntax was introduced in JavaScript, which provides a way
more declarative of working with the Poo. */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, I am " + this.name);
  }
}

let john = new Person("John", 30);
john.greet(); // Display "Hello, I'm Juan" in the console

//? Inheritance:

// You can achieve inheritance in JavaScript using prototypes or classes.

// Inheritance through prototypes
function Student(name, age, course) {
  Person.call(this, name, age); // Call the Person constructor
  this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  console.log(this.name + " is studying " + this.course);
};

let studentJohn = new Student("John", 20, "Mathematics");
studentJohn.greet(); // Displays "Hello, I'm Juan"
studentJohn.study(); // Sample "Juan is studying Mathematics"

//? Static Methods:

// Static methods are methods that are called on the class itself, not on the instances.

class Utilities {
  static add(a, b) {
    return a + b;
  }
}

console.log(Utilities.sum(3, 4)); // Display 7 in the console

/* This is a basic introduction to Poo in JavaScript. You can choose between the approach based on
prototypes or use class syntax, depending on your preferences and project requirements. */
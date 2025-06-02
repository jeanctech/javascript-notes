//* Classes - JavaScript

/* In JavaScript, classes provide a clearer syntax and a more object-oriented way of
work with functions and prototypes. The classes were introduced in EcmaScript 6 (also known
such as Es6 or Es2015) and provide a more structured way to implement object-oriented programming
(Poo). Here's a basic introduction to classes in JavaScript: */

// Declaration of a Class:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

// Create an instance of the class
let john = new Person("John", 30);

// Call a method of the class
john.greet(); // Display "Hello, I'm Juan" in the console

// Builder:

/* The `constructor` method is called automatically when a new instance of the class is created. Here,
It is used to initialize the properties of the class. */

// Methods:

/* Methods are functions that are associated with the class. They can be called in instances of the
class. */

// Properties:

/* Properties are variables associated with the class and are defined within the constructor. */

// Inheritance:

// You can extend an existing class to create a new class that inherits its properties and methods.

class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // Call the base class constructor
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }
}

// Create an instance of the derived class
let studentJohn = new Student("John", 20, "Mathematics");

// Call methods of the base class and the derived class
studentJohn.greet(); // Displays "Hello, I'm Juan"
studentJohn.study(); // Sample "Juan is studying Mathematics"

// Static Methods:

/* Static methods belong to the class itself and not to instances of the class. They are called in
class, not in an instance. */

class Utilities {
  static add(a, b) {
    return a + b;
  }
}

// Call a static method
console.log(Utilities.sum(3, 4)); // Display 7 in the console

// Getter and Setter:

// You can define `get` and `set` methods to access and modify properties in a controlled way.

class Rectangle {
  constructor(base, height) {
    this._base = base;
    this._height = height;
  }

  getarea() {
    return this._base * this._height;
  }

  set base(newBase) {
    if (newBase > 0) {
      this._base = newBase;
    } else {
      console.error("Base must be greater than zero");
    }
  }
}

let myRectangle = new Rectangle(5, 10);
console.log(myRectangle.area); // Display 50 in the console
myRectangle.base = 8; // Set a new base
console.log(myRectangle.area); // Display 80 in the console

/* These are some of the basic characteristics of classes in JavaScript. The classes provide
a more structured and readable way of working with object-oriented programming compared
with the old model based on prototypes. */

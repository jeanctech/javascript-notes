//* Encapsulation - JavaScript

/* In JavaScript, unlike other object-oriented programming languages such as Java or C++, There is no
native support for class-level encapsulation. However, it can be achieved through of certain patterns
and practices. Next, I will show you how you can achieve encapsulation in JavaScript: */

//? 1. **Private Variables with Closure:**

// You can use functions to create a scope and define private variables.

function Person(name, age) {
  // Private variables
  let _name = name;
  let _age = age;

  // public methods
  this.getName = function() {
    return _name;
  };

  this.setName = function(newName) {
    _name = newName;
  };

  this.getAge = function() {
    return _age;
  };

  this.setAge = function(newAge) {
    if (newAge >= 0) {
      _age = newAge;
    }
  };
}

let john = new Person("John", 30);

console.log(john.getName()); // Displays "John"
juan.setName("Juanito");
console.log(john.getName()); // Sample "Juanito"

console.log(john.getAge()); // Sample 30
john.setAge(31);
console.log(john.getAge()); // Sample 31

/* In this example, `_name` and `_age` are private variables that are only accessible within the
constructor function `Person`. Public methods (such as `getName`, `setName`, etc.) have access
to these private variables due to their lexical closure. */

//? 2. **Symbols (ES6+):**

// Symbols are a way to create "private" properties on an object.

let _name = Symbol("name");

class Person {
  constructor(name, age) {
    this[_name] = name;
    this.age = age;
  }

  getName() {
    return this[_name];
  }

  setName(newName) {
    this[_name] = newName;
  }
}

let jun = new Person("John", 30);

console.log(jun.getName()); // Displays "John"
jun.setName("Juanito");
console.log(jun.getName()); // Sample "Juanito"

console.log(jun.name); // undefined, not directly accessible

/* In this example, `_name` is a symbol that acts as a "private" property. However, this
technique does not completely prevent access, since the properties of an object are always accessible from
some way. */

/* It is important to note that encapsulation in JavaScript is based more on conventions and practices
than in real language restrictions. The code responsible for encapsulation must be aware and
respect the rules established to maintain the integrity of the object. */
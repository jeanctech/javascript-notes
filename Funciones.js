// Funciones en JavaScript

// Funcion Simple

function square(number) {
    return number * number;
}

function suma(numeros){
    return numero1 + numero2;
}

console.log(suma(10 + 20));

// Funcion en Array

function myFunc(theObject) {
    theObject.make = 'Toyota';
  }

  var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
  var x, y;

  x = mycar.make; // x obtiene el valor "Honda"

  myFunc(mycar);
  y = mycar.make; // y obtiene el valor "Toyota"
                  // (la propiedad make fue cambiada por la función)

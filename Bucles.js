// Bucles en JavaScript

// Bucles For

// Version - 0

var mensaje = "Hola Mundo";

for(var i = 0; i < 5; i++){
    console.log(mensaje)
}

var i = 0;

i < 5;

i++;

// Version - 1

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for(let i=0; i<7; i++) {
  console.log(dias[i]);
}

// Examples

var numero = prompt("Introduce un número y se mostrará su factorial");
var resultado = 1;

for(var i=1; i<=numero; i++) {
  resultado *= i;
}
console.log(resultado);

// Bucle For In

let dia = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for (i in dia) {
  console.log(dia[1])
}
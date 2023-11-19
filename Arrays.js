//* Arrays - JavaScript

/* En JavaScript, los arrays son estructuras de datos que te permiten almacenar y acceder a varios
elementos. Pueden contener elementos de diferentes tipos de datos y se definen mediante corchetes `[]`.
Aquí hay algunas operaciones comunes que puedes realizar con arrays: */

//? Declaración de un Array:

let numeros = [1, 2, 3, 4, 5];
let colores = ["rojo", "verde", "azul"];
let mezclado = [1, "dos", true, { nombre: "Juan" }];

//? Acceso a Elementos del Array:

let primerNumero = numeros[0]; // Accede al primer elemento (índice 0)
let segundoColor = colores[1]; // Accede al segundo elemento (índice 1)

//? Modificación de Elementos del Array:

numeros[0] = 10; // Modifica el primer elemento
colores[1] = "amarillo"; // Modifica el segundo elemento

//? Longitud del Array:

let longitud = numeros.length; // Devuelve la longitud del array (en este caso, 5)

//? Añadir y Eliminar Elementos:

// Añadir al final
numeros.push(6);

// Eliminar el último elemento
numeros.pop();

// Añadir al principio
numeros.unshift(0);

// Eliminar el primer elemento
numeros.shift();

//? Buscar y Encontrar Elementos:

let indice = colores.indexOf("verde"); // Devuelve el índice del elemento "verde" o -1 si no lo encuentra
let existeRojo = colores.includes("rojo"); // Devuelve true si el array contiene "rojo", de lo contrario false

//? Iterar sobre un Array:

// For loop
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// forEach
numeros.forEach(function(numero) {
  console.log(numero);
});

// Map (crea un nuevo array basado en el resultado de la función)
let cuadrados = numeros.map(function(numero) {
  return numero * numero;
});

//? Arrays Multidimensionales:

// Los arrays en JavaScript también pueden contener otros arrays, formando así arrays multidimensionales.

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matriz[1][2]); // Accede al elemento en la segunda fila y tercera columna (6)

/* Estas son solo algunas de las operaciones que puedes realizar con arrays en JavaScript. Los arrays son
una parte fundamental de la programación y se utilizan ampliamente para almacenar y manipular datos. */

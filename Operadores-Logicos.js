//Operadores Logicos en JavaScript

// Operadores Y

var a = 10 || 20 //Operador Y

//Examples
var valor1 = true;
var valor2 = false;
resultado = valor1 && valor2; // resultado = false

valor1 = true;
valor2 = true;
resultado = valor1 && valor2; // resultado = true

// Operadores O

var b = 20 && 20 //Operador O

// Examples

var valor1 = true;
var valor2 = false;
resultado = valor1 || valor2; // resultado = true

valor1 = false;
valor2 = false;
resultado = valor1 || valor2; // resultado = false

// Operadores de Asignacion =

var asignacion = "Operador de Asignacion";
console.log(asignacion);

var numero1 = 4;
var numero2 = 4;

// Ahora, la variable numero1 vale 6
numero1 = 6;

// Ahora, la variable numero1 vale 4

numero1 = numero2;

console.log(numero1)


// Operador de Incremento - Decremento

// Incremento
var numero = 5 ;
numero = numero + 3;
console.log(numero);  // numero = 8

// Decremento
var numero = 4 ;
numero = numero - 3;
console.log(numero);  // numero = 1

// Operadores Logicos

// True
var visible = true;
console.log(!visible);

// False
var invisible = false;
console.log(!invisible);

// Examples

var cantidad = 0;
vacio = !cantidad;  // vacio = true

var cantidad = 2;
vacio = !cantidad;  // vacio = false

var mensaje = "";
mensajeVacio = !mensaje;  // mensajeVacio = true

mensaje = "Bienvenido";
mensajeVacio = !mensaje;  // mensajeVacio = false

// Operadores Matematicos

// Version - 0

var numero1 = 10;
var numero2 = 5;

resultado = numero1 / numero2;  // resultado = 2
resultado = numero1 + numero2; // resultado = 15
resultado = numero1 - numero2; // resultado = 5
resultado = numero1 * numero2; // Resultado = 50
resultado = numero1 % numero2;

console.log(resultado)

// Version - 1

var numero1 = 5;
numero1 += 3;

console.log(numero1)

// Operadores Relacionales

// Version - 0

var numero1 = 3;
var numero2 = 5;
resultado = numero1 > numero2; // resultado = false
resultado = numero1 < numero2; // resultado = true
numero1 = 5;
numero2 = 5;
resultado = numero1 >= numero2; // resultado = true
resultado = numero1 <= numero2; // resultado = true
resultado = numero1 == numero2; // resultado = true
resultado = numero1 != numero2; // resultado = false

// Version - 1

// El operador "=" asigna valores
var numero1 = 5;
resultado = numero1 = 3;  // numero1 = 3 y resultado = 3

// El operador "==" compara variables
var numero1 = 5;
resultado = numero1 == 3; // numero1 = 5 y resultado = false

// Version - 2

var texto1 = "hola";
var texto2 = "hola";
var texto3 = "adios";

resultado = texto1 == texto3; // resultado = false
resultado = texto1 != texto2; // resultado = false
resultado = texto3 >= texto2; // resultado = false

// Practica de Operadores

//Ejerccio
var valores = [true, 5, false, "hola", "adios", 2];

console.log(valores);

//Operaciones Relacionales

var resultado = valores[3] > valores[4];

console.log(resultado)

// Operaciones Logicas
var valor1 = valores[0];
var valor2 = valores[2];

var resultado = valor1 || valor2;
console.log(resultado);

var resultado = valor1 && valor2;
console.log(resultado);

// Operaciones matemáticas

var num1 = valores[1];
var num2 = valores[5];

var suma = num1 + num2;
console.log(suma);

var resta = num1 - num2;
console.log(resta);

var multiplicacion = num1 * num2;
console.log(multiplicacion);

var division = num1 / num2;
console.log(division);

var modulo = num1 % num2;
console.log(modulo);
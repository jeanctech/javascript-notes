// Tipos de Datos en JavaScript

//Cadena de Texto - Strings

//Version - 0

let texto = "Cadena";

console.log(texto);

//Version - 1

var mensaje = "Bienvenido a Nuestro Sitio Web";
var nombreProducto = ' - Producto Abc';
var letraSeleccionada = mensaje + nombreProducto;

console.log(letraSeleccionada);

//Version - 2

var mensaje = "Hola Mundo! \n Qué facil es incluir \'comillas simples\' \n y \"comillas dobles\" ";
console.log(mensaje);

//Numeros - Interger

var numero = 10;
var number = 5;
var resultado = numero + number;

console.log(resultado);

//Numeros - Float

let num_1 = 2.1;
let numb_2 = 5.1;
let result = num_1 + numb_2;

console.log(result);

//Arreglos - Array

//Dias de la Semana

//Version - 0
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

var diaSeleccionado = dias[0];    //Dia Seleccionado = "Lunes"
var otroDia = dias[5]; //Otro Dia = "Sábado"

console.log(diaSeleccionado);
console.log(otroDia);

//Version - 1
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

var meses_mes1 = meses[2]; //Mes Seleccionado = "Marzo"
var meses_mes_hoy = meses[5]; //Mes Hoy = "Junio"

console.log(meses_mes1);
console.log(meses_mes_hoy);

//Tipo - Booleanos

var clienteRegistrado = false;
var ivaIncluido = true;

console.log(clienteRegistrado);
console.log(ivaIncluido);
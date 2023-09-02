// JavaScript

var user_1 = prompt("Primer Numero ");
var user_2 = prompt("Segundo Numero ");
var user_3 = user_1 * user_2;

alert("Tu Resultado es " + user_3);

// Funciones

function suma(uno, dos){
	var user_1 = prompt("Primer Numero ");
	var user_2 = prompt("Segundo Numero ");
	var user_3 = user_1 + user_2;

	alert("Tu Resultado es " + user_3);
}

function miFuncion (){
var numero = 19
document.write(numero)
}

// Operadoes Typeof

var boleano = true
var numerico = 22
var numerico_flotante = 13.56
var texto = "mi texto"
var fecha = new Date()
document.write("<h1>El tipo de boleano es: " + typeof boleano)
document.write("<h2>El tipo de numerico es: " + typeof numerico)
document.write("<h3>El tipo de numerico_flotante es: " + typeof numerico_flotante)
document.write("<p>El tipo de texto es: " + typeof texto)
document.write("<h5>El tipo de fecha es: " + typeof fecha)

// Bucles - If 

var edad = prompt("Cual Es tu Edad ");

if (edad > 18){
alert("Eres Mayor Ya que Tienes " + edad)}
else{
alert("Eres Menor Ya que Tienes " + edad)}

var dia = "lunes";

if (dia == "lunes")
document.write ("<h1>Que tengas un feliz comienzo de semana");

// Bucles - If Anidadas

var numero1 = 23
var numero2 = 63

if (numero1 == numero2){
document.write("Los dos números son iguales")}
else{
if (numero1 > numero2) {
document.write("El primer número es mayor que el segundo")}
else{
document.write("El primer número es menor que el segundo")}
}

//Bucle Switch

var dia_de_la_semana

switch (dia_de_la_semana) {
case 1:
document.write("Es Lunes")
break
case 2:
document.write("Es Martes")
break
case 3:
document.write("Es Miércoles")
break
case 4:
document.write("Es Jueves")
break
case 5:
document.write("Es viernes")
break
case 6:
document.write("Es fin de semana")
break
}

// Bucle For 

var i
for (i=0;i<=10;i++) {
document.write("<p>" + i)
document.write("<br>")
}

var dias 

for (dias=1;<=7;dias++){
	document.write("<p>" + dias)
	document.write("<br>")
}

for (i=1;i<=6;i++) {
document.write("<H" + i + ">Encabezado de nivel " + i + "</H" + i + ">")
}

// Bucle While

var color = ""

while (color != "rojo"){
color = prompt("dame un color (escribe rojo para salir)","")
}

// Bucle While do

var color = ""

do {
color = prompt("dame un color (escribe rojo para salir)","")} 
while (color != "rojo")

var suma = 0
while (suma < 1000){
suma += parseInt(Math.random() * 100)
document.write (suma + "<br>")
}
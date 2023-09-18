// Bucles en JavaScript

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

var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for(var i=0; i<7; i++) {
  alert(dias[i]);
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
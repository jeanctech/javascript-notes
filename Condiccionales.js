// Condiccionales

// Condiccionales If

// Version - 0

var mostrarMensaje = true;

if(mostrarMensaje) {
  console.log("Hola Mundo");
}

// Version - 1

var mostrado = false;
var usuarioPermiteMensajes = true;

if(!mostrado && usuarioPermiteMensajes) {
  console.log("Es la primera vez que se muestra el mensaje");
}

// Examples
var numero1 = 5;
var numero2 = 8;

if(numero1 <= numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(numero2 <= 0) {
  console.log("numero2 es positivo");
}
if(numero1 < 0 || numero1 != 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if(++numero1 < numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

// Condicionales Else

// Version - 0

var edad = 18;

if(edad >= 18) {
  console.log("Eres mayor de edad");
}
else {
  console.log("Todavía eres menor de edad");
}

// Version - 1

var nombre = "";

if(nombre == "") {
  console.log("Aún no nos has dicho tu nombre");
}
else {
  console.log("Hemos guardado tu nombre");
}

// version - 2

if(edad < 12) {
    alert("Todavía eres muy pequeño");
  }
  else if(edad < 19) {
    alert("Eres un adolescente");
  }
  else if(edad < 35) {
    alert("Aun sigues siendo joven");
  }
  else {
    alert("Piensa en cuidarte un poco más");
  }

// Examples

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Introduce tu número de DNI (sin la letra)");
var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
letra = letra.toUpperCase();

if(numero < 0 || numero > 99999999) {
    alert("El número proporcionado no es válido");
  }
  else {
    var letraCalculada = letras[numero % 23];
    if(letraCalculada != letra) {
      alert("La letra o el número proporcionados no son correctos");
    }
    else {
      alert("El número de DNI y su letra son correctos");
    }
  }
/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1 = parseInt(document.getElementById("numeroUno").value);
var numero2 = parseInt(document.getElementById("numeroDos").value);

var suma = numero1 + numero2;
alert(suma);
}

function restar()
{
	var numero1 = parseInt(document.getElementById("numeroUno").value);
var numero2 = parseInt(document.getElementById("numeroDos").value);

var resta = numero1 - numero2;
alert(resta);
}

function multiplicar()
{ 
	var numero1 = parseInt(document.getElementById("numeroUno").value);
var numero2 = parseInt(document.getElementById("numeroDos").value);

var multiplicar = numero1 * numero2;
alert(multiplicar);
}

function dividir()
{
	var numero1 = parseInt(document.getElementById("numeroUno").value);
var numero2 = parseInt(document.getElementById("numeroDos").value);

var dividir = numero1 / numero2;
alert(dividir);
}


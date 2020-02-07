/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
var nombre = document.getElementById("elNombre").value;

var edad = document.getElementById("laEdad").value;

alert ("Su nombre es " + nombre + " y usted tiene " + edad + " años.");




    //	alert ("Su nombre es " + document.getElementById("elNombre").value + " y usted tiene " + document.getElementById("laEdad").value + " años"); 
}


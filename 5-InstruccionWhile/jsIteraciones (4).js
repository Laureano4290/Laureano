function mostrar()
{
var numero= parseInt(prompt("Ingrese un numero entre 0 y 9"))
	//var numero = 10;
while (numero < 0 || numero > 9 || isNaN(numero)){ 
	numero = parseInt(prompt("reingrese un número entre 0 y 9."));
	 }
// El parseInt va en los 2 lados si decido usarlo
}//FIN DE LA FUNCIÓN
document.getelementById("Numero").value = numero
//while (!(numero >= 0 && numero < 10 )){ 
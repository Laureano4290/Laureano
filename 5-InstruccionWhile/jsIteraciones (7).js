function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta;
	var promedio;

do{
	numero = parseInt(prompt("ingrese un numero"))
	while (isNaN(numero)){
		numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"))
	}
	acumulador = acumulador + numero;
	contador = contador + 1;

	respuesta = prompt("Quiere ingresar otro numero?")
}while (respuesta == "si");

promedio = acumulador / contador;
/*	while (respuesta != null){
		
		console.log(respuesta + " / " + acumulador + " / " + contador);

		respuesta= prompt("ingrese un numero");

		console.log(respuesta + " / " + acumulador + " / " + contador);
           
		if ( respuesta != null){
		acumulador += parseInt(prompt("ingrese un numero"));
		//acumulador = acumulador + respuesta;
		contador++;


 }
 console.log(respuesta+ " / " + acumulador + " / " + contador);
 }*/
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
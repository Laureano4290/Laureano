function mostrar()
{

	var numero = 0;
	var sumanega = 0;
	var sumaposi = 0;
	var cantposi = 0;
	var cantnega = 0;
	var cant0 = 0
	var cantpar = 0;
	var promnega = 0;
	var promposi = 0;
	var final = 0;
	var respuesta = "si";
	

	do{
		numero = parseInt(prompt("ingrese un numero"));
	     while (isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"))
	 }
	 if ((numero % 2) == 0){
		 cantpar++;

	 }
	 if (numero == 0 ) {
		 cant0++;
	 }
	else if (numero < 0 ) { 
		cantnega++;
		sumanega += numero;
	 }
	 else {
		 cantposi++;
		 sumaposi += numero;
	 }
	 respuesta = prompt("quiere ingresar otro numero?");
 }while (respuesta == "si");

    promposi = sumaposi / cantposi;
	promnega = sumanega / cantnega;
	final = sumaposi - sumanega;

document.write (" 1- Suma Negativos: " + sumanega + " / 2- Suma Positivos: " + sumaposi + " / 3- Cantidad Positivos: " + cantposi + " / 4- Cantidad Negativos: " + cantnega + "  / 5- Cantidad de Ceros: " + cant0 + " / 6- Cantidad de Pares: " + cantpar + " / 7- Promedio Positivos: " + promposi + " / 8- Promedio Negativos: " + promnega + " / 9- Diferencia: " + final) ;

}//FIN DE LA FUNCIÓN
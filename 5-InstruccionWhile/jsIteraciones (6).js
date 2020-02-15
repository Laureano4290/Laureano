function mostrar()
{

	var contador=0;
	var acumulador=0;

while (!(contador == 5)){
	acumulador += parseInt(prompt("ingrese un numero"));
	contador++; 
 }
       
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
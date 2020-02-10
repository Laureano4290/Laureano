function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = (Math.ceil(Math.random()*10));
if(nota >= 9 ) { 
alert("EXCELENTE, nota = " + nota);
} else if ( nota >= 4){
	alert("APROBO, nota = " + nota);
}else {
	alert("Vamos, la proxima se puede, nota = " + nota);
}
}//FIN DE LA FUNCIÓN
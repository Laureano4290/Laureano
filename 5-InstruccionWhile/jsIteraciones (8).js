function mostrar()
{

	var suma=0;
	var multi=1;
	var flag=0
	
	var respuesta=0;

while(respuesta != null){
	respuesta = prompt("Ingrese un numero");
	flag++;
	if(respuesta != null){
		respuesta = parseInt(respuesta);
		if(respuesta >= 0){ 
		suma = respuesta + suma;
			
		 }else{ 
			 multi = respuesta * multi;
		 }
		 
	}
	
	
}




document.getElementById('suma').value=suma;
document.getElementById('producto').value=multi;

}//FIN DE LA FUNCIÓN
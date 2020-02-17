function mostrar()
{

var sexo;

while (!(sexo == "f" || sexo == "m" || sexo == "F" && sexo == "M" )) { 
    sexo = prompt("ingrese f ó m .");
 }
 
document.getElementById('Sexo').value = sexo;
//while (sexo != "f" && sexo != "m")
}//FIN DE LA FUNCIÓN

//.toLowerCase() transforma en minuscula
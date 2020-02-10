function mostrar()
{
//tomo la edad  

var edad; 

edad = parseInt(document.getElementById("edad").value);
var estadocivil = document.getElementById("estadoCivil").value;
if(edad >= 18 && estadocivil == "Soltero") {
alert("Usted es soltero y no es menor ")
 }
}//FIN DE LA FUNCIÓN
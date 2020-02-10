function mostrar()
{
//tomo la edad  

var edad; 

edad = parseInt(document.getElementById("edad").value);
var estadocivil = document.getElementById("estadoCivil").value;
if(edad < 18 && estadocivil != "Soltero") {
alert("Usted es muy joven para no ser soltero ")

}


}//FIN DE LA FUNCIÓN
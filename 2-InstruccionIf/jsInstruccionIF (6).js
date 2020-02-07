function mostrar()
{
//tomo la edad  
var edad; 

edad = parseInt(document.getElementById("edad").value);
if(edad >= 18) {
    alert("Usted es mayor de edad");
    
    }
    if(edad > 17 && edad < 13) {
        alert("Usted es adolescente");
          }



}//FIN DE LA FUNCIÓN
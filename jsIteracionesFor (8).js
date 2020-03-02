function mostrar()
{
var numero;
var primo = false;
var resto;
var numerodivisor;

numero = parseInt(prompt("Ingrese limite"));
while(isNaN(numero)){
numero = parseInt(prompt("Eso no es un numero"))
 }
 for(i=1;i < numero ; i++){
     resto = numero % i;
     if(resto == 0 && ( i != numero && i != 1)){
     primo = false;
     i = numero;    
     }
     else{
         primo = true;
     }

 }
 if (primo == true){
     alert(numero + " es primo");
 }else{
     alert(numero + " no es primo");
 }
 



}//FIN DE LA FUNCIÓN
function mostrar()
{
var numero;
var contadorpares = 0;

numero = parseInt(prompt("Ingrese un numero: "));
while(isNaN(numero)){
    numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
}
for ( var i = 1; i <= numero; i++){
    if(1 % 2 == 0){
        console.log(1)
        contadorpares++;
    }
}
console.log("Pares encontrados: " + contadorpares);


}//FIN DE LA FUNCIÓN
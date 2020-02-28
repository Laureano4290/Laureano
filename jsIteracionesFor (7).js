function mostrar()
{
    var numero;
    var contadordivisor = 0;
    
    numero = parseInt(prompt("Ingrese un numero: "));
    while(isNaN(numero)){
        numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
    }
    for ( var i = 1; i <= numero; i++){
        if(numero % i == 0){
            console.log(1)
            contadordivisor++;
        }
    }
    console.log("divisores encontrados: " + contadordivisor);

}//FIN DE LA FUNCIÓN
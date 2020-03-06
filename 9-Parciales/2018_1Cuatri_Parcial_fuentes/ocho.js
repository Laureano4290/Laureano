function mostrar()
{
    var letra
    var numero
    for(i = 0; i < 5 ; i++){
        nota = parseInt(prompt("ingrese su nota: "));
        while(isNaN(nota) || nota > 10 || nota < 0) { 
        nota = parseInt(prompt("eso no es un numero. Ingrese su nota: "))
        }
    }
}

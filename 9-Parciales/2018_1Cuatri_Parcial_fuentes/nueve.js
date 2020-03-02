function mostrar()
{
var marca;
var marcapesada;
var peso;
var temperatura;
var contadorCongelados = 0
var conttemppar = 0;
var prodmaspesado;
var pesomaxnocongelado;
var pesomin;
var productos;
var cantprod = 0;
var respuesta;
var acumpeso;
var contpeso = 0;
var flag = 0;

do{ 
marca = prompt("Ingrese una marca"); 
// pido marca
peso = parseInt(prompt("Ingrese un peso entre 1 y 100")); 
while (isNaN(peso) || ( peso > 100 || peso < 1)) {
    peso = parseInt(prompt("Respuesta invalida. Ingrese un peso entre 1 y 100"));
    // pido peso
}
temperatura = parseInt(prompt("Ingrese una temperatura")); 
while (isNaN(temperatura) || (temperatura > 30 || temperatura < -30)){ 
    temperatura = parseInt(prompt("Respuesta invalida. Ingrese una temperatura entre 1 y 100"));
    // pido temperatura
}
if(temperatura % 2 == 0){  
conttemppar++;
// chequeo temperatura par
 }

if ((flag == 0 || peso > pesomaxnocongelado) && temperatura > 0) {
    pesomaxnocongelado = peso;
    marcapesada = peso;
    flag = 1;       
 }
if (temperatura < 0){
    contadorCongelados++;

}
acumuladorPeso = acumuladorPeso + peso;

if (contador == 0 || peso > maximo) {
    maximo = peso;
}
if (contador == 0 || peso < minimo) {
    minimo = peso;
}

contador++;
// ------- pregunto si quiere continuar -----
seguir = prompt("Quiere continuar?:");

} while (seguir == 's');

promedio = acumuladorPeso / contador;

document.write("a) La cantidad de temperaturas pares: " + contadorTempPares + "</br>");
document.write("b) La marca del producto más pesado no congelado: " + marcaPesada + "</br>");
document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " + contadorCongelados + "</br>");
document.write("d) El promedio del peso de todos los productos: " + promedio + "</br>");
document.write("f) Peso maximo: " + maximo + "</br>");
document.write("f) Peso minimo: " + minimo + "</br>");


}
 

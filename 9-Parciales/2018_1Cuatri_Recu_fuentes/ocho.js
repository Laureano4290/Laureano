function mostrar()
{
    //-------------------------------variables---------------------------
var letra;
var numero;
var seguir = false;
var maximo;
var minimo;
var letramax;
var letramin;
//----- contadores----
var contnumerospares = 0;
var contnumerosimpares = 0;
var contadorceros = 0;
var contadorposi = 0;
//----acumuladores----
var acumuladorposi = 0;
var acumuladornega = 0;
//--------varpromedio---------
var promedioposi;
//--------flags------------
var flag = false;

//--------- do-----------
do{ 
    //----------------------- pido los datos---------------------
letra = prompt("Ingrese una letra");

numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));
while(isNaN(numero) || numero > 100 || numero < -100){
    numero = parseInt(prompt("Dato invalido. Ingrese un numero entre -100 y 100"))
}
//----------------------------------realizo los pares e impares---------------------
if(numero % 2 == 0){
    contnumerospares++;
}
else {
    contnumerosimpares++;
}
//-----------------------------------contador de ceros---------------------
if (numero == 0){
    contadorceros++;
}
//-----------------------------------negativos_positivos---------------------
if (numero > 0){
    acumuladorposi = acumuladorposi + numero;
    contadorposi++;
}else {
    acumuladornega = acumuladornega + numero;
}
//-------------------------------------maximos y minimos--------------------
if (flag == false || numero > maximo){
    letramax = letra;
    maximo = numero;
 }
 if (flag == false || numero < minimo){ 
     letramin = letra;
     minimo = numero;
     flag = true;
 }
 //------------------------------------continuacion-----------------------------
seguir = confirm("Desea continuar?")
}while(seguir == true);
//------------------------------------promedios----------------------------------
promedioposi = acumuladorposi / contadorposi;

//-----------------------------------mostrar--------------------------------------
document.write("a) La cantidad de numeros pares son: " + contnumerospares + "</br>");
document.write("b) La cantidad de numeros impares son: " + contnumerosimpares + "</br>");
document.write("c) La cantidad de ceros es: " + contadorceros + "</br>");
document.write("d) El promedio de los positivos es: " + promedioposi + "</br>");
document.write("e) La suma de los numeros negativos es: " + acumuladornega + "</br>");
document.write("f) El numero maximo es: " + maximo + " y su letra es: " + letramax + "</br>");
document.write("f) El numero minimo es: " + minimo + " y su letra es: " + letramin + "</br>");
}
// L2 M-5 P24 K-24 A98 B4
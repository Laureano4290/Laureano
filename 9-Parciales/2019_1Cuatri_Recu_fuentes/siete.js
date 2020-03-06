function mostrar()
{
var bolsas;
var kilos;
var sabores;
var contador = 0;
var contkilos = 0;
var acumuladorkilos = 0;
var flag = false;
var minimo;
var saborliviano;
var contcarne = 0;
var acumuladorcarne = 0;
var promediototal;
var promediocarne;

//for(i = 0; i < 10 i ;){ 
while (!(contador == 10)){    
kilos = parseInt(prompt("Ingrese kilo de la bolsa (0-500)"));
while (isNaN(kilos) || kilos < 0 || kilos > 500 ){
    kilos = parseInt(prompt("Respuesta invalida. Ingrese kilo de la bola (0-500)"));
}
sabores = prompt("Ingrese un sabor (carne, vegetales o pollo)");
while(!(sabores == "carne" || sabores == "vegetales" || sabores == "pollo")){
    sabores = prompt("Respuesta invalida. Ingrese un sabor (carne, vegetale o pollo");
}
if(kilos > 0){
    acumuladorkilos = acumuladorkilos + kilos;
    contkilos++;
}
if (flag == false || kilos < minimo){
    minimo = kilos;
    saborliviano = sabores;
    flag = true;
}
if (sabores == "carne"){
    acumuladorcarne = acumuladorcarne + kilos;
    contcarne++;
}
contador++;
}
promediototal = acumuladorkilos / contkilos;
promediocarne = acumuladorcarne / contcarne;

alert(promediototal + " | " + minimo + " | " + saborliviano + " | " + contcarne + " | " + promediocarne);
}
/* carne 200 
verdura 5
pollo 498
pollo 2
carne 66
carne 22
verdura 90
verdura 182
carne 82
carne 150
*/
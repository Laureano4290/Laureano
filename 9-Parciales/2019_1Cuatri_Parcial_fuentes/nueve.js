function mostrar()
{
var nombre;
var edad;
var sexo;
var nota;
var seguir;
var varones = 0;
var mujeres = 0;
var varonesaprobados = 0;
var mujeresaprobadas = 0;
var promedionotasmenores;
var acumuladormenores = 0;
var acumuladoradolescentes = 0;
var acumuladormayores = 0;
var contadormenores = 0;
var contadoradolescentes = 0;
var contadormayores = 0;
var promedionotasadolescentes;
var promedionotasmayores;
var flagme = 0;
var flagad = 0;
var flagma = 0;

do{
    nombre = prompt("Ingrese su nombre: ");
    edad = parseInt(prompt("Ingrese su edad"));
while(isNaN(edad) || edad <= 0) {
    edad = parseInt(prompt("Respuesta invalida. Ingrese su edad"));
}
    sexo = prompt("Ingrese su sexo (m/f");
while (sexo == "f" && sexo == 'm'){
    sexo = prompt("Respuesta invalida. Ingrese su sexo");
}
    nota = parseInt(prompt("Ingrese su nota"))
while (isNaN(nota) || (nota < 0 && nota > 10)){
    nota = parseInt(prompt("Respuesta invalida. Ingrese su nota"));
}
if (sexo == "m"){
    varones++;
    if(nota >= 4){
        varonesaprobados++;
}
 }
if (sexo == "f"){
    mujeres++;
    if(nota >= 4) { 
    mujeresaprobadas++;
     }
}
if (edad < 13 && edad > 0){ 
acumuladormenores = acumuladormenores + nota;
contadormenores++;
flagme = 1;
}
if else (edad > 18) {
    acumuladormayores = acumuladormayores + nota;
    contadormayores++;
    flagma = 1;
}else{
acumuladoradolescentes = acumuladoradolescentes + nota;
contadormenores++;
}
while (seguir == 's');
}

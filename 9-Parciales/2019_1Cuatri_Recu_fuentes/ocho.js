function mostrar()
{
    // Variables
var color;
var valor;
var seguir = false;
var flag = false;
var maximo;
var colorvehiculomascaro;
// Contadores
var controjos = 0;
var controjos5000 = 0;
var contmenor5000 = 0;
var contvehiculos = 0;
// Acumuladores
var acumuvehiculos = 0;
//Promedio
var promediovehiculos;

//----------------------------- pedimos los datos----------------------
do{ 
color = prompt("Ingrese un color (rojo, verde o amarillo)");
while(!(color == "rojo" || color == "verde" || color == "amarillo" )){
    color = prompt("Respuesta invalida. Ingrese un color (rojo , verde o amarillo")
}
valor = parseInt(prompt("Ingrese un valor entre 0 y 10000"));
while(isNaN(valor) || valor > 10000 || valor < 0){
    valor = parseInt(prompt("Respuesta invalida. Ingrese un valor entre 0 y 10000"));
}
//----------------------------------Rojos----------------------------------
if(color == "rojo"){
    controjos++;
}
if (valor > 5000 && color == "rojo"){
    controjos5000++;
}

//----------------------------------- < 5000 ----------------------------
if (valor < 5000){
    contmenor5000++;
}
//----------------------------------- vehiculos ingresados----------------
if(valor > 0){
    acumuvehiculos = acumuvehiculos + valor;
    contvehiculos++;
}
//------------------------------------ vehiculo mas caro ----------------------
if(flag == false || valor > maximo){
    maximo = valor;
    colorvehiculomascaro = color;
    flag = true;
}

//---------------------------------------desea continuar?--------------------
seguir = confirm("Desea continuar?");
}while(seguir == true);
//--------------------------------------promedios -----------------------------
promediovehiculos = acumuvehiculos / contvehiculos;
//--------------------------------------mostrar ------------------------------
document.write("a) Cantidad de vehiculos rojos: " + controjos + "</br>");
document.write("b) Cantidad de vehiculos rojos > 5000: " + controjos5000 + "</br>");
document.write("c) Cantidad de vehiculos < 5000: " + contmenor5000 + "</br>");
document.write("d) Promedio de vehiculos ingresados: " + promediovehiculos + "</br>");
document.write("e) El valor del vehiculo mas caro es: " + maximo + " y su color es: " + colorvehiculomascaro + "</br>");

}
// amarillo 6000 rojo 500 amarillo 9000 rojo 7000 verde 200
function mostrar()
{
var animal;
var peso;
var temp;
var seguir;
var flagpesado = false;
var flagmax0 = false;
var flagmin0 = false;
var conttemperaturapar = 0;
var pesoalto;
var pesomax0;
var pesomin0;
var nombrepesado;
var temperaturadeanimalpesado;
var contadoranimalesbajo0 = 0;
var acumuladorpeso = 0;
var contadorpeso = 0;
var promediopeso;
do{


//-------------------------Pido los datos--------------------------
animal = prompt("Ingrese nombre del animal: ");

peso = parseInt(prompt("Ingrese peso del animal (1-1000):"));
while(isNaN(peso) || peso > 1000 || peso < 1) {
    peso = parseInt(prompt("Ingrese un pesó válido (1-1000):"));
}

temp = parseInt(prompt("Ingrese temperatura del habitat del animal (-30 a 30):"));
while(isNaN(temp) || temp > 30 || temp < -30) {
    temp = parseInt(prompt("Ingrese una temperatura valida (-30 a 30):"));
}
//-------------------------- a) temperaturas pares----------------------------

if(temp % 2 == 0){
    conttemperaturapar++;
}
//-------------------------- b) nombre y temp del animal mas pesado---------------
if (peso > pesoalto || flagpesado == false){
   pesoalto = peso;
   nombrepesado = animal;
   temperaturadeanimalpesado = temp;
   flagpesado = true; 
}
//-------------------------- c) animales bajo 0 -----------------------------------
if (temp < 0 ){
    contadoranimalesbajo0++;
    if (peso > pesomax0 || flagmax0 == false ){
        pesomax0 = peso;
        flagmax0 = true;
    }else if (peso < pesomin0 || flagmin0 == false){
        pesomin0 = peso;
        flagmin0 = true;
    }
   
}
//-------------------------- d) promedios ------------------------------------------
if(peso > 0 && peso <= 1000){
   acumuladorpeso = acumuladorpeso + peso;
   contadorpeso++; 
}
//----------------------------confirmar si quiere seguir-------------------------
seguir = confirm("Quiere seguir ingresando datos?")
}while(seguir == true);
//-------------------------------por si el flag no actua----------------------------
if(flagpesado == false){
    pesoalto = "no se ingresaron animales";
}
if(flagmax0 == false){
    pesomax0 = "No se ingresaron animales con habitats por debajo de 0 grados";
}
if(flagmin0 == false){
    pesomin0 = "No se ingresaron animales con habitats por debajo de 0 grados";
}
acumuladorpeso = parseInt(acumuladorpeso);
contadorpeso = parseInt(contadorpeso);
promediopeso = acumuladorpeso / contadorpeso;
//-----------------------------------enseño los resultados---------------------------
document.write("a) cantidad de temperaturas pares: " + conttemperaturapar + "</br>");
document.write("b) el nombre del animal mas pesado es : " + nombrepesado + "y su temperatura es: " + temperaturadeanimalpesado + "</br>");
document.write("c) cantidad de animales que viven a menos de 0 grados: " + contadoranimalesbajo0 + "</br>");
document.write("d) el promedio del pesp de todos los animales es: " + promediopeso + "</br>");
document.write("f) El peso maximo bajo 0 es: " + pesomax0 + "</br>");
document.write("f) El peso minimo bajo 0 es: " + pesomin0 + "</br>");

 /*Inputs
 var nombre; //Nombre del animal
 var peso; // Peso del animal ( 1 a 1000 )
 var temp; // Temperatura del habitat del animal ( -30 a 30 )

 //Contadores
 var cantTempPar = 0; // Cantidad de temperaturas pares
 var animSubZero = 0; // Animales que viven bajo cero
 var contAnimales = 0;

 //Acumuladores
 var acumPeso = 0; // Suma de todos los pesos
 
 //Promedios
 var promTotal; // Promedio del peso total 

 //Miscelaneos
 var nombrePesado; // Nombre del animal mas pesado
 var pesoPesado; // Peso del animal mas pesado
 var tempPesada; // Temperatura del hábitat del animal mas pesado
 var pesoMaxSZ; // Peso maximo de todos los animales bajo cero. SZ -> Sub Zero
 var pesoMinSZ; // Peso minimo de todos los animales bajo cero. SZ -> Sub Zero
 var seguir; // Quiere seguir?

 //Flags
 var flagPMaSZ = false; // Flag de pesoMaxSZ
 var flagPMiSZ = false; // Flag de pesoMinSZ
 var flagPesada = false; // Flag de nombrePesado

 do{
     //Inputs
     nombre = prompt("Ingrese nombre del animal: ");

     peso = parseInt(prompt("Ingrese peso del animal (1-1000):"));
     while(isNaN(peso) || peso > 1000 || peso < 1) {
         peso = parseInt(prompt("Ingrese un pesó válido (1-1000):"));
     }

     temp = parseInt(prompt("Ingrese temperatura del habitat del animal (-30 a 30):"));
     while(isNaN(temp) || temp > 30 || temp < -30) {
         temp = parseInt(prompt("Ingrese una temperatura valida (-30 a 30):"));
     }

     //Processing
     if(temp % 2 == 0) { // a)
         cantTempPar++;
     }

     if(flagPesada == false || peso > pesoPesado) { // b)
         pesoPesado = peso;
         nombrePesado = nombre;
         tempPesada = temp;
         flagPesada = true;
     }

     if(temp < 0) { // c)
         animSubZero++;
         if(peso > pesoMaxSZ || flagPMaSZ == false) { // f)
             pesoMaxSZ = peso;
             flagPMaSZ = true;
         } else if (peso < pesoMinSZ || flagPMiSZ == false) { // f)
             pesoMinSZ = peso;
             flagPMiSZ = true;
         }
     }

     contAnimales++;
     acumPeso += peso;

     seguir = confirm("Quiere seguir ingresando datos?");

 }while(seguir == true);

 if(flagPesada == false) {
     pesoPesado = "No se ingresaron animales";
 }

 if(flagPMiSZ == false) {
     pesoMinSZ = "No se ingresaron animales con habitats por debajo de 0 grados";
 }

 if(flagPMaSZ == false) {
     pesoMaxSZ = "No se ingresaron animales con habitats por debajo de 0 grados";
 }

 acumPeso = parseInt(acumPeso);
 contAnimales = parseInt(contAnimales);

 promTotal = acumPeso / contAnimales;

 document.write("a) Cantidad de temperaturas pares: " + cantTempPar + "</br>");
 document.write("b) Nombre y temperatura del animal mas pesado: " + nombrePesado + " | " + tempPesada + "</br>");
 document.write("c) Cantidad de animales por debajo de 0 grados: " + animSubZero + "</br>");
 document.write("d) Promedio de todos los pesos: " + promTotal + "</br>");
 document.write("f) Peso maximo de los animales bajo cero: " + pesoMaxSZ + "</br>");
 document.write("f) Peso minimo de los animales bajo cero: " + pesoMinSZ + "</br>");
 */
 }



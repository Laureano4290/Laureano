function mostrar()
{
    // ----------------------------variables-------------------
var nombre;
var edad;
var flag = 0;
var sexo;
var nota;
var seguir;
//------------------------- acumuladores-------------------------
var acumuladormenores = 0;
var varonesaprobados = 0;
var acumuladoradolescentes = 0;
var acumuladormayores = 0;
var acumuladornotasM = 0;
var acumuladornotasF = 0;
//-------------------------mayor nota--------------------
var nombremayornota;
var sexomayornota;
var mayornotaadolescente; 
//-------------------------contadores ----------------------
var contadormenores = 0;
var contadoradolescentes = 0;
var contadormayores = 0;
var contadorF = 0;
var contadorM = 0;
//-------------------------promedios-----------------
var promedionotasadolescentes = 0;
var promedionotasmayores = 0;
var promedionotasmenores = 0;
var promedioM = 0;
var promedioF = 0;
//------------------------pedido de datos------------------------

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
// -------------------------analisis de datos--------------------
if (sexo == "m" && nota >= 4){
        varonesaprobados++;
}

 //-----------------------------edad-------------------------
if (edad >18){
    //mayor
    acumuladormayores = acumuladormayores + nota;
    contadormayores++;
}
else if (edad > 13){ 
    //adolescente
acumuladoradolescentes = acumuladoradolescentes + nota;
contadoradolescentes++;
if ( flag == 0 || nota > mayornotaadolescente){
    // la nota mas alta adolescente
    mayornotaadolescente = nota;
    nombremayornota = nombre;
    sexomayornota = sexo;
    flag == 1;
}
}
else{
    //---------------------- menores----------------------
acumuladormenores = acumuladormenores + nota;
contadormenores++;
}

//---------------------------- sexo---------------------
if (sexo == "m"){
    // varon
    acumuladornotasM = acumuladornotasM + nota;
    contadorM++;
}
else {
// mujer
acumuladornotasF = acumuladornotasF + nota;
contadorF++;
}
//---------------------¿quiere seguir?----------------------
seguir = prompt("¡Usted quiere seguir?");
}while (seguir == 's');
// ----------------------Mostrar-----------------------------
if(contadoradolescentes != 0){
    promedionotasadolescentes = acumuladoradolescentes / contadoradolescentes;
    }
if (contadormenores != 0){
    promedionotasmenores = acumuladormenores / contadormenores;
    }
if (contadormayores != 0){
    promedionotasmayores = acumuladormayores / contadormayores;
    }
if (contadorM != 0){
    promedioM = acumuladornotasM / contadorM;
    }
if (contadorF != 0){
    promedioF = acumuladornotasF / contadorF;
    }
document.write("a) la cantidad de varones aprobados: " + varonesaprobados + "</br>");
document.write("b) El promedio de notas de los menores de edad es: " + promedionotasmenores +"</br>");
document.write("c) El promedio de notas de los adolescentes es: " + promedionotasadolescentes + "</br>");
document.write("d) El promedio de notas de los mayores de edad es: " + promedionotasmayores + "</br>");
document.write("e) el primedio de notas por sexo masculino es: " + promedioM + "y el de sexo femenino es: " + promedioF + "</br>");
if (contadoradolescentes == 0){
    document.write("No se ingresaron adolescentes")
    }  
else {
    document.write("f) Del adolescente con mayor nota el nombre es: " + nombremayornota + "y tiene sexo: " + sexomayornota + "</br>");
}                     
}

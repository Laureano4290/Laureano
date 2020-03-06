function mostrar()
{
var nota;
var flag = 0;
var varones = 0;
var suma = 0;
var baja;
var sexo;
var sexo2;
var promedio;
for(i = 0; i < 5 ; i++){
    nota = parseInt(prompt("ingrese su nota: "));
    while(isNaN(nota) || nota > 10 || nota < 0) { 
    nota = parseInt(prompt("eso no es un numero. Ingrese su nota: "))
}
sexo = prompt("Ingrese su sexo: ");
while (sexo != 's' && sexo != 'm'){
    sexo = prompt("Sexo invalido. Ingrese su sexo: ");
}
suma = suma + nota;
if (nota < baja || flag == 0 ){
    baja = nota;
    sexo2 = sexo;
    flag = 1;
}
if (nota >= 6 && sexo == 'm' ){
    varones++;
}

}

promedio = suma / 5;
}

alert("a) El promedio de las notas totales: " + promedio
+ "\nb) La nota más baja: " + notaBaja + " sexo: " + sexoBajo
+ "\nc) La cantidad de varones que su nota haya sido mayor o igual a 6: " + contadorV6)
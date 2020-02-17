/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

var tempF;
var tempC;
function FahrenheitCentigrados () 
{
tempF = parseInt(document.getElementById("Temperatura").value);
tempC = (tempF - 32) * (5/9);
alert(tempF + " Fahrenheit son " + tempC + " centigrados.");
}

function CentigradosFahrenheit () 
{
    tempC = parseInt(document.getElementById("Temperatura").value);
    tempF = tempC * 9/5 + 32;
    alert(tempC + " centigrados son " + tempF + " Fahrenheit.");
}

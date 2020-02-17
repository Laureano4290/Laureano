/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo;
var ancho;
var radio;
var perimetro;
var alambre;
var cemento;
var cal;
var area;
function Rectangulo () 
{
 largo = parseInt(document.getElementById("Largo").value);
 ancho = parseInt(document.getElementById("Ancho").value);
 perimetro = (largo + ancho)*2
 alambre = perimetro * 3
 alert("alambre: " + alambre + " rectangulo");
}
function Circulo () 
{
    radio = parseInt(document.getElementById("Radio").value);
    perimetro = radio * 6.28
    alambre = perimetro * 3
    alert ("Alambre: " + alambre + " Circular")
}
function Materiales () 
{
largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);
area = ancho * largo;
cemento = area * 2;
cal = area * 3;
alert("Cemento: " + cemento + " / Cal: " + cal);


}
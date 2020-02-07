/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe1;

importe1 = parseInt(document.getElementById("importe").value);
document.getElementById("resultado").value = importe1 - importe1/4;
}

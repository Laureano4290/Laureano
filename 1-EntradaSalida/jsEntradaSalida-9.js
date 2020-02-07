/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var importe1;

importe1 = parseInt(document.getElementById("sueldo").value);
document.getElementById("resultado").value = importe1 + importe1/10;
}

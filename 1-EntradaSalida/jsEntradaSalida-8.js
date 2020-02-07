/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero1;
var numero2;

numero1 = parseInt(document.getElementById("numeroDividendo").value);
numero2 = parseInt(document.getElementById("numeroDivisor").value);

resultado = numero1 % numero2
alert("es resto es " + resultado);
}

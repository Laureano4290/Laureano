/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var lamparas;
var marca;
var descuento = 1;
var final;
var impuesto;
function CalcularPrecio () 
{
     lamparas = parseInt(document.getElementById("Cantidad").value);
     marca = document.getElementById("Marca").value;

if ( lamparas >= 6) {
    descuento = 0.50
} else if (lamparas == 5){
    if (marca =="ArgentinaLuz"){
        descuento = 0.40;
    }else{
        descuento = 0.30;
    }
    
}else if (lamparas == 4){
    switch(marca){
        case "ArgentinaLuz":
        case "FelipeLamparas":
            descuento = 0.25  ; 
            break;
        default:
            descuento = 0.2;
            
    }
}else if (lamparas == 3){
    switch(marca){
        case "ArgentinaLuz":
            descuento = 0.15;
            break;
        case "FelipeLamparas":
            descuento = 0.10;
            break;
        default:
            descuento = 0.05;        
    
    }
}
final = (lamparas * 35) * descuento;
if(final > 120){
    impuesto = final/10
    final += impuesto;
    alert("IIBB / Usted pago: " + impuesto)
}
     document.getElementById("precioDescuento").value = final;
}

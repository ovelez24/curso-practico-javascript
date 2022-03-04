const precioOriginal = 120;
const descuento = 18;


//console.log({precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento});

//funcion para calcular el precio de un articulo con descuento
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/ 100;
    return precioConDescuento;
}

function onClickPriceDiscount(){
    const inpuPrice = document.getElementById("Inputprice");
    const priceValue = Inputprice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue,);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

}
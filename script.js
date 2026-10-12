import { fondoCaja, pagoCliente } from "./data.js"
//pagoCliente  es el sobre con los billetes
//calculoTotal(pagoCliente)  cómo se "cuenta el sobre"

//El programa obtiene un precio de artículo










//un importe pagado desglosado (se deben conocer las cantidades entregadas de todos los billetes y monedas)

//FUNCION QUE CALCULA EL TOTAL DE CUALQUIER DESGLOSE
function calculoTotal(desglose) {
    let sumaDinero = 0;


    desglose.forEach(pieza => {
        sumaDinero += pieza.valor * pieza.cantidad;

    });

    return sumaDinero
}

function sumarACaja(desglose) {

    desglose.forEach((pieza, posicion) => {
        fondoCaja[posicion].cantidad += pieza.cantidad

    })
};

let precioProducto = 2000;

//CALCULO EL TOTAL DEL PAGO DEL CLIENTE PARA QUE ME DEVUELVA LA DIFERENCIA 
let diferenciaPagoCliente = calculoTotal(pagoCliente) - precioProducto;

//responderá si no hay cambio
//si está justo o si se devuelve cambio
if (diferenciaPagoCliente < 0) {
    // sale el signo de - a la hora de decir lo que le falta pagar al cliente 
    //lo podemos solucionar con Math.abs(numero) (Math.abs(-7) da 7)
    console.log(`Faltan ${Math.abs(diferenciaPagoCliente / 100)}`);

} else if (diferenciaPagoCliente === 0) {
    console.log("Pago completo");
    //SUMAMOS A LA CAJA EL PAGO DEL CLIENTE
    sumarACaja(pagoCliente);
}
else {
    console.log(`Tu cambio es de ${diferenciaPagoCliente / 100}`);

}


console.log(calculoTotal(fondoCaja))





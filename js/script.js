import { fondoCaja, pagoCliente } from "./data.js"
//pagoCliente  es el sobre con los billetes
//calculoTotal(pagoCliente)  cómo se "cuenta el sobre"

//El programa obtiene un precio de artículo










//un importe pagado desglosado (se deben conocer las cantidades entregadas de todos los billetes y monedas)

//FUNCION QUE CALCULA EL TOTAL DE CUALQUIER DESGLOSE (Total del dinero que tengo en la caja)
function calculoTotal(desglose) {
    let sumaDinero = 0;


    desglose.forEach(pieza => {
        sumaDinero += pieza.valor * pieza.cantidad;

    });

    return sumaDinero
}


//************************************************************************** */
function sumarACaja(desglose) {

    desglose.forEach((pieza, posicion) => {
        fondoCaja[posicion].cantidad += pieza.cantidad

    })
};

console.log(calculoTotal(fondoCaja));



//************************************************************************** */
function restarACaja(desglose) {

    desglose.forEach((pieza, posicion) => {
        fondoCaja[posicion].cantidad -= pieza.cantidad

    })
};



//************************************************************************** */
function cambioADevolver(cambio) {

    let listaRestarACaja = [];

    /*Monedas
    1. ¿cuántas caben?
    2. ¿cuántas doy?
    3. ¿cuánto dinero es?
    4. ¿cuánto me queda?
    */
    fondoCaja.forEach((pieza) => {
        let caben = Math.floor(cambio / pieza.valor); //¿cuántos billetes de  pieza.valor caben en el cambio?" Divido y corto los decimales, y sale pieza.cantidad.
        let monedas = Math.min(caben, pieza.cantidad);//entre los que caben (caben) y los que tengo (pieza.cantidad), me quedo con el menor", y sale pieza.cantidad.
        listaRestarACaja.push({ valor: pieza.valor, cantidad: monedas })
        let dineroQueHeDado = monedas * pieza.valor;
        cambio -= dineroQueHeDado

    })

    /* cambio es el papel donde voy tachando: al terminar el recorrido,
    - Con 1300: debía 700, di 500 + 200 y queda 0. Cambio completo.
    - Con 1940: debía 60 céntimos. De 50 y de 20 no tengo monedas. Di una de 10,
    dos de 5, tres de 2 y una de 1, que suman 27. 
    Se me acabaron las monedas pequeñas y todavía debo 33.
    Así que ese número me dice si la venta se puede hacer: si es 0, 
    todo bien; si queda algo, la caja no puede dar el cambio.
    */

    if (cambio === 0) {
        console.log((`Tu cambio es de ${diferenciaPagoCliente / 100}€`));
        listaRestarACaja.forEach(pieza => {
            if (pieza.cantidad > 0) {
                console.log(`${pieza.cantidad} de ${pieza.valor / 100}€`);
            }

        })
        restarACaja(listaRestarACaja)//resta a la caja lo que le he estado agregando a la lista si todo es okay
        sumarACaja(pagoCliente)

    } else {
        console.log("Fondos insuficientes en la caja");
    }

    console.log(cambio);
}




//************************************************************************** */
let precioProducto = 1940;

//CALCULO EL TOTAL DEL PAGO DEL CLIENTE PARA QUE ME DEVUELVA LA DIFERENCIA 
let diferenciaPagoCliente = calculoTotal(pagoCliente) - precioProducto;

//responderá si no hay cambio
//si está justo o si se devuelve cambio
if (diferenciaPagoCliente < 0) {
    // sale el signo de - a la hora de decir lo que le falta pagar al cliente 
    //lo podemos solucionar con Math.abs(numero) (Math.abs(-7) da 7)
    console.log(`Faltan ${Math.abs(diferenciaPagoCliente / 100)}€`);

} else if (diferenciaPagoCliente === 0) {
    console.log("Pago completo");
    //SUMAMOS A LA CAJA EL PAGO DEL CLIENTE
    sumarACaja(pagoCliente);
} else {
    cambioADevolver(diferenciaPagoCliente)
}

console.log("Estado de la caja");
 fondoCaja.forEach(pieza => {
                console.log(`${pieza.cantidad} de ${pieza.valor / 100}€`);

        })
        
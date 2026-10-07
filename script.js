import {fondoCaja,pagoCliente} from "./data.js"

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

console.log(calculoTotal(pagoCliente))






//responderá si no hay cambio
//si está justo o si se devuelve cambio
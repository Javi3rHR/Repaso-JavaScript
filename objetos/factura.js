const IVA_GENERAL = 1.21;
const IVA_REDUCIDO = 1.10;

// Para utilizar 'this' es obligatorio usar function para hacer referencia al propio objeto (no se puedo con arrow).

// Delegamos la responsabilidad a cada objeto utilizando el this.
// Podriamos calcular todo directamente desde factura, pero no es correcto.

const item1 = {
    precio: 15,
    cantidad: 2,
    impuestos: IVA_GENERAL,
    calcularTotal: function () {
        return this.precio * this.cantidad * this.impuestos
    }

    /* No apunta al objeto, sino a window
    calcularTotal: () => {
        console.log(this)
    } */
}

const item2 = {
    precio: 25,
    cantidad: 3,
    impuestos: IVA_REDUCIDO,
    calcularTotal: function () {
        return this.precio * this.cantidad * this.impuestos
    }
}

// item 3 e item 2 son exactamente el mismo objeto
/* Al cambiar uno se cambia otro, ya que al igualarlos apuntan a la misma referencia. */

const item3 = item2;
item3.precio = 23;

console.log(item3);
console.log(item2);

// OBJETOS, FUNCIONES, DERIVADOS SE ALMACENAN COMO REFERENCIA
// LOS 5 PRIMITIVOS SE ALMACENAN COMO VALOR (sí se pueden modificar)

/*
const factura = {
    primerItem: item1,
    primerItem: item2
}
*/

// ATAJO para objeto de objetos
// 2 opciones. La primera no hace referencia a items de factura, por lo que no se le da uso.

/*
const factura = {
    // item1,
    // item2,
    calcularTotal: () => {
        return item1.calcularTotal() + item2.calcularTotal();
    }
} */

// Al añadir el 'this', cambiamos la arrow fc porque daria error
const factura = {
    item1,
    item2,
    calcularTotal: function (descuento) { // Añadimos descuento
        return (this.item1.calcularTotal() + this.item2.calcularTotal()) * descuento;
    }
}

console.log("Factura total: " + factura.calcularTotal(0.8))


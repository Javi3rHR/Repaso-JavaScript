const facturas = [
    {
        precio: 23,
        cantidad: 1,
    },
    {
        precio: 19,
        cantidad: 2,
    },
    {
        precio: 14,
        cantidad: 4,
    },
    {
        precio: 22,
        cantidad: 1,
    },
]

// Devolver un array que incluya el precio con iva para cada elemento

const IVA = 1.21;

const totalFactura = facturas.map(i => i.precio * i.cantidad * IVA);

// El nombre de los parametros en forEach es indiferente, solo importa el orden. (i, elemento, indice, index...) (elemento, indice)

totalFactura.forEach((i, index)=>console.log("elemento", index, i))

console.log(totalFactura);

// Sumar elementos
let total=0;
totalFactura.forEach((i) => total += i)
console.log(total);

// FORMA OPTIMA DE SUMAR.

// Array.reduce transforma todo el array en un unico valor. funciona como un acumulador con la operación que le indiquemos.

total = totalFactura.reduce((a,b) => a+b);
console.log(total)

/* reduce no puede utilizarse con objetos directamente, lo que haría es encadenar los objetos. Se soluciona utilizando un map. */

total = facturas.map(i => i.precio * i.cantidad).reduce((a,b)=>{
    console.log(a,b)
    return a+b;
}) // Una vez tenemos el valor simple podemos aplicar reduce a la raiz resultante.


/* forEach
El valor que devolvamos en el array no tiene por qué ser del mismo tipo.
Ejemplos. Si recivimos un objeto podemos devolver un booleano.

Podemos pedir que nos devuelva una lista con los >5 y devolver array [true,false]
*/


// METODO FILTER. misma estructura que map y forEach (elemento, indice, array)
// cuando solo tenemos el elemento lo llamamos 'i'
total = facturas.map(i => i.precio * i.cantidad).filter(i => i>30)
// filtra los que son >30




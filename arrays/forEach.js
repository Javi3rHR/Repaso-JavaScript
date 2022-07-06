/* forEach nos permite Realizar 1 operacion para cada elemento del array */
/*
Recibimos un callback/funcion con 3 parametros
const foreachFunction = (elemento, indice, array) => {}
*/


const miArray = ['1', '2', '3', '4', '5', '6']

// Se declara la función directamente. No es necesario guardar en variable.
// El nombre de los parametros es indiferente, solo importa el orden. (i, indice, index...)
miArray.forEach((elem, index, array) => {
    console.log(elem, index, array);
})

// Realiza una acción sin tocar el array

/*
1(elemento) 0(indice) [ '1', '2', '3', '4', '5', '6' ]
2 1 [ '1', '2', '3', '4', '5', '6' ]
3 2 [ '1', '2', '3', '4', '5', '6' ]
4 3 [ '1', '2', '3', '4', '5', '6' ]
5 4 [ '1', '2', '3', '4', '5', '6' ]
6 5 [ '1', '2', '3', '4', '5', '6' ]
*/

miArray.forEach((elem, index) => {
    console.log(elem * index);
})

/* mapear array: realizar acción sobre elementos y crear nuevo array con el resultado */

const miArray2 = [1, 2, 3, 4, 5, 6]

// const miArray3 = miArray2.map(function (i) {return i+3})
const miArray3 = miArray2.map(i => i+3)
console.log(miArray3);

/*
forEach realiza una accion pero no devuelve nada. Si intentamos un
const miArray = forEach, devuelve undefined.

map realiza una transformacion y nos devuelve un elemento modificado, siempre tendra el mismo numero de elementos que el array original, a diferencia de forEach.
*/


const miArray = [
    'Hola',
    5,
    true,
    null,
    undefined,
    { a: 2, b: 3},
    () => 'Hola',
    [1,2,3]
]

// Se recomienda que los arrays sean del mismo tipo

miArray[4] = 'Javier';
console.log(miArray)
console.log(typeof miArray)
// Es un objeto, por lo que tiene sus propiedades y metodos.

const miArray2 = [1, 2, 3, 4, 5 , 6]

console.log(miArray2.length) // numero de elementos (se puede usar para truncar) miArray2.length = 2

// Para añadir elementos al final
miArray2.push(7)
console.log(miArray2);

// Extraer (elimina y devuelve) el ultimo elemento
const ultimoElemento = miArray2.pop();
console.log(ultimoElemento); // 7

// Extrae el primer elemento
const primerElemento = miArray2.shift();
console.log(primerElemento); // 1

// Añadir elemento al principio
miArray2.unshift(0)
console.log(miArray2);

// Añadir elemento dentro del arrays
miArray2.splice(3, 2, 'Insertado1', 'Insertado2')
console.log(miArray2); //Inserta en la posicion 3, elimina 2 elementos.


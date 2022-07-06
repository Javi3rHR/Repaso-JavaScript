/*
console.log('Antes')
throw 'Error'; // Al lanzar un error rompemos el flujo principal
console.log('Despues') // No se puede ejecutar
*/

// Fabrica de piezas con algunas defectuosas

const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

// Me interesa saber el numero de errores y de aciertos de la cadena

let correctas = 0;
let defectuosas = 0;


/* Si random < 0.25 tenemos un error(true), else (false)*/
const comprobarSiEsDefectuosa = () => Math.random() < PROB_ERROR;
    // if (Math.random() < PROB_ERROR) return true;
    // return false;

for (let i = 1; i <= NUM_PIEZAS; i++) {
    const esDefectuosa = comprobarSiEsDefectuosa();

    try{
        if (esDefectuosa) throw ` -> Pieza ${i} defectuosa`
        // Una vez salta el error termina el proceso
        // Para controlar esta excepcion necesitamos un bloque TRY CATCH
        // console.log(`Pieza ${i} fabricada`)
        correctas++
    } catch(excepcion){ // excepcion recibe el throw
        defectuosas++;
        // console.error(excepcion);
    } finally{ // Se realiza tanto si salta el TRY como el CATH
        console.log(`Fabricando pieza ${i}...`)
    }

    /* Ejemplo finally. Hago una conexion a base de datos y realizo una llamada, funcione o no funcione la llamada quiero cerrar la conexión con la base de datos */
}

// Resumen

console.log(`Fabricadas: ${NUM_PIEZAS}`)
console.log(`-> correctas: ${correctas}`)
console.log(`-> defectuosas: ${defectuosas}`)



/* Controlar una excepcion no implica que pocamos seguir reanudando nuestro código. Una vez que se rompe el TRY, todo lo que hay en el CATCH es lo que se va a ejecutar.

Una vez que se rompe queda roto. Podríamos volver volver a iniciar el bucle manualmente (i<10).

*/
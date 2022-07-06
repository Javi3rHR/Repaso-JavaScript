const NUM_PIEZAS = 5;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;


/* Si random < 0.25 tenemos un error(true), else (false)*/
const comprobarSiEsDefectuosa = () => Math.random() < PROB_ERROR;

// function lanzarloDeVerdad(){
//     throw new Error("Pieza defectuosa");
// }

// function lanzarError() {
//     lanzarloDeVerdad(); //Seguimos recorrido con stack.
// }

for (let i = 1; i <= NUM_PIEZAS; i++) {
    const esDefectuosa = comprobarSiEsDefectuosa();

    try {
        /* la clase Error nos aporta información extra de donde hemos logrado obtener este error. */
        if (esDefectuosa) throw new Error("Pieza defectuosa");
        correctas++

    } catch (ex) {
        console.log(ex.message) // Indica directamente el mensaje
        console.log(ex.name) // Nombre de la clase lanzada
        console.log(ex.stack) // Donde ha dado la excepcion
        defectuosas++;
    }
}

console.log(`Fabricadas: ${NUM_PIEZAS}`)
console.log(`-> correctas: ${correctas}`)
console.log(`-> defectuosas: ${defectuosas}`)
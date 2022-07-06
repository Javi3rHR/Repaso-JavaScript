const NUM_PIEZAS = 5;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;


const comprobarSiEsDefectuosa = () => Math.random() < PROB_ERROR;


/* CREAR UN ERROR PERSONALIZADO */
class ErrorPiezaDefectuosa extends Error {
    // constructor(num){
    //     super(`Pieza ${num} defectuosa`)
    // }
}
class ErrorCadenaParada extends Error {}

// Si no reescribimnos nada, aprovechamos el del constructor.


for (let i = 1; i <= NUM_PIEZAS; i++) {
    const esDefectuosa = comprobarSiEsDefectuosa();

    try{ // Captura el error
        try {
            if (i === 2) throw new ErrorCadenaParada("Se paró");
            if (esDefectuosa) throw new ErrorPiezaDefectuosa("Pieza defectuosa");
            correctas++
        } catch (ex) {
            if (ex instanceof ErrorCadenaParada) {
                console.log("Se ha parado la cadena");
                throw ex; // Se para la cadena y lanza un error
            }
            if (ex instanceof ErrorPiezaDefectuosa) {
                console.log(`La pieza ${i} es defectuosa`);
            }
            defectuosas++;
        }
    } catch (ex){ // Si se para la cadena
        console.log("Hemos llegado aquí");
        // intentarArreglarLaCadena
    }

}
console.log(`Fabricadas: ${NUM_PIEZAS}`)
console.log(`-> correctas: ${correctas}`)
console.log(`-> defectuosas: ${defectuosas}`)
// Tenemos demasiada libertad, por lo que debemos restringirla nosotros
class Curso {
    /* Con this nos referimos al objeto que se ha creado */
    /* Buena practica: Inicializar en el constructor todos los atributos de la clase */
    // 1 clase solo puede tener 1 constructor
    constructor(titulo, dificultad) { // Se ejecuta al llamar 1 objeto
        this._titulo = titulo;
        this._dificultad = dificultad; // _dificultad indicativo de privada

        /* Puedo inicializar tantos atributos vacios como quiera, no hay minimo ni maximo, igual que a la hora de llamarlos */
        this._lecciones = []; // No tendrá lecciones al comenzar curso.
    }

    // GETTERS Y SETTERS.

    /* Podriamos emitir uno de los dos,
    convirtiendolo en READONLY o WRITEONLY */

    get dificultad(){
        console.log('GETTER')
        return this._dificultad;
    }

    set dificultad(nuevaDificultad){
        console.log('SETTER')
        if(nuevaDificultad >=0 && nuevaDificultad <=5){
            this._dificultad = nuevaDificultad;
        }else{
            // throw new error (habria que hacer)
            console.log("No hago nada")
        }

    }

    // METODOS DE LA CLASE
    agregarLeccion(Leccion) {
        this._lecciones.push(Leccion);
    }
    eliminarUltimaLeccion() {
        this._lecciones.pop();
    }
}

const cursoJS = new Curso('Javascript', 1);
/* Malas practicas. Debemos poner nosotros los limites.

 cursoJS.loquemedelagana = "loquesea";
 cursoJS.eliminarUltimaLeccion = () => console.log('no hago nada');
 cursoJS.eliminarUltimaLeccion();

No debemos modificar los metodos, ni inventarnos atributos que no existan.
Si queremos cambiar algo cambiamos la plantilla.
 */

const cursoTS = new Curso('Typescript');

cursoTS.dificultad = 3;
console.log(cursoTS.dificultad);

cursoTS.dificultad = 7; // Al ser mayor que 5 no hace nada
console.log(cursoTS.dificultad);

curso.dificultad = 7; // Al no ser realmente privada podriamos hacer esto
// Pero debemos dar por hecho que lo es al utilizar '_'.
// No existen las privadas


cursoJS.agregarLeccion('Intro a JS');
cursoJS.agregarLeccion('Variables');
cursoJS.agregarLeccion('Tipos de datos');

console.log(cursoJS, cursoTS);
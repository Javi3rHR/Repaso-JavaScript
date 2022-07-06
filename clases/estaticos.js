
/* VARIABLES ESTATICAS. Atributos y metodos estaticos
Son de la propia clase, no son de ningun objeto.

Relacionados con los objetos pero no son para ninguno en concreto.
*/

class Curso{
    constructor(titulo, dificultad){
        this.titulo = titulo;
        this.dificultad = dificultad;
        this.lecciones = [];
    }

    /* URL base para todos los cursos. Si no fuera estatica cada curso podria tener una URL distinta.*/

    static BASE_URL = "google.com";

    static saludar() {
        console.log("Saludo");
    }

    agregarLeccion(Leccion){
        this.lecciones.push(Leccion);
    }

    eliminarUltimaLeccion(){
        this.lecciones.pop();
    }
}

const cursoJS = new Curso("JS", 1);

console.log(cursoJS); // En el objeto no aparece la STATIC

console.log(Curso.BASE_URL); // Hacemos referencia a LA CLASE


/* EJEMPLOS REALISTA

Con Date.now calculamos el momento actual
new Date() instancia un objeto fecha

Metodos estaticosd e la clase Number:
Number.EPSILON
Number.MAX_SAFE_INTEGER
Number.MAX_VALUE

*/

// Class Usuario extends Object

// PADRE

class Usuario {
    constructor(nombre, email, password){
        // console.log("Constructor de Usuario")
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }

    saludo(){
        console.log(`Hola soy ${this.nombre}`)
    }

    login(email, password){
        if (this.email === email && this.password === password) return true;
        return false; // else

        // return this.email === email && this.password === password
    }
}


// HIJO

// Solo se puede extender una clase
class Alumno extends Usuario {

    /* Super me permite llamar a cualquier metodo de la calse que hereda. */

    constructor(nombre, email, password) {
        // llama al constructor que hereda
        super(nombre, email, password);

        this.activo = false;
        this.cursos = [];
    }

    activar(){
        this.activo = true;
    }

    login(email, password){
        // Si está activo evalua email y password
        if(this.activo) return super.login(email,password);
        /* else (opcional) */ return false;

        /* Otra forma:
        if(!this.activo) return false;
        return super.login(email,password); */
    }

}

const javier = new Usuario('Javier', 'javier@email.com', 'javier123');
const jose = new Alumno('Jose', 'jose@email.com', 'jose123');

/* instanceof nos sirve para comparar de que tipo es un objeto/de que clase parte. Es un operador que nos devuelve true o false. */

// Es javier un usuario?
console.log(javier instanceof Object); // true
console.log(javier instanceof Usuario); // true
console.log(javier instanceof Alumno); // false

// Es jose un alumno?
console.log(jose instanceof Object); // true
console.log(jose instanceof Usuario); // true
console.log(jose instanceof Alumno); // true


console.log([] instanceof Object); // true
// Todos los objetos son instancia de Object




// Todos los objetos heredan de: Object
// Prototype es donde se almacenan las funciones
// Todas las clases deben tener un constructor aunque no lo veas.
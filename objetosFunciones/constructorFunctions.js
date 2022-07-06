function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.caminar = function(){
        console.log('caminar');
    };
}

const Javier = new Persona('Javier', 19);
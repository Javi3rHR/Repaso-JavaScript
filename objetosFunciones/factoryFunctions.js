function crearPersonas(nombre, edad){
    return { // es lo mismo que definir la variable y devolverla
        nombre, // nombre = nombre
        edad,
        caminar(){
            console.log(this.nombre, 'estoy caminando')
        },
        saltar(){
            console.log('estoy saltando', this.edad)
        }
    }

}

let Manuel = crearPersonas()
console.log(Manuel)
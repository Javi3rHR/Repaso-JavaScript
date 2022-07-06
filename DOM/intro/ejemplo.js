console.log(document); // raiz de mi pagina web

// Normalmente no me interesa tener acceso a todo.
// Document nos permite filtrar las etiquetas que me interesan (por id, clases, etc...)


/* SELECTORES */


// Recoge el primer elemento con ese id (no puede haber 2id iguales)
console.log(document.getElementById('cabecera'));

// Me devuelve un listado de todos los elementos de mi DOM con esa clase
console.log(document.getElementsByClassName('border-grey'))

// Si llamo a un id que no existe me devuelve null.
// Si llamo a una clase qeu no existe me devuelve una lista vacia.

// Devuelve un listado con las etiquetas
console.log(document.getElementsByTagName('a'))

// Devuelve listado de elementos con el name
console.log(document.getElementsByName('header'))


/* SELECTORES QUERY */


// Nos permite mas posibilidades, funciona como un selector de CSS.

// Devuelve el primer elemento de lo que llamemos
console.log(document.querySelector("li")) // por tag
console.log(document.querySelector(".li")) // por clase
console.log(document.querySelector("#li")) // por id
console.log(document.querySelector("[name=cabecera]")) // por name


// Devuelve un listado de lo que llamemos
console.log(document.querySelectorAll("#header"))
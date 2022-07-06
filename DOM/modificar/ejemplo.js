/* Crear elementos o nodos para insertar luego en nuestro DOM */

// Crea un elemento
const titulo2 = document.createElement('h2');

// Crear un texto
const textoTitulo2 = document.createTextNode('Nuevo titulo')

// Crear un comentario
const comentario = document.createComment('Creando un comentario')



/* Copiar y modificar elemento existente */

const articulo = document.querySelector('article');
// Si pongo true, clona también sus hijos, por defecto es false.

const articulo2 = articulo.cloneNode(true);
// Puedo modificar la copia sin afectar al original
// De momento solo existe en memoria, habría que insertar el elemento.
// Consola -> articulo.isConected -> Si es true, el elemento está insertado en el DOM

// Elegimos el padre para insertar el elemento

const section = document.getElementById('section');

// Insertar elemento

// Añade el elemento nodo que le pasamos como parametro, como ultimo hijo.
section.appendChild(articulo2);

// Me permite elegir en que posicion insertar elemento
section.insertAdjacentElement('beforebegin', articulo2);

// POSICIONES: 'beforebegin' 'beforeend' 'afterbegin' 'afterend'


/* Insertar texto sin usar un nodo de texto */
section.insertAdjacentText('beforeend', 'Aqui acaba la seccion')

/* insertar codigo html como un string */
section.insertAdjacentHTML('beforeend', '<h3>Esto es un titulo</h3>')

/* Eliminar un nodo de nuestro DOM */
section.remove();



/* Remplazar el contenido de un elemento */
section.innerHTML = '<h2>Nuevo titulo de la seccion</h2>';
// Tambien tenemos la opcion de remplazar todo el html, no solo lo que hay dentro.
section.outerHTML
// Me devuelve la seccion y lo que hay dentro, con innerHTML, solo lo que hay dentro.


section.children[0].textContent = 'Otro titulo mas'
// sustituye el titulo h2 que está dentro de mi seccion



/* Modificar propiedades de un elemento */

section.getAttribute('nombre')

section.setAttribute('nombre', 'otrovalor')


/* MODIFICAR CSS */

section.classList // Devuelve listado de las clases
section.className // Devuelve el string de la clase

section.className += 'nuevaClaseCss' // no se suele utilizar para modificar
section.classList.add('nuevaClase') // optimo para crear nueva clase
section.classList.remove('nuevaClase') //eliminamos la clase
section.classList.toggle('nuevaClase')
// toggle (como interruptor) -> Si la tiene la quita, y si no la tiene la pone.

// tambien se puede remplazar para evitar problemas por cascadada

// Remplaza la clase
box.classList.replace('green', 'red')


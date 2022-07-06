const form = document.querySelector("#formulario");

const enviarFormulario = (evento) => {
    // para que el formulario no haga lo que tiene predeterminado (reiniciar la pagina y enviar el formulario por ejemplo)
    event.preventDefault();

    const {name, email, password} = event.target;

    console.log(name.value, email.value, password.value);

    if(name.value.length ===0) alert("El nombre no es valido");
}

form(addEventListener("submit", enviarFormulario));



const section = document.querySelector(#section);
const titulo2 = document.querySelector(#titulo2);

titulo2.addEventListener("click", (event) => {
    console.log(event.bubbles, event.cancelBubble)
    event.stopPropagation();
    console.log(event.bubbles, event.cancelBubble)
    concole.log('Click en el titulo');
});

section.addEventListener("click", () => {
    console.log("click en el seccion");
});

// forzar un evento que

button.click()
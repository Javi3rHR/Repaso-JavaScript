let array = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

window.onload = function () {
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth() + 1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    var ano_validez = fecha.getFullYear() + 10;
    document.getElementById('fechaActual').value = ano + "-" + mes + "-" + dia;
    document.getElementById('validez').value = ano_validez + "-" + mes + "-" + dia;
    //Tranformo en mayusculas
    document.getElementById("nombre_expedir").onkeyup;
    document.getElementById("apellidos").onkeyup;
    document.getElementById("boton").addEventListener("click", mostrar);

    document.getElementById("comprobar_dni").style.display = "none";
    document.getElementById("expedir_dni").style.display = "none";
    document.getElementById("contraseña").addEventListener("change", cambio);
    document.getElementById("dni").addEventListener("change", expedir);
    document.getElementById("check").addEventListener("change", mostrarEmail);
    document.getElementById("boton").disabled = true;
    document.getElementById("boton2").addEventListener("click", comprobarDni);
    document.getElementById("boton3").addEventListener("click", resumen);
    document.getElementById("email").style.display = "none";
}


function mostrar() {

    if (document.getElementById("seleccion").value == "comprobar") {
        document.getElementById("expedir_dni").style.display = "none";
        document.getElementById("resumen").style.display = "none";
        document.getElementById("comprobar_dni").style.display = "";

    } else if (document.getElementById("seleccion").value == "expedir") {
        document.getElementById("comprobar_dni").style.display = "none";
        //document.getElementById("numeros").addEventListener("click", expedir);
        document.getElementById("expedir_dni").style.display = "";
    }
}

function comprobarNum(numero) {
    comprobar = numero % 23;
    return comprobar;
}

function comprobarDni() {
    document.getElementById("expedir_dni").style.display = "none";
    numero = comprobarNum(document.getElementById("comprobar_numero").value);

    if (document.getElementById("comprobar_letra").value == array[numero]) {
        alert("Esta Bien");
    }
}

function expedir() {
    numero = comprobarNum(document.getElementById("dni").value)
    document.getElementById("letra").value = array[numero];
}

function cambio() {
    if (document.getElementById("nombre").value == "DWEC" &&
        document.getElementById("contraseña").value == "202122") {
        document.getElementById("boton").disabled = false;
    } else {
        document.getElementById("boton").disabled = true;
    }
}

function mostrarEmail() {
    if (document.getElementById("check").checked) {
        document.getElementById("email").style.display = "";
    } else {
        document.getElementById("email").style.display = "none";
    }
}

function resumen() {
    for (let i of document.getElementsByName("sexo")) {
        if (i.checked) sexo = i.value;
    }

    document.getElementById("resumen").innerHTML = "";
    document.getElementById("resumen").innerHTML += '<p>Su nombre: ' + document.getElementById("nombre_expedir").value + '</p>';
    document.getElementById("resumen").innerHTML += '<p>Sus Apellidos: ' + document.getElementById("apellidos").value + '</p>';
    document.getElementById("resumen").innerHTML += '<p>Su sexo: ' + sexo + '</p>';
    document.getElementById("resumen").innerHTML += '<p>Su nacionalidad: ' + document.getElementById("seleccion1").options[document.getElementById("seleccion1").selectedIndex].text + '</p>';
    document.getElementById("resumen").innerHTML += '<p>Su fecha de nacimiento: ' + document.getElementById("nacimiento").value + '</p>';
    document.getElementById("resumen").innerHTML += '<p>Su fecha de expedicion: ' + document.getElementById("fechaActual").value + '</p>';
    document.getElementById("resumen").innerHTML += '<p>Su fecha de validez: ' + document.getElementById("validez").value + '</p>';
    document.getElementById("resumen").innerHTML += '<p>Su numero de DNI: ' + document.getElementById("dni").value + '</p>';
    document.getElementById("resumen").innerHTML += '<p>Su letra del DNI: ' + document.getElementById("letra").value + '</p>';
}
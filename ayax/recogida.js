window.onload = function () {
    document.getElementById("cargar").addEventListener("click", enviar);
}

function enviar() {
    let path = document.getElementById("path").value;
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {

        if (xhr.status === 200 && xhr.readyState === 4) {
            let contenido = "<h3>Datos recibidos de: " + xhr.responseURL + "</h3>";
            contenido += "<p>" + xhr.responseText + "</p>";
            document.getElementById("contenido").innerHTML = contenido;
        }
    });

    /*------GET---------
    //xhr.open("GET",path+"?lat="+Math.random());
    //xhr.send();
    ---------------*/
    xhr.open("POST", path);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("lat=" + Math.random());
}
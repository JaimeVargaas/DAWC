document.getElementById("instPalabra").onclick = () => {
    let palabra = document.getElementById("palabra");
    let regExp = new regExp("[A-Za-z]{1,}","ig")
}

function ocultarPalabra() {
    let palabraOculta = "*********";
    let boton = document.getElementById("ocultar");
    if(palabra.style.display=="inline-block") { 
        palabra.style.display = "none";
        boton.innerText="Mostrar palabra";
    }
    else {
        palabra.style.display = "inlin";
        boton.innerText="Ocultar palabra";
    }
}
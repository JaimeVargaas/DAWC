// variables globales para que se pueda acceder desde todas las funciones
let boton = document.getElementById("ocultar");
let juegoIniciado = false;
let guiones = [];
let h3Guiones = "";
let cadenaGuiones = "";
let regExp = /^[A-Za-z]+$/i;
let contFallos = 0;
let fallos;
let inputLetra;
let botonLetra;
let empieza;
let cont;
let contTexto;
let intervalo;
let arrayFallos = [];
let letrasFalladas;
let jugado = [];
let mostrarJuegos;

document.getElementById("instPalabra").onclick = () => {
    // si juego esta en false se juega y si esta en true da error
    if (!juegoIniciado)validarPalabra();
    else {
        document.getElementById("error").innerText = "El juego ya está iniciado";
    }
}

document.getElementById("ocultar").onclick = () => {
    ocultarPalabra();
}


// Funcion para validar la palabra
function validarPalabra() {
    let palabra = document.getElementById("palabra");

    if (!regExp.test(palabra.value)) document.getElementById("error").innerText = "Palabra mal introducida, solo se admiten letras mayúsculas o minúsculas";
    else {
        palabra.disabled = true;
        jugar();
    }
}

// funcion que inicia el juego
function jugar() {
    // cuando se inicia el juego se pone en true para que no se pueda jugar dos veces
    juegoIniciado = true;

    document.getElementById("error").innerText = "";
    let palabra = document.getElementById("palabra").value.toLowerCase();
    cont = contador();
    empieza =createNode("h2", "Empieza el juego");
    document.body.appendChild(empieza);
    contTexto = createNode("h4", "Contador: " + cont);
    document.body.appendChild(contTexto);

    let conth4 = document.getElementsByTagName("h4");

    intervalo = setInterval(function () {
        cont--;
        conth4[0].innerText = "Contador: " + cont;
        noTime();
    }, 1000);

    cadenaGuiones = "";
    // Relleno el array de guiones con _ y luego lo imprimo
    for (let i = 0; i <= palabra.length - 1; i++) {
        guiones[i] = "_";
        cadenaGuiones += guiones[i] + " ";
    }
    h3Guiones = document.body.appendChild(createNode("h3", cadenaGuiones));

    letra();

    let intentos = ((document.getElementById("palabra").value.length)/2)+1;
    fallos = document.body.appendChild(createNode("h3", "Intentos fallidos: " + contFallos + " de " + parseInt(intentos)));
    letrasFalladas = document.body.appendChild(createNode("p", "Letras falladas:"))
}

// el juego termina cuando te quedas sin tiempo
function noTime() {
    if (cont == 0) {
        clearInterval(intervalo);
        empieza.innerHTML = "¡Has perdido!<br> Se ha acabado el tiempo";
        inputLetra.disabled = true;
        botonLetra.disabled = true;
        cont = 0;
        contTexto.innerText = "Contador: " + cont;
        let palabra = document.getElementById("palabra").value.toLowerCase();

        let jugarNuevo = document.body.appendChild(createNode("button", "Jugar de nuevo"));
        let contSegundos = contador();
        jugado.push("Palabra: " + palabra + ", no acertado, "+ (contSegundos) + " segundos");
        jugarNuevo.onclick = () => {
            document.body.removeChild(empieza);
            document.body.removeChild(inputLetra);
            document.body.removeChild(fallos);
            document.body.removeChild(letrasFalladas);
            document.body.removeChild(contTexto);
            document.body.removeChild(h3Guiones);
            document.body.removeChild(jugarNuevo);
            document.body.removeChild(botonLetra);
            guiones = [];
            palabra.value="";
            document.getElementById("palabra").disabled=false;
            juegoIniciado=false;
            mostrarTodos();
        }
    }
}

// Funcion que valida si se ha introducido una letra
function letra() {
    inputLetra = document.body.appendChild(createNode("input"));
    botonLetra = document.body.appendChild(createNode("button", "Comprobar letra"));

    botonLetra.onclick = () => {
        if (inputLetra.value.toLowerCase().length > 1) {
            document.getElementById("error").innerText = "Solo puedes comprobar letras";
            inputLetra.value = "";
        }
        else if (!regExp.test(inputLetra.value)) { 
            document.getElementById("error").innerText = "Solo puedes comprobar letras";
            inputLetra.value = "";
        }
        else {
            comprLetra(inputLetra.value.toLowerCase());
            inputLetra.value = "";
            document.getElementById("error").innerText = "";
            inputLetra.focus();
        }
    }
}

// funcion que comprueba si existe la letra introducida
function comprLetra(input) {
    let palabra = document.getElementById("palabra").value.toLowerCase();
    let array = palabra.split("");
    let intentos = ((document.getElementById("palabra").value.length)/2)+1;

    if (array.includes(input)) {
        cadenaGuiones = "";
        // cambio las _ por la letra acertada en el array guiones y luego lo imprimo
        palabra.matchAll(input).forEach(element => {
            guiones[element.index] = input;
        });

        // vuelvo a mostrar el array guiones con la letra añadida
        for (let i = 0; i <= palabra.length - 1; i++) {
            cadenaGuiones += guiones[i] + " ";
        }
        h3Guiones.innerText = cadenaGuiones;
        ganado();
    }
    else {
        contFallos++;
        fallos.innerText = "Intentos fallidos: " + contFallos + " de " + parseInt(intentos);
        maxFallos();
        letrasFalladas.innerText = "Letras Falladas: " + fallaLetras();
    }
}

// funcion que devuelve las letras que se han fallado
function fallaLetras() {
    arrayFallos.push(inputLetra.value.toLowerCase());

    let cadenaFallos = "";
    arrayFallos.forEach(element => {
        cadenaFallos += element + " ";
    });

    return cadenaFallos;
}

// funcion que detecta cuando has ganado
function ganado() {
    if (!guiones.includes("_")) {
        inputLetra.disabled = true;
        botonLetra.disabled = true;
        empieza.innerHTML = "¡Has ganado!<br> Has acertado la palabra completa";
        clearInterval(intervalo);
        contTexto.innerText = "Contador: " + cont;
        let jugarNuevo = document.body.appendChild(createNode("button", "Jugar de nuevo"))
        let palabra = document.getElementById("palabra").value.toLowerCase();
        let contSegundos = contador();
        jugado.push("Palabra: " + palabra + ", acertado, "+ (contSegundos-cont) + " segundos");

        jugarNuevo.onclick = () => {
            mostrarTodos();
            document.body.removeChild(empieza);
            document.body.removeChild(inputLetra);
            document.body.removeChild(fallos);
            document.body.removeChild(letrasFalladas);
            document.body.removeChild(contTexto);
            document.body.removeChild(h3Guiones);
            document.body.removeChild(jugarNuevo);
            document.body.removeChild(botonLetra);
            guiones = [];
            palabra.value="";
            document.getElementById("palabra").disabled=false;
            juegoIniciado=false;
        }
    }
}

// si se ha llegado al numero de fallos se acaba el juego
function maxFallos() {
    let intentos = ((document.getElementById("palabra").value.length)/2)+1;
    if (contFallos == parseInt(intentos)) {
        inputLetra.disabled = true;
        botonLetra.disabled = true;
        empieza.innerHTML = "¡Has perdido!<br> Has llegado al máximo de fallos";
        cont = 0;
        clearInterval(intervalo);
        contTexto.innerText = "Contador: " + cont;

        let jugarNuevo = document.body.appendChild(createNode("button", "Jugar de nuevo"))
        let palabra = document.getElementById("palabra").value.toLowerCase();
        let contSegundos = contador();
        jugado.push("Palabra: " + palabra + ", no acertado, "+ (contSegundos-cont) + " segundos");

        jugarNuevo.onclick = () => {
            document.body.removeChild(empieza);
            document.body.removeChild(inputLetra);
            document.body.removeChild(fallos);
            document.body.removeChild(letrasFalladas);
            document.body.removeChild(contTexto);
            document.body.removeChild(h3Guiones);
            document.body.removeChild(jugarNuevo);
            document.body.removeChild(botonLetra);
            guiones = [];
            palabra.value="";
            document.getElementById("palabra").disabled=false;
            juegoIniciado=false;
            mostrarTodos();
        }
    }
}

// Funcion que calcula cuanto tiempo se tiene para adivinar
function contador() {
    let palabra = document.getElementById("palabra").value;
    cont = palabra.length * 10;

    return cont;
}

// funcion para ocultar o mostrar palabra
function ocultarPalabra() {
    let palabra = document.getElementById("palabra");
    if (palabra.type == "password") {
        palabra.type = "text";
        boton.innerText = "Ocultar"
    }
    else {
        palabra.type = "password"
        boton.innerText = "Mostrar"
    }
}

function mostrarTodos() {
    if (!mostrarJuegos) {
        mostrarJuegos = document.body.appendChild(createNode("p"));
    }
    mostrarJuegos.innerText = "";

    for(let i=0;i<jugado.length;i++) {
        let f = i+1;
        mostrarJuegos.innerText+="Juego " + f +":" + " " + jugado[i] + "\n";
    }
}

function createNode(tipoNodo, tipoTexto) {
    let nodo;
    let nodoText;

    switch (arguments.length) {
        case 0:
            throw "Se necesita al menos el tipo de elemento a crear.";
        case 1:
            nodo = document.createElement(tipoNodo);
            nodo.id = "nuevoNodo";
            break;
        case 2:
            nodo = document.createElement(tipoNodo);
            nodoText = document.createTextNode(tipoTexto);
            nodo.appendChild(nodoText);
            break;
    }

    return nodo;
}


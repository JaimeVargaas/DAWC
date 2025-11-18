let info = document.getElementById("info");

document.getElementById("opcionLista").setAttribute("placeholder","Inserta la opción de la lista");

const opciones = document.getElementsByName("opciones");

// funcion que recorre los elementos con nombre opciones y si esta marcado devuelve su valor
// document.getElementById("login").onclick = () => {
//     for(op of opciones) {
//         if(op.checked) 
//             info.innerText = op.value;
//     }
// }

document.getElementById("check").onclick = () => {
    let op = document.getElementById("opcionLista").value;
    let lista = null;

    if ((document.getElementsByTagName("ul").length > 0) && (op != "")) {
        lista = document.getElementsByTagName("ul")[0];
        lista.appendChild(createNode("li", op));
    }

    document.getElementById("opcionLista").value = "";
    document.getElementById("opcionLista").focus();
}

document.getElementById("bDelete").onclick = () => {
    let lista = document.getElementById("lista");
    // selecciona el ultimo hijo de la lista
    let lastChild = lista.getElementsByTagName("li")[lista.getElementsByTagName("li").length - 1];

    // con esta forma puedo recuperar el nodo borrado
    // if (lista.getElementsByTagName("li").length > 0) {
    //     lastChild.parentNode.removeChild(lastChild);
    // }
    if (lista.getElementsByTagName("li").length > 0) {
        lastChild.remove();
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


// MOSTRAR OCULTAR CONTRASEÑA
document.getElementById("ver").onclick = () => {

    if (document.getElementById("passwd").type == "password") {
        document.getElementById("passwd").type = "text";
        document.getElementById("ver").innerText = "Ocultar password"
    }
    else {
        document.getElementById("passwd").type = "password"
        document.getElementById("ver").innerText = "Mostrar passwd"
    }
}

// para coger los primeros li de todos los ul 
for (let elem of document.querySelectorAll("#lista li")) {
    elem.style.color = "blue";
}

let primerLI = document.querySelector("li:first-child");
let cssPrimerLI = window.getComputedStyle(primerLI);
console.dir(cssPrimerLI)


// cambiar de clasecuando se clicke
// for (let sec of document.getElementsByTagName("section"))
//     sec.onclick = changeColorComputed;
// no se le ponen parentesis en este caso porqeu quieres modificar dentro del html y no asignarselo a la variable

function changeColorComputed() {
    if (this.className == "rojo")
        this.className = "azul";
    else 
        this.className = "rojo";
}

// array de los p dentro de section
let section = document.querySelectorAll("section p");

for(let p of section) {
    p.style.opacity="0";
    p.onmouseover = function() {
        p.style.backgroundColor = "yellow";
        p.style.color="black";
        p.style.fontSize="1.5em";
         p.style.opacity="100";
    }; 
    p.onmouseout = function() {
        p.style.backgroundColor = "rgb(80, 80, 255)";
        p.style.fontSize="1em";
        p.style.opacity="0";
    }
}

// para añadir a mitad de la lista y no al final
document.getElementById("inserta").onclick = function () {
    const newNode = document.createElement("li");
    const newNodeText = document.createTextNode(document.getElementById("animal").value);
    const listaAnimales = document.getElementById("listaAnimales");
    newNode.appendChild(newNodeText);
    newNode.style.color = "red";

    // document.getElementById("listaAnimales").appendChild(newNode);

    let numAnimales = listaAnimales.querySelectorAll("li").length;
    console.log(numAnimales);

    // listaAnimales.insertBefore(newNode, listaAnimales.querySelectorAll("li")[3]);

    // listaAnimales.querySelectorAll("li")[0].before(newNode);

    let nodoEliminado = listaAnimales.replaceChild(newNode, listaAnimales.querySelectorAll("li")[3]);
    listaAnimales.appendChild(nodoEliminado);

}


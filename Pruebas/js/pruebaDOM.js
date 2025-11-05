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

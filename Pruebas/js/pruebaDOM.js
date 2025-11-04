let info = document.getElementById("info");

const opciones = document.getElementsByName("opciones");

// funcion que recorre los elementos con nombre opciones y si esta marcado devuelve su valor
document.getElementById("login").onclick = () => {
    for(op of opciones) {
        if(op.checked) 
            info.innerText = op.value;
    }
}

document.getElementById("check").onclick = () => {
    let op = document.getElementById("opcionLista").value;
    let lista = null;
    
    if ((document.getElementsByTagName("ul").length > 0) && (op != "")) {
        lista = document.getElementsByTagName("ul")[0];

        let opElement = document.createElement("li");
        let opElementText = document.createTextNode(op);

        opElement.appendChild(opElementText);
        lista.appendChild(opElement);
    }

    document.getElementById("opcionLista").value = "";
    document.getElementById("opcionLista").focus();
}




function createNode(tipoNodo, tipoTexto) {
    let nodo = createElement(tipoNodo);
    let nodoText= createTextNode(tipoTexto);
    nodo.appendChild(nodoText);

    return nodo;
}
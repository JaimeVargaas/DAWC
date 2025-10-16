let tipoCafe = document.getElementById("tipoCafe");
let cantidad = document.getElementById("cantidad");
let paraLlevar = document.getElementById("paraLlevar");

document.getElementById("procesarPedido").onclick = () => {
    let res = document.getElementById("resultado");
    let precioCafe=0;

    switch(tipoCafe.value) {
        case "solo":
            precioCafe=1.5;
            break;
        case "leche":
            precioCafe=2;
            break;
        case "capuchino":
            precioCafe=2.5;
            break;
        default:
            precioCafe=0;
    }

    let precioTotal = (precioCafe*cantidad.value);

    if(paraLlevar.checked) precioTotal+=cantidad.value*0.2;
    if(cantidad.value>=5) precioTotal=precioTotal-(precioTotal*0.1);

    let stringParaLlevar =paraLlevar.checked? "(para llevar)" : "";

    res.innerText = "Has pedido " + cantidad.value + " café(s) " + tipoCafe.value + ". " +  stringParaLlevar;
    res.innerHTML += "<br><strong>Total a pagar "+ precioTotal + " €"+"</strong>"
}
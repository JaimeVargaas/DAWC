const datosUsuarios = [
    "Nombre:  Ana García, Email: ana.garcia@example.com, FechaNac: 1995-10-25",
    "Nombre: luis pérez, Email: luisperez@dominio.net, FechaNac: 2005-01-05",
    "Nombre:  MARTA FERNÁNDEZ, Email: marta.fdez-INVALID, FechaNac: 1980-03-15", // Inválido
    "Nombre: pepe lopez, Email: pepe.lopez@example.es, FechaNac: 1978/11/02" // Formato de fecha diferente
];

const regexEmail = new RegExp("\S+@\S+\.\S+","ig"); // \S --> todo lo que no sea un espacio, una @ algo sin espacios, un punto y algo sin espacios
/********************************************************************************* */

let arrayNombres = [];
let regNombre = new RegExp("[0-9A-Za-záéíóúÁÉÍÓÚ]{1,} [0-9A-Za-záéíóúÁÉÍÓÚ]{1,}","ig")

for(let i=0;i<datosUsuarios.length;i++) {  
    arrayNombres.push(datosUsuarios[i].match(regNombre));
}


let arrayEmail = [];
for(let i=0;i<datosUsuarios.length-1;i++) {
    console.log(regexEmail.test(datosUsuarios[i]));
}


document.getElementById("bDatosusuarios").onclick = () => {

    let textInidice = "indice";
    for(let i=0;i<datosUsuarios.length;i++) {
        document.getElementById(textInidice+i).innerHTML=i+1;
    }

    let textNombre = "nombre";
    for(let i=0;i<datosUsuarios.length;i++){
        document.getElementById(textNombre+i).innerHTML=arrayNombres[i];
    }
}



// ABRIR DOCUMENTACION
document.getElementById("bDoc").onclick = () => {
    abrirDoc();
}

function abrirDoc() {
    window.open("https://developer.mozilla.org/es/docs/Web/JavaScript","_blank");
}


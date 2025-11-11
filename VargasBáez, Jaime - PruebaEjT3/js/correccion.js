const datosUsuarios = [
    "Nombre:  Ana García, Email: ana.garcia@example.com, FechaNac: 1995-10-25",
    "Nombre: luis pérez, Email: luisperez@dominio.net, FechaNac: 2005-01-05",
    "Nombre:  MARTA FERNÁNDEZ, Email: marta.fdez-INVALID, FechaNac: 1980-03-15", // Inválido
    "Nombre: pepe lopez, Email: pepe.lopez@example.es, FechaNac: 1978/11/02" // Formato de fecha diferente
];

const regexEmail = /^\S+@\S+\.\S+$/; // \S --> todo lo que no sea un espacio, una @ algo sin espacios, un punto y algo sin espacios
const tabla = document.getElementById("tablaDatos");
/********************************************************************************* */


document.getElementById("bDatosusuarios").onclick = function () {

for (let usuario = 0; usuario < datosUsuarios.length; usuario++) {
    let datosUsuario = datosUsuarios[usuario].split(",");

    // Mostrar Índice:
    document.getElementById("indice" + usuario).innerHTML = usuario;

    // Obtenemos el nombre:
    let nombre = datosUsuario[0].split(":")[1].trim().toUpperCase();
    document.getElementById("nombre" + usuario).innerHTML = nombre;

    // Obtenemos email:
    let email = datosUsuario[1].split(":")[1].trim();
    document.getElementById("email" + usuario).innerHTML = email;

    if (regexEmail.test(email))
        document.getElementById("valido" + usuario).innerHTML = "Válido";
    else
        document.getElementById("valido" + usuario).innerHTML = "NO Válido";

    // Obtenemos los años:
    let fechaNac = new Date(datosUsuario[2].split(":")[1].trim());

    let anoNow = new Date().getFullYear();

    if (fechaNac)
        document.getElementById("edad" + usuario).innerHTML = anoNow - fechaNac.getFullYear();
    else
        document.getElementById("edad" + usuario).innerHTML = "<b>Fecha no admitida</b>";
}


}
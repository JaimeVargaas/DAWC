// ----------------------------------------
// EJERCICIO 1
// ----------------------------------------
class persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
}

function objDetalles(persona) {
    document.getElementById("persona").innerText += "Nombre: " + persona.nombre + " Edad: " + persona.edad + " Género: " + persona.genero + "\n";

}
const persona1 = new persona("Jaime", 18, "Hombre");
objDetalles(persona1);

// ----------------------------------------

class estudiante extends persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
}

function registrar(estudiante) {
    document.getElementById("estudiante").innerText = "Estudiante " + estudiante.nombre + " registrado correctamente en el curso " + estudiante.curso + estudiante.grupo + "\n";
}
const estudiante1 = new estudiante("Jaime", 19, "Hombre", 2, "DAW");
registrar(estudiante1);

// ----------------------------------------

class profesor extends persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
}

function asignar(profesor) {
    document.getElementById("profesor").innerText = "El profesor " + profesor.nombre + " con la asignatura " + profesor.asignatura + " y nivel " + profesor.nivel + " ha sido asignado\n";
}
const profesor1 = new profesor("Jaime", 19, "Hombre", "DAWC", "alto");
asignar(profesor1);


// ----------------------------------------
// EJERCICIO 2
// ----------------------------------------
    

// ----------------------------------------
// EJERCICIO 3
// ----------------------------------------

let num = new Number(Math.PI);
let numPI1 = document.getElementById("numPI1");  
let numPI2 = document.getElementById("numPI2");
numPI1.innerText += num.toPrecision(5);
numPI2.innerText += num.toFixed(4);



// ----------------------------------------
// EJERCICIO 4 y 5
// ----------------------------------------
document.getElementById("calDias").onclick = () => {
    let fecNac = new Date(document.getElementById("fecNac").value);
    let resfecNac = document.getElementById("resfecNac");

    let dateNow = new Date();

    resfecNac.innerText += (dateNow - fecNac)/1000/60/60/24/365 + " años vivo\n";
    resfecNac.innerText += (dateNow - fecNac)/1000 + " segundos vivo\n";
    resfecNac.innerText += (dateNow - fecNac)/1000/60+ " minutos vivo\n";
    resfecNac.innerText += (dateNow - fecNac)/1000/60/60+ " horas vivo\n";
    resfecNac.innerText += (dateNow - fecNac)/1000/60/60/24+ " días vivo\n";

    if(dateNow.getDay==fecNac.getDate&&dateNow.getMonth==fecNac.getMonth) resfecNac.innerText="FELICIDADES";
}

// ----------------------------------------
// EJERCICIO 6
// ----------------------------------------
let calendario=[];
document.getElementById("masEvento").onclick = () => {
    let tituloEvento = document.getElementById("tituloEvento").value;
    let diaHora = new Date(document.getElementById("diaHora").value);
    let diaLegible = diaHora.toLocaleDateString();
    let resEvento = document.getElementById("resEvento");

    resEvento.innerHTML="";
    calendario.push({tituloEvento,diaLegible});

    for(let i=0;i<calendario.length;i++) {
        for(let clave in calendario[i]) {
            resEvento.innerText += calendario[i][clave] + ", ";
        }
        resEvento.innerText += "\n";
    }
}


// ----------------------------------------
// EJERCICIO 7
// ----------------------------------------
document.getElementById("mostrarGuion").onclick = () => {
    let contGuion = document.getElementById("contGuion").value;
    let resGuion = document.getElementById("resGuion"); 
    resGuion.innerText ="";

    // matchall devuelve un array con todos los guiones encontrados, .index sirve para saber en que posicion
    contGuion.matchAll("-").forEach(element => {
        resGuion.innerText += "Guión encontrado en la posicón: " + element.index + "\n";
    });
}

// ----------------------------------------
// EJERCICIO 8
// ----------------------------------------
let array=[];
let resArray = document.getElementById("resArray");
document.getElementById("insertUno").onclick = () => {
    let valor = document.getElementById("insertValor").value;
    array.unshift(valor);
}

document.getElementById("insertFinal").onclick = () => {
    let valor = document.getElementById("insertValor").value;
    array.push(valor);
}

document.getElementById("borrarUno").onclick = () => {
    array.splice(0,1);
}

document.getElementById("borrarFinal").onclick = () => {
    array.pop();
}

document.getElementById("insertPosValue").onclick = () => {
    let pos = document.getElementById("posArray").value;
    let valor = document.getElementById("valorArray").value;
    array[pos]=valor;
}

document.getElementById("deletePosValue").onclick = () => {
    let pos = document.getElementById("posArray").value;
    array.splice(pos,1);
}

document.getElementById("ordenarAsc").onclick = () => {
    array.sort();
}

document.getElementById("ordenarDesc").onclick = () => {
    array.sort((a,b)=> b.localeCompare(a));
}


document.getElementById("mostrarArray").onclick = () => {
    resArray.innerText=array.toString();
}

// ----------------------------------------
// EJERCICIO 9
// ----------------------------------------
document.getElementById("mostrarRes").onclick = () => {
    respuesta = document.getElementById("resRes");    
}



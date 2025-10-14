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
// EJERCICIO 
// ----------------------------------------
document.getElementById("calDias").onclick = () => {
    let fecNac = new Date(document.getElementById("fecNac").value);
    let resfecNac = document.getElementById("resfecNac");

    let dateNow = new Date();

    resfecNac.innerText = (dateNow - fecNac)/1000/60/60/24/365 + " años vivo";
    
}




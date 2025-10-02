// Ejercicio 1
document.getElementById("añadir").onclick = function() {
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("ape");
    let curso = document.getElementById("cur");
    let nota1 = document.getElementById("nota1");
    let nota2 = document.getElementById("nota2");
    let nota3 = document.getElementById("nota3");
    let parrafoAlum = document.getElementById("alum");

    let notas = [nota1.value,nota2.value,nota3.value];
    let alumnos = [nombre.value, apellidos.value, curso.value, notas];

    for(let i=0;i<alumnos.length-1;i++){
        parrafoAlum.innerHTML += alumnos[i] + " - ";
    }

     for(let i=0;i<alumnos.length-1;i++){
        if(i==alumnos.length-2)
            parrafoAlum.innerHTML += alumnos[3][i];
        else
            parrafoAlum.innerHTML += alumnos[3][i] + ", ";
    }
    parrafoAlum.innerHTML += "<br>"
}

// Ejercicio 2


// Ejercicio 3
document.getElementById("convert").onclick = function() {
    let euros = document.getElementById("euros").value;
    let resDol = document.getElementById("dolares");
    let resYen = document.getElementById("yenes");

    resDol.innerText = (euros*1.18);
    resYen.innerText = (euros*173.0);
}

// Ejercicio 4
let radio = document.getElementById("radio");
let resultadoCalculo = document.getElementById("resCal");

document.getElementById("calArea").onclick = function() {
    resultadoCalculo.innerText= (2*3.14*Math.pow(radio.value,2));
}

document.getElementById("calPeri").onclick = function() {
    resultadoCalculo.innerText=(2*3.14*radio.value);
}
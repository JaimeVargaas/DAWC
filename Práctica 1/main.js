// Ejercicio 1
document.getElementById("añadir").onclick = function () {
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("ape");
    let curso = document.getElementById("cur");
    let nota1 = document.getElementById("nota1");
    let nota2 = document.getElementById("nota2");
    let nota3 = document.getElementById("nota3");
    let parrafoAlum = document.getElementById("alum");

    let notas = [nota1.value, nota2.value, nota3.value];
    let alumnos = [nombre.value, apellidos.value, curso.value, notas];

    for (let i = 0; i < alumnos.length - 1; i++) {
        parrafoAlum.innerHTML += alumnos[i] + " - ";
    }

    for (let i = 0; i < alumnos.length - 1; i++) {
        if (i == alumnos.length - 2)
            parrafoAlum.innerHTML += alumnos[3][i];
        else
            parrafoAlum.innerHTML += alumnos[3][i] + ", ";
    }
    parrafoAlum.innerHTML += "<br>"
}

// Ejercicio 2
document.getElementById("and").onclick = function () {
    let bin1 = document.getElementById("bin1").value;
    let bin2 = document.getElementById("bin2").value;
    let resXOR = document.getElementById("resXOR");

    if ((bin1 == "0" || bin1 == "1") && (bin2 == "0" || bin2 == "1")) {
        if ((bin1 == "0" && bin2 == "0") || (bin1 == "1" && bin2 == "1")) {
            resXOR.innerText = "0";
        } else {
            resXOR.innerText = "1";
        }
    } else {
        resXOR.innerText = "Pon 1 o 0";
    }
}

// Ejercicio 3
document.getElementById("convert").onclick = function () {
    let euros = document.getElementById("euros").value;
    let resDol = document.getElementById("dolares");
    let resYen = document.getElementById("yenes");

    resDol.innerText = (euros * 1.18);
    resYen.innerText = (euros * 173.0);
}

// Ejercicio 4
let radio = document.getElementById("radio");
let resultadoCalculo = document.getElementById("resCal");

document.getElementById("calArea").onclick = function () {
    resultadoCalculo.innerText = (2 * 3.14 * Math.pow(radio.value, 2));
}

document.getElementById("calPeri").onclick = function () {
    resultadoCalculo.innerText = (2 * 3.14 * radio.value);
}

document.getElementById("mostrarPares").onclick = function () {
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;
    let resPares = document.getElementById("resPares");

    resPares.innerHTML = "";

    while (min < max) {
        if (min % 2 == 0) {
            resPares.innerHTML += min + ", "
        }
        min++;
    }
}

document.getElementById("mostrarOp").onclick = function () {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resOp = document.getElementById("resOp");

    if (num1 == 0 || num2 == 0)
        resOp.innerHTML = "No se puede dividir por 0"
    else {
        suma = Number(num1) + Number(num2);
        resOp.innerHTML = "Suma= " + suma + "<br>" +
            "Resta= " + (num1 - num2) + "<br>" +
            "Multiplicación= " + (num1 * num2) + "<br>" +
            "División= " + (num1 / num2) + "<br>" +
            "Resto= " + (num1 % num2) + "<br>";

    }
}

document.getElementById("calNota").onclick = function () {
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;
    let resNota = document.getElementById("resNota");

    console.log(document.getElementById("nota1").value);


    let nota = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

    resNota.innerHTML = "Nota media: " + nota + ", ";

    if (nota < 5) {
        resNota.innerHTML += "SUSPENSO";
    } else if (nota < 7) {
        resNota.innerHTML += "APROBADO";
    } else if (nota < 8.5) {
        resNota.innerHTML += "NOTABLE";
    } else if (nota <= 10) {
        resNota.innerHTML += "SOBRESALIENTE";
    } else {
        resNota.innerHTML += "Nota inválida";
    }

    // switch(nota) {
    //     case nota<5: 
    //         resNota.innerHTML += "SUSPENSO";
    //         break;
    //     case nota>=5 && nota<7:
    //         resNota.innerHTML += "APROBADO";
    //         break;
    //     case nota>=7 && nota<8.5:
    //         resNota.innerHTML += "NOTABLE";
    //         break;
    //     case nota>=8.5 && nota<10:
    //         resNota.innerHTML += "SOBRESALIENTE";
    //         break;
    // }
}

document.getElementById("genPiramide1").onclick = () => {
    let genP = document.getElementById("genP");
    for(let i=1;i<=50;i++) {
        genP.innerText = i;
    }
         
}
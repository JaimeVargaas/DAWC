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
    for (let i = 1; i <= 50; i++) {
        for (let j = 0; j < i; j++) {
            genP.innerText += i;
        }
        genP.innerText += "\n";
    }
}

document.getElementById("genPiramide2").onclick = () => {
    let genP = document.getElementById("genP2");
    genP.innerText = "";
    for (let i = 1; i <= 50; i++) {
        for (let j = 1; j <= i; j++) {
            genP.innerText += j;
        }
        genP.innerText += "\n";
    }
}

document.getElementById("calEntero").onclick = () => {
    let num = document.getElementById("valorEntero").value;
    let resEntero = document.getElementById("resEntero");

    if (num % 2 == 0)
        resEntero.innerText = "Par";
    else
        resEntero.innerText = "Impar";

}


function* juegoPUM() {
    let resPUM = document.getElementById("resPUM");
    resPUM.innerText = "";
    let array = [];

    for (let i = 1; i <= 100; i++) {
        // dividimos el numero por digito
        array = i.toString().split('')

        if (array[array.length - 1 == 7] || i % 7 == 0) {
            yield resPUM.innerText += " PUM \n";
        }
        else
            yield resPUM.innerText += " " + i;
    }
}

document.getElementById("calPUM").onclick = () => {
    const gen = juegoPUM();
    let next = gen.next();
    while (!next.done) {
        next = gen.next();
    }
};

document.getElementById("calConteo").onclick = () => {
    let resConteo = document.getElementById("resConteo");
    resConteo.innerText = "";

    for (let i = 1; i <= 300; i++) {
        resConteo.style.fontSize = "16px";
        resConteo.style.color = "black";

        let span = document.createElement("span");
        span.innerHTML = i + " ";

        if (i % 4 === 0) {
            span.style.fontSize = "20px";
            span.style.color = "green";
        }
        else if (i % 9 === 0) {
            span.style.fontSize = "22px";
            span.style.color = "red";
        }

        resConteo.appendChild(span);
    }
}

document.getElementById("dados").onclick = () => {
    let dado1 = document.getElementById("dado1");
    let array = [];

    dado1.innerText = "";

    // se inicializa a dos porque la suma minima de los dos dados es 2
    // se inicializa el array primero para que luego solo se tenga que sumar el valor a la clave
    for (let i = 2; i <= 12; i++) {
        array[i] = 0;
    }

    for (let i = 0; i < 36000; i++) {
        let d1 = Math.floor(Math.random() * 6) + 1;
        let d2 = Math.floor(Math.random() * 6) + 1;
        let suma = d1 + d2;

        array[suma] += 1;
    }

    array.forEach((valor, clave) => {
        dado1.innerText += "Suma " + clave + ": " + valor + " veces\n";
    });
};

let array = [];
document.getElementById("añadirNum").onclick = () => {
    let num = document.getElementById("numeros").value;
    let resNum = document.getElementById("resNum");

    // si array[num] tiene valor se suma uno a ese valor, sino se inicializa a 0 y se suma 1
    if (num != 0) {
        array[num] = (array[num] || 0) + 1;
    }
    else {
        let mayor = Number.MIN_SAFE_INTEGER;
        let menor = Number.MAX_SAFE_INTEGER;

        array.sort((a, b) => b - a);

        // recorre el array con un foreach y crea una variable valor que es igual a array[clave]
        for (let clave in array) {
            let valor = array[clave];
            let numero = parseInt(clave);

            if (clave > mayor) mayor = numero;
            if (clave < menor && numero != 0) menor = numero;
            resNum.innerText += "Número " + clave + " ha salido " + valor + "veces\n";
        }

        resNum.innerText += "\nMayor: " + mayor + "\nMenor: " + menor;
    }
}

let invertir = [];
document.getElementById("guardarInv").onclick = () => {
    let carInvertir = document.getElementById("carInvertir");
    invertir.push(carInvertir.value);

    carInvertir.innerText = "";
}

document.getElementById("mostrarInv").onclick = () => {
    let mostrarInv = document.getElementById("resInv");
    mostrarInv.innerHTML = "";

    invertir.reverse();

    for (let i in invertir) {
        if (i == invertir.length - 1)
            mostrarInv.innerHTML += invertir[i];
        else
            mostrarInv.innerHTML += invertir[i] + " - ";
    }

    // for(let i = invertir.length-1; i>=0;i--) {
    //     if(i==0)
    //         mostrarInv.innerHTML+=invertir[i];
    //     else
    //         mostrarInv.innerHTML+=invertir[i] + " - ";
    // }
}

document.getElementById("genPasswd").onclick = () => {
    let bytes = document.getElementById("intrBytes").value;
    let resPasswd = document.getElementById("resPasswd");

    let conjunto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyzáéíóúÁÉÍÓÚ0123456789!@#$%^&*()";
    let num = conjunto.length;
    let contraseña = "";
    for (let i = 0; i <= bytes; i++) {
        let char = conjunto.charAt(Math.random() * num + 1);
        contraseña += char;
    }
    resPasswd.innerText = contraseña;
}

document.getElementById("mostrarEnteros").onclick = () => {
    let entero1 = document.getElementById("valorEntero1").value;
    let entero2 = document.getElementById("valorEntero2").value;
    let resEnteros = document.getElementById("resEnteros");

    resEnteros.innerText = "";

    let menor = Math.min(entero1, entero2);
    let mayor = Math.max(entero1, entero2);

    resEnteros.innerText += "\n Menor: " + menor + "\n Diferencia: " + (mayor - menor) + "\n";

    while (menor <= mayor) {
        resEnteros.innerText += menor + ",";
        menor++;
    }
}
let mostrarMenu = document.getElementById("mostrarMenu");
document.getElementById("menu").onclick = () => {
    mostrarMenu.innerText = "Menú\n----\n1. Calcular si es múltiplo de 2.\n2. Calcular si es múltiplo de 3.\n3. Calcular si es múltiplo de 5.\n0. Salir";
}

document.getElementById("resMultiplo").onclick = () => {
    let numMenu = document.getElementById("numMenu").value;
    let numMultiplo = document.getElementById("numMultiplo").value;

    let aux;

    if (numMenu == 1) {
        aux = multiplo2(numMultiplo);
        mostrarMenu.innerText = (aux == true ? "Si es multiplo de 2" : "No es multiplo de 2");
    }
    else if (numMenu == 2) {
        aux = multiplo3(numMultiplo);
        mostrarMenu.innerText = (aux == true ? "Si es multiplo de 3" : "No es multiplo de 3");
    }
    else if (numMenu == 3) {
        aux = multiplo5(numMultiplo);
        mostrarMenu.innerText = (aux == true ? "Si es multiplo de 5" : "No es multiplo de 5");
    }
    else
        mostrarMenu.innerText = "";

}

function multiplo2(num) {
    if (num % 2 == 0)
        return true;
    else
        return false;
}

function multiplo3(num) {
    if (num % 3 == 0)
        return true;
    else
        return false;
}

function multiplo5(num) {
    if (num % 5 == 0)
        return true;
    else
        return false;
}

// creamos array antes de la funcion para que se guarde por pagina y no cada vez que le demos al boton se reinicie
let salarios = [];
let ContSalariosBrutos = null;

document.getElementById("calSalario").onclick = () => {
    let resSalario = document.getElementById("resSalario");
    // cada vez que le damos al boton se pone en blanco para que no se concatene con lo de antes
    resSalario.innerText ="";

    let horas = document.getElementById("numHoras").value;
    let nombre = document.getElementById("nombreTrabajador").value;

    // la variable radio contiene dentro un array con todos los input que tengan nombre turno
    let radio = document.getElementsByName("turno");
    let turno = null;

    // recorremos el array radio buscando el que hemos seleccionado, y una vez lo hemos encontrado, metemos su valor en la variable turno
    for (let i = 0; i <= radio.length - 1; i++) {
        if (radio[i].checked)
            turno = radio[i].value;
    }

    let euroHora = null;

    if (turno == "Mañana") euroHora = 25;
    if (turno == "Tarde") euroHora = 30;
    if (turno == "Noche") euroHora = 35;

    let salarioBruto = euroHora * horas;
    ContSalariosBrutos += salarioBruto;

    let salarioNeto = null;

    // calculamos el porcentaje de cada salario para calcular el neto
    if (salarioBruto < 600) salarioNeto = salarioBruto - ((salarioBruto * 8) / 100);
    else if (salarioBruto < 1000) salarioNeto = salarioBruto - ((salarioBruto * 10) / 100);
    else salarioNeto = salarioBruto - ((salarioBruto * 12) / 100);

    // añadimos el trabajador al array general
    salarios.push({ 
        Nombre: nombre, 
        Horas: horas, 
        Turno: turno, 
        SalarioBruto: 
        salarioBruto, 
        SalarioNeto: salarioNeto
    });

    // recorremos el array general de salarios para imprimirlo en la pantalla, creamos una variable trabajador para guardar el trabajador seleccionado para luego imprimirlo por sus atributos 
    for (let i = 0; i < salarios.length; i++) {
        let trabajador= salarios[i];
        if (i == 0) {
            resSalario.innerText += "Nombre:" +  trabajador.Nombre + " - Horas trabajadas: " + trabajador.Horas + " - Turno: " 
            + trabajador.Turno + " - Salario Bruto: " + trabajador.SalarioBruto + " - Salario Neto: " + trabajador.SalarioNeto;
        }
        else {
            resSalario.innerText += "\nNombre:" +  trabajador.Nombre + " - Horas trabajadas: " + trabajador.Horas + " - Turno: " 
            + trabajador.Turno + " - Salario Bruto: " + trabajador.SalarioBruto + " - Salario Neto: " + trabajador.SalarioNeto;
        }
    }

    // imprimimos el gasto de salarios brutos
    resSalario.innerHTML += "<br><br><strong>Salarios brutos abonados: </strong>" + ContSalariosBrutos;
}


let numeroRandom = parseInt(Math.random()*100+1);
let contIntentos = 0;
document.getElementById("ejInt").onclick = () => {
    let intento = document.getElementById("intento").value;
    let resIntento = document.getElementById("resIntento");

    if(intento>numeroRandom) {
         resIntento.innerText= "Mi número es menor";
         contIntentos++;
    }
    else if(intento<numeroRandom) {
         resIntento.innerText ="Mi número es mayor";
         contIntentos++;
    }
    else resIntento.innerText="Felicidades! has acertado el número, has necesitado " + contIntentos + " intentos"; 

}




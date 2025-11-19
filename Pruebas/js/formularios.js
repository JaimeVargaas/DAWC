let info = document.getElementById("info");


info.innerHTML = document.forms[0].elements[0].type;

// cuando cambias algo y pierde el foco
document.getElementById("login").onchange = function() {
    console.log("change");
}

// para cuando esta en el foco
document.getElementById("login").onfocus = function() {
    this.style.border = "5px solid red";
}

// cuando pierde el foco
document.getElementById("login").onblur = function() {
    this.style.border = "1px solid black";
}


document.getElementById("lista").onchange = function() {
    console.log(this.value);
}

// para cuando escribes algo en el input o borras
document.getElementById("login").oninput = function() {
    console.log(this.value);
}


// document.getElementsByName("turnos")[0].checked = true;
//  for (elem of document.getElementsByName("turnos"))
//     if (elem.checked) {
//         info.innerText = elem.value;
//     }



// info.innerText = document.getElementById("lista").options[document.getElementById("lista").selectedIndex].value;
// info.innerText += " - " + document.getElementById("lista").options[document.getElementById("lista").selectedIndex].text;

let barra = document.getElementById("barra");

let intervalo = setInterval(() => {
    if (barra.value < barra.max) {
        barra.value++;
    } else {
        clearInterval(intervalo);
        console.log("te has salido");
    }
}, 10);





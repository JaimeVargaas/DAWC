// let myArray = [1,true,34.56,"pepe",{name:"Mary",age:45},undefined];
// console.log(myArray);

let a = {
    nombre: "pepe",
    edad: 34,
    email: "pepe@gmail.com"
}

// console.log("Email: " + myObj.email)

// document.getElementById("h11").innerHTML="Hola, <br> Cómo estas?"
// document.getElementById("pre1").innerHTML="Hola, \nComo estas?";
// document.getElementById("ta1").innerHTML="Hola, \nComo estas?";

let h11 = document.getElementById("h11");
let b1 = document.getElementById("b1");
let i1 = document.getElementById("i1");
// let a;
let b=5;

// h11.innerHTML = "Valor de a " + a;

// si su valor es null o undefined su valor es b
// a??= b;

// h11.innerHTML+= a.email;
// delete a.email;
// a.notas = [5,7,8];
// console.dir(a);

b1.onclick = pressButtonB1;

/********************************** */

function pressButtonB1() {
    h11.innerHTML = parseFloat(i1.value)+10;
}

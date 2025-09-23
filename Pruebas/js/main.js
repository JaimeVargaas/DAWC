// No es necesario crear la funcion main para que funcione, se puede poner a pelo y es lo mismo

// document.getElementById("h11").style.backgroundColor = "red";
// document.getElementById("h11").style.color = "white";

// var main = "Mery";

// console.log("Nombre es: " + main + " Tipo: " + typeof main);

// main = 5;
// console.log("Nombre es: " + main + " Tipo: " + typeof main);

// main = true;
// console.log("Nombre es: " + main + " Tipo: " + typeof main);

// main = [5,6,7,8];
// console.log("Nombre es: " + main + " Tipo: " + typeof main);

// main = 10/0;
// console.log("Nombre es: " + main + " Tipo: " + typeof main);


/******************************FUNCTIONS******************************/
/**
 * 
 * @param {string} s - Cadena de saludo para dar la bienvenida
 * @param {number} n - Edad del usuario 
 */

// Sintaxis buena, no recomenadable meter funciones dentro de otras
// function hello(s, n) {
//     bye(s);
// }

// function bye (s) {
//         document.getElementById("h11").innerHTML=s;
// }
// hello("Hello Universe!");


// Más ejemplos
// no es recomendable hacer variables globales
var a = "Pepe";
hello();
console.log(document.getElementById("h11").innerHTML+= " - "+ a);

function hello(){
    var a = "Maria";
    document.getElementById("h11").innerHTML=a;
}
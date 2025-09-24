// si se define sin var ni let, es una variable superglobal, la podrían ver fuera de la clase
// let se pone cuando no quieres que se vea la variable fuera del bloque
// var a partir del bloque en el que se crea ya aparece en todos los bloques

var a = 10;
let b = "Hello";
c = true;

if(typeof a == "string")
    console.log(a + " buenos dias");

else if(typeof a == "number")
    console.log(a+10);

// si son 3 condiciones o mas se usa switch
// switch(typeof a) {
//     case "number":
//         a = a +10;
//         break;
//     case "string":
//         a = "Buenos dias " + a;
//         break;
//     case "boolean":
//         a = !a;
//         break;
// }

// Crear un objeto
let myObj = {
    name:"Pepe",
    edad: 34
}

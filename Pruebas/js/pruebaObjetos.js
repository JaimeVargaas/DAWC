// let info = document.getElementById("info");

// let obj1 = {
//     nombre: "Pepe",
//     edad: 30,
//     email: "pepe@mail.com"
// }

// // writable sirve para poder cambiar su valor cuando queramos, y enumerable para que salga o no en la consola y en los valores del array de object.keys
// Object.defineProperty(obj1, "color",{writable: true,enumerable: true, value:"red"});
// obj1.color="yellow";

// // para que no le pueda añadir propiedades a un objeto
// Object.preventExtensions(obj1);

// let obj2 = new Object ({
//     nombre: "María",
//     edad: 23,
//     email: "maria@mail.com"
// });

// Object.defineProperties(obj2, {
//     "color":{writable: false,enumerable: true   , value:"blue"},
//     "notas":{writable: false,enumerable: true, value:[6,7,8]}
// });
// Object.defineProperty(obj2, "color de fondo",{writable: true,enumerable: true, value:"red"});

// // para que no le pueda añadir propiedades a un objeto
// Object.preventExtensions(obj2);

// if(Object.isExtensible(obj2))
//     obj2.colordefondo = "Green"
// else
//     console.log("no es extensible")

// // no deja ni borrar ni añadir, pero puede cambiar el valor de las propiedades
// Object.seal(obj2);
// if(!Object.isSealed(obj2))
//     obj2.nombre = "Green"
// else
//     console.log("no es admin")

// info.innerHTML += "Datos de pepe: " + obj1.nombre + " " + obj1.edad + " " + obj1.email + " " + obj1.color +"<br>";
// info.innerHTML += "Datos de María: " + Object.keys(obj2); 

// console.log("Recorriendo ob1")
// for (prop in obj1) 
//     console.log(obj1[prop])

// console.log("Recorriendo ob2")
// for (prop of Object.keys(obj2))
//     console.log("Propiedad " + prop + ". Value: " + obj2[prop])

// // eval("document.open(); document.write('<h1>Web eliminada</h1>')")

// let array2 = ["hola", 1, "adios", {nombre:"PEPE",edad:2, mail:"pepe@mail.es"}];
// // para eliminiar el ultimo objeto de un array
// array2.pop();

// // para añadir algo en mitad del array
// array2.splice(3,0,false,99999,"Pepe");
// info.innerText="";
// for(let i in array2)  {
//     if (i==0)
//         info.innerText += array2[i];
//     else
//         info.innerText += " - "+ array2[i]  ;
// }

// /*
//  Números sean negativos
//  true a false y viceversa
//  Los string se le anteponga "Nombre: "
//  */

//  // la funcion map lleva dentro un bucle por lo tanto no hace falta crearlo dentro
// let myArrayResult = array2.map(function (elem) {
//     switch(typeof elem) {
//         case "number":
//             return (elem * -1);
//         case "boolean":
//             return !elem;
//         case "string":
//             return "Nombre: " + elem;
//     }
// });

// info.innerHTML = myArrayResult;

// // esto sirve para iterar el array
// info.innerHTML = "";
// myArrayResult.forEach(function(elem,indice,arrayActual){
//     console.log("myArray es: " + arrayActual);
//     info.innerHTML += "<br> Elemento actual es: " + elem + " situado en la posición: " + indice;
// });

// let existeBoolean = false;

// existeBoolean = myArrayResult.some(elem => {
//     return typeof elem == "boolean";
// });


// // fechas
// let dateNow = new Date(1980,6,31,23,54,15);


// script que si son mas de las 8 de la tarde, que ponga en colores oscuros la web
// let info = document.getElementById("info");
// let main = document.getElementById("main");
// let footer = document.getElementById("footer");
// let aside = document.getElementById("aside");


// let dateNow = new Date();
// console.log(dateNow.getMonth());

// info.innerText = dateNow.toLocaleString();
// if(dateNow.getHours()>=20 || dateNow.getHours()<=7 && dateNow.getMonth()>=9 || dateNow.getMonth()<=2) {
//     info.style.color="White";
//     main.style.backgroundColor = "grey";
//     footer.style.backgroundColor = "black";
//     aside.style.backgroundColor = "darkblue";
// }

// info.innerHTML = window.innerWidth + " - " + window.innerHeight;


// objeto window
console.log(this)

document.getElementById("cierra").onclick = (e) => {
    e.preventDefault();

    if (!this.closed)
        this.close();
}








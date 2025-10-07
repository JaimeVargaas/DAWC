let info = document.getElementById("info");

let obj1 = {
    nombre: "Pepe",
    edad: 30,
    email: "pepe@mail.com"
}

// writable sirve para poder cambiar su valor cuando queramos, y enumerable para que salga o no en la consola y en los valores del array de object.keys
Object.defineProperty(obj1, "color",{writable: true,enumerable: true, value:"red"});
obj1.color="yellow";

// para que no le pueda añadir propiedades a un objeto
Object.preventExtensions(obj1);

let obj2 = new Object ({
    nombre: "María",
    edad: 23,
    email: "maria@mail.com"
});

Object.defineProperties(obj2, {
    "color":{writable: false,enumerable: true   , value:"blue"},
    "notas":{writable: false,enumerable: true, value:[6,7,8]}
});
Object.defineProperty(obj2, "color de fondo",{writable: true,enumerable: true, value:"red"});

// para que no le pueda añadir propiedades a un objeto
Object.preventExtensions(obj2);

if(Object.isExtensible(obj2))
    obj2.colordefondo = "Green"
else
    console.log("no es extensible")

// no deja ni borrar ni añadir, pero puede cambiar el valor de las propiedades
Object.seal(obj2);
if(!Object.isSealed(obj2))
    obj2.nombre = "Green"
else
    console.log("no es admin")

info.innerHTML += "Datos de pepe: " + obj1.nombre + " " + obj1.edad + " " + obj1.email + " " + obj1.color +"<br>";
info.innerHTML += "Datos de María: " + Object.keys(obj2); 

console.log("Recorriendo ob1")
for (prop in obj1) 
    console.log(obj1[prop])

console.log("Recorriendo ob2")
for (prop of Object.keys(obj2))
    console.log("Propiedad " + prop + ". Value: " + obj2[prop])
// Centrar verticalmente la pelota
let pelota = document.getElementById("pelota");
let pelotaleft = 0;
const incremento = 1;

// 1 - Obtener el alto util de la ventana
// 2 - Dividirlo por la mitad menos la mitad del el alto de la pelota
// 3 - aplicar el nuevo alto a la pelota
let wHeight = window.innerHeight;
wHeight = wHeight / 2;

// Para acceder al archivo css, si el css esta en el html se accede con style
let pelotaCSS = window.getComputedStyle(pelota);
let pelotaHeight = pelotaCSS.getPropertyValue("height");

// esto se queda en el string con todo menos los dos ultimos
pelotaHeight = quitaPX(pelotaHeight);


let positionHeight = wHeight - (pelotaHeight / 2);

// el px que le quitas antes para calcular la mitad se lo añades ahora para que lo coja en css
pelota.style.top = positionHeight + "px";

leftPlus();
rebota();
// for(let i=0;i<=100;i++) {
//     leftPlus();
// }


// FUNCION QUE AUMENTA EL LEFT DE LA PELOTA HASTA EL FINAL DE LA VENTANA
function leftPlus() {
    let leftCSS = pelotaCSS.getPropertyValue("left");
    leftCSS = quitaPX(leftCSS);

    pelota.style.left = (leftCSS + 1) + "px";
}

function leftMinus() {
    let leftCSS = pelotaCSS.getPropertyValue("left");
    leftCSS = quitaPX(leftCSS);
    pelota.style.left = (leftCSS - incremento) + "px";
}


function quitaPX(cad) {
    cad = parseFloat(cad.slice(0, cad.length - 2));
    return cad;
}

function rebota() {
    // definimos la propiedad left de pelota en la variable
    let leftCSS = pelotaCSS.getPropertyValue("left");

    // llamamos a la funcion quitaPX para quitarle a lo que nos devuelve la propiedad left (100px como string)
    leftCSS = quitaPX(leftCSS);

    // definimos en una variable la anchura de la pantalla
    let wWidth = window.innerWidth;

    // definimos en una variable la anchura de la pelota y le quitamos px
    let widthPelota = pelotaCSS.getPropertyValue("width");
    widthPelota = quitaPX(widthPelota);

    let direccion=1; // 1 va hacia la derecha

    // cada 1 ms y si leftcss es menos que el ancho de la pantalla menos el ancho de la pelota se suma uno a su 
    let intervalo = setInterval(function (){
        let leftCSS = pelotaCSS.getPropertyValue("left");
        leftCSS = quitaPX(leftCSS);

        switch (direccion) {
            case 1:
            if (leftCSS < (wWidth - widthPelota)) {
                leftPlus();
                leftCSS = leftCSS + incremento;
            }
            else 
                direccion = -1;
            break;
            case -1: 
                if (leftCSS > 0) {
                    leftMinus();
                    leftCSS = leftCSS - incremento;
                }
                else 
                    direccion = 1;
            break;
        } 
            


    }, 1);;

}





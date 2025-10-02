const usuario = document.getElementById("login");
const contraseña = document.getElementById("passwd");
const contraseñaRepite = document.getElementById("passwd2");
const boton = document.getElementById("b2");
const tit = document.getElementById("h11");

boton.onclick = function() {
    try {
        if(login.value=="") {
            throw "El usuario tiene que tener un nombre";
        }
        else if(contraseña.value!=contraseñaRepite.value)
            throw "Las contraseñas no coinciden"
        else if(contraseña.value =""|| contraseñaRepite.value == "")
            throw "Las contraseñas deben tener un valor"; 
        else
             alert("Registro completado");
    }
    catch(error) {
        tit.innerHTML ="Error: " + error;   
    }
    finally {
        contraseña.value ="";
        contraseñaRepite.value="";
        tit.value = "Register"
    }
};




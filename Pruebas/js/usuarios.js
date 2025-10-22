let login = document.getElementById("loginText");
let pass = document.getElementById("passwdText");


document.getElementById("enviar").onclick =function() {
    window.opener.document.getElementById("texto").value = "Login: " + login.value + " Password: " + pass.value;
}

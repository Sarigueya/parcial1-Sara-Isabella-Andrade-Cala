function cambiarTexto() {

    document.getElementByID("descripcion").innerHTML = "Ahora estás viendo nuestras ofertas!"

}

function modoOscuro() {

    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"

}

let carrito = 0

function agregarCarrito() {

    carrito++
    console.log("Productos en carrito: " + carrito)

}

function enviarFormulario() {

    let nombre = document.getElementById("inputfirstname").value
    let correo = document.getElementById("inputEmail4").value

    if (nombre == "") {
        alert("El nombre es obligatorio")
    }

    console.log("Formulario enviado")

}


function validarFormulario(){

let nombre = document.getElementById("inputfirstname").value
let apellido = document.getElementById("inputlastname").value
let email = document.getElementById("inputEmail4").value;
let telefono = document.getElementById("inputcel").value;
let direccion = document.getElementById("inputAddress").value;
let ciudad = document.getElementById("inputCity").value;
let edad = document.getElementById("inputedad").value;


let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let regexTelefono = /^[0-9]+{6,}$/;
let regexTexto = /^[a-zA-Z\s]{3,}$/;
let regexedad = /^[0-9]+{1,2}$/;


if(!regexEmail.test(email)){
alert("Email inválido");
return;
}

if(!regexTelefono.test(telefono)){
alert("El Télefono debe tener mínimo 6 números");
return;
}

if(!regexTexto.test(ciudad)){
alert("Ciudad inválida");
return;
}

if(!regexTexto.test(nombre)){
alert("Nombre inválido");
return;
}

if(!regexTexto.test(apellido)){
alert("Apellido inválido");
return;
}

if(!regexedad.test(edad)){
alert("Edad Invalida");
return;
}

if(direccion.length < 5){
alert("Dirección inválida");
return;
}

if (nombre == "" || email == "" || edad == "" || direccion == "" || apellido == "" || telefono == "" || ciudad == "") {
    alert("Faltan Datos")
}


alert("Nombre: " + nombre + " " + apellido + " , de la ciudad de " + ciudad + " , domicilio en" + direccion + " , con " + edad + " años, e información de contacto " + email + " , cel." +telefono );

document.getElementById("formSingin").reset();

}
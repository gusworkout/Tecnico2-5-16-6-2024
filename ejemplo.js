let contador = 0;

let btnContador = document.getElementById("accion");
let text = document.getElementById("cuenta");
let btnDisminuir = document.getElementById("disminuir");

function contar(){
    contador ++;
    text.textContent = contador
}
function regresar(){
    if (contador > 0) {
        contador --;
        text.textContent=contador;
    } else {
        alert("NO PUEDES DISMINUIR MAS");
    }
}
btnDisminuir.addEventListener('click', regresar)
btnContador.addEventListener('click', contar)

var txt = document.getElementById("texto");
var num = document.getElementById("numero");
let btnValidar = document.getElementById("validacion");
var v1,v2;
function mensaje(){
   v1 = txt.value;
   v2= num.value;
   alert("Texto " + v2)
}


btnValidar.addEventListener('click', mensaje)

let validacion2 = document.getElementById("validacion2");
var user = "admin"
var contra = "123"

function validacion(){
    v1 = txt.value;
    v2 = num.value;
    if(v1 == user && v2 == contra){
        alert("DATOS CORRECTOS")
    }else{
        alert("DATOS INCORRECTOS"+ " ESCRIBISTE " + v1 + " " + v2)
    }
}
validacion2.addEventListener('click', validacion)

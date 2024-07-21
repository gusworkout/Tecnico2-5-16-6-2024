document.addEventListener('DOMContentLoaded', function() {

    const loginForm = document.getElementById('loginForm');
    const crearCuentaBtn = document.getElementById('crear_cuenta')

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let usuario = document.getElementById('usuario');
        let contrasena = document.getElementById('contrasena');
    

    if(usuario == 'usuario' && contrasena == 'contrasena' ){
        alert('Inicio de sesion exitoso')
        window.location.href = 'paginaPrincipal.html';
    }else{
        alert('Usuario o contraseña incorrectos')
    }
});

    crearCuentaBtn.addEventListener('click', function(event){
        event.preventDefault();

        window.location.href ="CrearCuenta.html";
    
    });

    const olvidaste_contrasenaLink = document.getElementById('olvidaste_contrasena');
    olvidaste_contrasenaLink.addEventListener('click', function(event){
      event.preventDefault();
      //RUTA DE LA PAGINA DE RECUPERAR CONTRASENA
    });

    

});
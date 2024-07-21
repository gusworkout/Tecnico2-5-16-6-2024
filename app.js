let cantidad_producto = 0;

let numeroDeProductos = document.getElementById("cantidadProductos");
let btnAgregarProducto = document.getElementById("agregar_carrito");


function AgregarAlCarrito(){
    cantidad_producto ++;
    numeroDeProductos.textContent = cantidad_producto;
}

btnAgregarProducto.addEventListener('click', AgregarAlCarrito);
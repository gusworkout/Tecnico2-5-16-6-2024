let cantidad_producto = 0;

let numeroDeProductos = document.getElementById("cantidadProductos");


function AgregarAlCarrito(){
    cantidad_producto ++;
    numeroDeProductos.textContent = cantidad_producto;
}


let producto = [ ];

document.addEventListener('DOMContentLoaded', function(){

    //OBTENER LOS DATOS ALMACENADOS EN LOCAL STORAGE
    if(localStorage.getItem('producto')){
        producto = JSON.parse(localStorage.getItem('producto'))
    }

    //METODO PARA EL BOTON AGREGAR
    document.querySelectorAll('.agregar_carrito').forEach(button => {
        button.addEventListener('click', function(){

            const productos = this.closest('.producto')
             
            const nombre = producto.querySelector('.nombre_producto').innerText
            const precio = producto.querySelector('.Precio_producto').innerText
            

            const data = {nombre, precio};

            productos.push(data);

            localStorage.setItem('productos', JSON.stringify(producto))

            alert('Se agregó con exito el ${nombre} al carrito')
        })
        
    });

})





    





document.addEventListener('DOMContentLoaded', function(){
    //DATOS NUEVOS
     let cantidad_producto = 0;
     let producto = [ ];
     let numeroDeProductos = document.getElementById("cantidadProductos");

    //OBTENER LOS DATOS ALMACENADOS EN LOCAL STORAGE
    if(localStorage.getItem('producto')){
        producto = JSON.parse(localStorage.getItem('producto'))
    }

    //METODO PARA EL BOTON AGREGAR
    document.querySelectorAll('.agregar_carrito').forEach(button => {
        button.addEventListener('click', function(){

            const productos = this.closest('.producto1');
             
            const nombre = productos.querySelector('.nombre_producto').innerText
            const precio = productos.querySelector('.Precio_producto').innerText
            

            const data = {nombre, precio};

            productos.push(data);

            localStorage.setItem('productos', JSON.stringify(producto))

            alert('Se agregó con exito el ${nombre} al carrito')
            cantidad_producto ++;
            numeroDeProductos.textContent = cantidad_producto;
        })
        
    });
    
    document.getElementById('carrito').addEventListener('click', function(){
        
        producto = JSON.parse(localStorage.getItem('producto'))

        if(producto && producto.lenght > 0){
            
            //CONVERTIR LOS DATOS EN JSON
            const JsonData = JSON.stringify(producto, null, 2)

            const blob = Blob([JsonData], {type: 'application/json' })
            const url = URL.createObjectURL(blob)

           const a = document.createElement('a');
           a.href = 'producto.json'
           a.download = 
           document.body.appendChild()
           


        }

    })  


})


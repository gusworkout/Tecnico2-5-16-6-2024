let cont=0;
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar un array para almacenar los productos
    let productos = [];

    // Obtener datos almacenados en localStorage
    if (localStorage.getItem('productos')) {
        productos = JSON.parse(localStorage.getItem('productos'));
    }

    // Añadir event listener a los botones "Agregar al carrito"
    document.querySelectorAll('.agregar_carrito').forEach(button => {
        button.addEventListener('click', function() {
            // Encontrar el contenedor del producto correspondiente
            const producto = this.closest('.producto');

            // Extraer el nombre y el precio del producto
            const nombre = producto.querySelector('.nombre_producto').innerText;
            const precio = producto.querySelector('.precio_producto').innerText;

            // Crear objeto con los datos del producto
            const data = { nombre, precio};

            // Añadir el producto al array
            productos.push(data);

            // Guardar el array en localStorage
            localStorage.setItem('productos', JSON.stringify(productos));

            alert(`Producto ${nombre} agregado al carrito.`);

            
            let cant = document.getElementById('cantidadProductos')

            cont ++;
            cant.textContent = cont;
            
        });
    });

    // Añadir event listener al botón "Guardar Productos"
    document.getElementById('carrito').addEventListener('click', function() {
        // Obtener datos almacenados en localStorage
        const productos = JSON.parse(localStorage.getItem('productos'));

        if (productos && productos.length > 0) {
            // Convertir datos a formato JSON
            const jsonData = JSON.stringify(productos, null, 2);

            // Crear un Blob con los datos y guardarlo como un archivo
            const blob = new Blob([jsonData], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            // Crear un enlace para descargar el archivo
            const a = document.createElement('a');
            a.href = url;
            a.download = 'productos.json';
            document.body.appendChild(a);
            a.click();

            // Limpiar
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            // Limpiar el localStorage después de descargar
            localStorage.removeItem('productos');
        } else {
            alert('No hay productos en el carrito.');
        }
    });
});
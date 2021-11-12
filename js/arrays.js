class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = Number(precio);
    }
}

const productos = [];
const carrito = [];


productos.push(new Producto('Detergente', 'Limpieza', 140));
productos.push(new Producto('Lavandina', 'Limpieza', 250));
productos.push(new Producto('Cafe', 'Alimentos', 400));

//Productos disponibles
const verProductos = (productos) => {
    let texto = '';
    for (const producto of productos) {
        texto += `Producto: ${producto.nombre}\nCategoria: ${producto.categoria}\nPrecio: $${producto.precio}\n\n`
    }

    return texto;
}


const comprar = () => {
    const productoUsuario = prompt(`¿Qué producto desea comprar?\n\n${verProductos(productos)}`);
    // productos.find((producto) => {
    //     return producto.nombre === productoUsuario;
    // });
    const productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === productoUsuario.toLocaleLowerCase().trim());
    if (productoEncontrado) {
        carrito.push(productoEncontrado);
        alert(`Agregaste ${productoEncontrado.nombre} al carrito`);
    } else {
        alert('Producto no encontrado');
    }
}


const mostrarCarrito = () => {
    const productosCarrito = verProductos(carrito);
    if (productosCarrito) {
        alert(productosCarrito);
    } else {
        alert('El carrito está vacío');
    }
}

// Menú
let opcion;
do {
    opcion = Number(prompt(`Ingrese una opción:
        1 - Ver productos
        2 - Comprar
        3 - Mostrar carrito
        4 - Salir
    `));

    switch (opcion) {
        case 1:
            const valorRecibido = verProductos(productos);
            alert(valorRecibido);
            break;
        case 2:
            comprar();
            break;
        case 3:
            mostrarCarrito();
            break;
        case 4:
            alert('Gracias por su visita');
            break;
        default:
            alert('Opción incorrecta');
            break;
    }
} while(opcion !== 4);

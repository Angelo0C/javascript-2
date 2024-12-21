
let carrito = []; 

let total = 0;    

// Función 
function agregarProducto() {

    // Capturar nombre del producto
    let nombre = prompt("¿Qué producto deseas agregar?");
    if (!nombre || nombre.trim() === "") {
        
    }

    
    let precio = parseFloat(prompt(`¿Cuál es el precio de ${nombre}?`));
    if (isNaN(precio) || precio <= 0) {
        alert("⚠️ Por favor, ingresa un precio válido.");
        return;
    }

   
    carrito.push({ nombre, precio });
    total += precio;


    actualizarCarritoVisual();

 
    alert(`✅ ${nombre} agregado al carrito por $${precio}.`);
    console.log(`Producto agregado: ${nombre} - $${precio}`);
    console.log(`Total actual: $${total}`);
}


function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("🛒 El carrito está vacío.");
        return;
    }

 
    let mensaje = "🛍️ Productos en tu carrito:\n";
    carrito.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });
    mensaje += `\n💵 Total: $${total}`;

    alert(mensaje);
    console.log(mensaje);
}


function finalizarCompra() {
    if (carrito.length === 0) {
        alert("⚠️ No hay productos en el carrito.");
        return;
    }

 
    let presupuesto = parseFloat(prompt("💰 ¿Cuál es tu presupuesto?"));
    if (isNaN(presupuesto) || presupuesto <= 0) {
        alert("⚠️ Por favor, ingresa un presupuesto válido.");
        return;
    }


    if (total > presupuesto) {
        alert(`❌ El total de $${total} supera tu presupuesto de $${presupuesto}.`);
    } else {
        alert(`✅ ¡Compra realizada! Total: $${total}.`);
        console.log("🛍️ Productos comprados:");
        carrito.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
        });
        console.log(`💵 Total: $${total}`);
        // Vaciar el carrito
        carrito = [];
        total = 0;
        actualizarCarritoVisual();
    }
}


function actualizarCarritoVisual() {
    const listaCarrito = document.getElementById("listaCarrito");
    const totalCarrito = document.getElementById("totalCarrito");


    listaCarrito.innerHTML = "";

 
    carrito.forEach((producto) => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(li);
    });

    // Actualizar el total
    totalCarrito.textContent = total;
}





// Menú principal para interactuar con el usuario
function iniciarCarrito() {
    let opcion;

    do {
        opcion = parseInt(prompt(`Seleccione una opción:
        1️⃣ Agregar producto
        2️⃣ Ver carrito
        3️⃣ Finalizar compra
        4️⃣ Salir`));

        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarCarrito();
                break;
            case 3:
                finalizarCompra();
                break;
            case 4:
                alert("👋 Gracias por usar el carrito de compras. ¡Hasta luego!");
                break;
            default:
                alert("⚠️ Por favor, selecciona una opción válida.");
        }
    } while (opcion !== 4);
}

// Iniciar la simulación
iniciarCarrito();

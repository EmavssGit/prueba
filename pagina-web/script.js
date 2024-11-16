// Actualización de la fecha y la hora
const WEEK_DAYS = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];

function updateTime() {
    const now = new Date();
    document.getElementById("time").innerText = 
        `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    document.getElementById("date").innerText = 
        `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${WEEK_DAYS[now.getDay()]}`;
}

setInterval(updateTime, 1000);
updateTime(); // Llamada inicial

// Función para agregar al carrito
let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    alert(`${nombre} ha sido agregado al carrito`);
    guardarCarrito();
}

// Guardar carrito en el almacenamiento local
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Cargar el carrito desde el almacenamiento local (para la página del carrito)
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
}

// Ejecuta al cargar la página del carrito
cargarCarrito();

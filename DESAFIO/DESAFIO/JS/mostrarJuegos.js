import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

// Crear tarjeta de juego
function crearCard(titulo, precio, imagen, id) {
    const juego = document.createElement('div');
    juego.className = 'card';
    juego.setAttribute('data-id', id); // Agregar un atributo data-id para identificar la tarjeta

    juego.innerHTML = `
        <div> 
            <img class="imagencard" src="${imagen}" alt="imagen-juego"> 
            <h3>${titulo}</h3> 
            <div class="precio"> 
                ${precio} 
                <img src="./img/basura.png" alt="icono-eliminar" class="img-eliminar" data-basura> 
            </div>
        </div>
    `;

    // Agregar evento para eliminar tarjeta
    const botonEliminar = juego.querySelector("[data-basura]");
    botonEliminar.addEventListener("click", () => eliminarJuego(id, juego));

    return juego;
}

// Función para listar juegos
async function listarJuegos() { 
    const listaAPI = await conexionAPI.listarJuegos();
    listaAPI.forEach(juego => {
        lista.appendChild(crearCard(juego.Titulo, juego.precio, juego.imagen, juego.id));
    });
}

// Función para eliminar juego
async function eliminarJuego(id, tarjeta) {
    try {
        // Realizar la solicitud DELETE al servidor
        await fetch(`http://localhost:3001/videojuegos/${id}`, {
            method: "DELETE",
        });

        // Eliminar la tarjeta del DOM
        tarjeta.remove();
        console.log(`Juego con ID ${id} eliminado correctamente.`);
    } catch (error) {
        console.error(`Error al eliminar el juego con ID ${id}:`, error);
        alert("Hubo un problema al eliminar el juego. Inténtalo nuevamente.");
    }
}

// Llamar a la función para listar los juegos al cargar la página
listarJuegos();
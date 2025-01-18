import { conexionAPI } from "./conexionAPI.js"; // Exportación nombrada


const formulario = document.querySelector("[data-formulario]");

const botonReset = formulario.querySelector(".boton2");


async function crearJuego (evento) {    
    evento.preventDefault();
     const titulo = document.querySelector("[data-titulo]").value;
     const precio = document.querySelector("[data-precio]").value;
     const imagen = document.querySelector("[data-imagen]").value;

    const precios = `${precio}`;

    await conexionAPI.enviarJuego(titulo, precio, imagen);

    window.location.href = 'index.html';

    }

    formulario.addEventListener('submit', evento => crearJuego(evento));


    // Función para resetear los datos del formulario
function resetearFormulario(evento) {
    evento.preventDefault(); // Evita el comportamiento predeterminado del botón si quieres personalizar el reseteo

    // Opcional: Establecer los valores de los inputs a vacío
    formulario.querySelector("[data-titulo]").value = "";
    formulario.querySelector("[data-precio]").value = "";
    formulario.querySelector("[data-imagen]").value = "";

    console.log("Formulario reseteado.");
}

// Escucha del evento 'click' en el botón Reset
botonReset.addEventListener("click", resetearFormulario);
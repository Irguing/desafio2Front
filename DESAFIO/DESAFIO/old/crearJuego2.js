import { juego } from "./juegos.js";

const formulario = document.querySelector("[data-formulario]");

async function crearJuego (titulo, precio, imagen) {    
    event.preventDefault();
     titulo = document.querySelector("[data-titulo]").value;
     precio = document.querySelector("[data-precio]").value;
     imagen = document.querySelector("[data-imagen]").value;

    const precioFormatted = `${precio}`;

    juego.enviarJuego(titulo, precioFormatted, imagen);

    }

    formulario.addEventListener('submit', crearJuego);

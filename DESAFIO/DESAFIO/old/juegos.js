import { videojuegos } from "./script.js";



const lista = document.querySelector("[data-lista]");

function crearCard (titulo, precio, imagen) {
    const juego = document.createElement('div');
    juego.className = 'card';
    juego.innerHTML = `<div> <img class="imagencard" src="${imagen}" alt="imagen-juego"> 
                        <h3>${titulo}</h3> <div class="precio"> ${precio} <img src="./img/basura.png" alt="icono-eliminar" class="img-eliminar"> </div>`;

                    return juego;
}

async function mostrarJuegos () {
    const listaJuegos = await videojuegos.subirJuegos();

    listaJuegos.forEach(juego => {lista.appendChild(crearCard(juego.Titulo, juego.precio, juego.imagen))});
    }

    mostrarJuegos ();

//Mostrar nombre de archivo en el botón de subir archivo

    const inputFile = document.getElementById('archivo');
        const label = document.querySelector('.custom-file-label');

        inputFile.addEventListener('change', (event) => {
            const fileName = event.target.files[0]?.name || 'Subir Archivo';
            label.textContent = fileName; // Cambiar el texto del botón
        });

        export { videojuegos};
       


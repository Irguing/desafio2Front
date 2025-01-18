// Subir juegos

async function subirJuegos () {
    const conexion = await fetch('http://localhost:3001/videojuegos');
    const datos = conexion.json();
    //console.log (datos);

    return datos;
}

export const videojuegos ={
subirJuegos
}


async function CrearJuego (Titulo, precio, imagen) {
    await videojuegos.fetch('http://localhost:3001/videojuegos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Titulo: Titulo,
            precio: `${precio}`,
            imagen: imagen
        })
    })
    const datos = await videojuegos.json();
    return datos;
}

export const conexionAPI = {
    subirJuegos,CrearJuego
}

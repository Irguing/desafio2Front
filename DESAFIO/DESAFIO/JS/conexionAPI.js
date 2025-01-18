async function listarJuegos () {
    const conexion = await fetch('http://localhost:3001/videojuegos');
    const conexionConvertida = await conexion.json();
    console.log (conexionConvertida);

    return conexionConvertida;
}

async function enviarJuego (Titulo, precio, imagen) {
    const conexion = await fetch('http://localhost:3001/videojuegos',  {
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
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    }
export const conexionAPI = {
    listarJuegos,enviarJuego
}
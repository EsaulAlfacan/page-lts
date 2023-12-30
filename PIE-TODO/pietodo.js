function cambiarColoresLetras() {
    const letrasIndividuales = document.querySelectorAll('.letras-individual span');
    const coloresEspecificos = ["#852362", "#005089", "#708c32", "#f2cb05", "#fff", "708c32"];
    const coloresAleatorios = obtenerColoresAleatorios(letrasIndividuales.length, coloresEspecificos);

    letrasIndividuales.forEach(function (letra, index) {
        letra.style.color = coloresAleatorios[index];
    });
}

function obtenerColoresAleatorios(length, colores) {
    const coloresAleatorios = [];
    while (coloresAleatorios.length < length) {
        const colorIndex = Math.floor(Math.random() * colores.length);
        coloresAleatorios.push(colores[colorIndex]);
        colores.splice(colorIndex, 1); // Evita la repetición del mismo color
    }
    return coloresAleatorios;
}

// Cambia los colores cada 1 segundos (1000 milisegundos)
setInterval(cambiarColoresLetras, 1500);


/* =================================
   1. LISTAS DE IMÁGENES
   ================================= */

// Cabezas disponibles
const listaCabezas = [
    "imagenes/Poses/cabeza 1.png",
    "imagenes/Poses/cabeza 2.png",
    "imagenes/Poses/cabeza 3.png"
    "imagenes/Poses/cabeza 4.png"
];

// Troncos disponibles
const listaTroncos = [
    "imagenes/Poses/torso 1.png",
    "imagenes/Poses/torso 2.png",
    "imagenes/Poses/torso 3.png"
    "imagenes/Poses/torso 4.png"
];

// Piernas disponibles
const listaPiernas = [
    "imagenes/Poses/piernas 1.png",
    "imagenes/Poses/piernas 2.png",
    "imagenes/Poses/piernas 3.png"
    "imagenes/Poses/piernas 4.png"
    "imagenes/Poses/piernas 5.png"
];


/* =================================
   2. CONECTAR CON EL HTML
   ================================= */

const cabeza = document.getElementById("imagenCabeza");
const tronco = document.getElementById("imagenTorso");
const patas = document.getElementById("imagenPiernas");
const boton = document.getElementById("boton");


/* =================================
   3. ELEGIR UN NÚMERO ALEATORIO
   ================================= */

function numeroAleatorio(maximo) {
    return Math.floor(Math.random() * maximo);
}


/* =================================
   4. GENERAR UNA NUEVA CRIATURA
   ================================= */

function generarBestia() {

    // Elegir una imagen aleatoria para cada cuadro
    const cabezaAleatoria =
        listaCabezas[numeroAleatorio(listaCabezas.length)];

    const troncoAleatorio =
        listaTroncos[numeroAleatorio(listaTroncos.length)];

    const patasAleatorias =
        listaPiernas[numeroAleatorio(listaPiernas.length)];

    // Mostrar las imágenes elegidas
    cabeza.src = cabezaAleatoria;
    tronco.src = troncoAleatorio;
    patas.src = patasAleatorias;

    // Mostrar las combinaciones en la consola
    console.log("¡Nueva criatura generada!");
    console.log("Cabeza:", cabezaAleatoria);
    console.log("Tronco:", troncoAleatorio);
    console.log("Piernas:", patasAleatorias);
}


/* =================================
   5. ACTIVAR EL BOTÓN
   ================================= */

boton.addEventListener("click", generarBestia);

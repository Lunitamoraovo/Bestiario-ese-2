
console.log("¡Script cargado correctamente!");

const listaCabezas = [
    "imagenes/poses/cabeza 1.png",
    "imagenes/poses/cabeza 2.png",
    "imagenes/poses/cabeza 3.png",
    "imagenes/poses/cabeza 4.png"
];

const listaTroncos = [
    "imagenes/poses/torso 1.png",
    "imagenes/poses/torso 2.png",
    "imagenes/poses/torso 3.png",
    "imagenes/poses/torso 4.png"
];

const listaPiernas = [
    "imagenes/poses/piernas 1.png",
    "imagenes/poses/piernas 2.png",
    "imagenes/poses/piernas 3.png",
    "imagenes/poses/piernas 4.png",
    "imagenes/poses/piernas 5.png"
];

const cabeza = document.getElementById("imagenCabeza");
const tronco = document.getElementById("imagenTorso");
const patas = document.getElementById("imagenPiernas");
const boton = document.getElementById("boton");

function numeroAleatorio(maximo) {
    return Math.floor(Math.random() * maximo);
}

function generarBestia() {
    console.log("¡Se pulsó el botón!");

    cabeza.src = listaCabezas[numeroAleatorio(listaCabezas.length)];
    tronco.src = listaTroncos[numeroAleatorio(listaTroncos.length)];
    patas.src = listaPiernas[numeroAleatorio(listaPiernas.length)];
}

if (boton) {
    boton.addEventListener("click", generarBestia);
    console.log("¡Botón conectado!");
} else {
    console.error("No se encontró el botón en el HTML.");
}

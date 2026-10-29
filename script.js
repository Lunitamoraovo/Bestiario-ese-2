
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



/* =================================
   GENERADOR ALEATORIO DE OC
   ================================= */

// Opciones para cada característica
const coloresPiel = [
    "Piel muy clara",
    "Piel morena",
    "Piel oscura",
    "Piel azul",
    "Piel verde",
    "Piel morada",
    "Piel rojiza",
    "Piel gris"
];

const tiposCabello = [
    "Cabello corto",
    "Cabello largo",
    "Cabello rizado",
    "Cabello liso",
    "Cabello ondulado",
    "Cabello despeinado",
    "Cabello en trenzas",
    "Cabello en coleta",
    "Sin pelo"
];

const tiposOjos = [
    "imagenes/poses/cabeza 1.png",
    "Ojos verdes",
    "Ojos dorados",
    "Ojos rojos",
    "Ojos violetas",
    "Ojos completamente negros",
    "Heterocromía",
    "Ojos brillantes",
    "Tres ojos",
    "Multiples ojos"
];

const listaAccesorios = [
    "Gafas redondas",
    "Bufanda",
    "Pendientes largos",
    "Un collar misterioso",
    "Un sombrero",
    "Una diadema",
    "Un parche en el ojo",
    "Varios piercings",
    "Sin accesorios"
];

const rasgosEspeciales = [
    "Cuernos pequeños",
    "Alas",
    "Una cola",
    "Ninguno",
    "Pecas",
    "Cicatrices",
    "Orejas puntiagudas",
    "Marcas mágicas",
    "Ninguno"
];


// Elegir una opción al azar
function elegirOpcion(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}


// Conectar el botón y los cuadros
const botonOC = document.getElementById("botonOC");

const cuadroPiel = document.getElementById("piel");
const cuadroCabello = document.getElementById("cabello");
const cuadroOjos = document.getElementById("ojos");
const cuadroAccesorios = document.getElementById("accesorios");
const cuadroRasgo = document.getElementById("rasgo");


// Generar las cinco características
function generarOC() {
    cuadroPiel.textContent = elegirOpcion(coloresPiel);
    cuadroCabello.textContent = elegirOpcion(tiposCabello);
    cuadroOjos.textContent = elegirOpcion(tiposOjos);
    cuadroAccesorios.textContent = elegirOpcion(listaAccesorios);
    cuadroRasgo.textContent = elegirOpcion(rasgosEspeciales);
}


// Activar el generador de OC
botonOC.addEventListener("click", generarOC);

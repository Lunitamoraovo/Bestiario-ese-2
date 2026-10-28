
console.log("¡SCRIPT CARGADO!");

const boton = document.getElementById("boton");

if (boton) {
    boton.addEventListener("click", function () {
        alert("¡El botón funciona y JavaScript está conectado!");
    });
} else {
    alert("No encuentro el botón en el HTML.");
}


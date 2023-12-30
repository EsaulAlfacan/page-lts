document.addEventListener("DOMContentLoaded", function() {
    const botonSuerte = document.getElementById("botonSuerte");
    const menuCantidad = document.querySelector(".menu-cantidad");
    const opcionesCantidad = document.querySelectorAll(".menu-cantidad li");

    // Función para ocultar el menú
    function ocultarMenu() {
        menuCantidad.style.display = "none";
    }

    // Manejador de evento para mostrar el menú al hacer clic en el botón "Boletos a la suerte"
    botonSuerte.addEventListener('click', () => {
        if (menuCantidad.style.display === "none" || menuCantidad.style.display === "") {
            menuCantidad.style.display = "block"; // Muestra el menú
        } else {
            menuCantidad.style.display = "none"; // Oculta el menú
        }
    });

    // Manejador de evento para ocultar el menú cuando se selecciona un número
    opcionesCantidad.forEach(opcion => {
        opcion.addEventListener('click', () => {
            ocultarMenu();
        });
    });
});

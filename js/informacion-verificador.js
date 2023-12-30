document.addEventListener("DOMContentLoaded", function() {
    const btnBuscar = document.getElementById("btnBuscar");
    const campoBusqueda = document.getElementById("campoBusqueda");
    const informacionObtenida = document.querySelector(".informacion-obtenida");
    const tabla = document.querySelector(".tabla-boletos table");
  
    btnBuscar.addEventListener("click", function() {
      const textoBusqueda = campoBusqueda.value.toLowerCase();
      const filas = tabla.querySelectorAll("tbody tr");
  
      filas.forEach(function(fila) {
        fila.style.display = "none";
  
        const celdas = fila.querySelectorAll("td");
  
        celdas.forEach(function(celda) {
          if (celda.textContent.toLowerCase().includes(textoBusqueda)) {
            fila.style.display = "table-row";
          }
        });
      });
  
      informacionObtenida.textContent = "Resultados de la búsqueda: " + textoBusqueda;
    });
  });
  
document.getElementById("refreshButton").addEventListener("click", function () {
  // Método 1: Agregar parámetros aleatorios y marca de tiempo a la URL
  var randomParam = Math.random().toString(36).substring(7);
  var url1 = window.location.href + "?nocache=" + randomParam + "&timestamp=" + new Date().getTime();

  // Método 2: Cambiar la URL sin parámetros
  window.location.hash = new Date().getTime();
  document.cookie = "nocache=true;expires=" + new Date(0).toUTCString() + ";path=/";

  // Método 3: Usar sessionStorage
  sessionStorage.clear();

  // Método 4: Eliminar todas las cookies
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
  });

  // Recargar la página con el Método 1 (puedes cambiar a otro método si lo prefieres)
  window.location.href = url1;

  // Mostrar la alerta
  mostrarAlertaPrimeraVez();
});

var alertaMostrada = false;

function mostrarAlertaPrimeraVez() {
  if (!alertaMostrada) {
    alert("¡Para asegurarnos de que obtenga los mejores boletos, por favor haga clic en 'Actualizar lista de boletos'. Luego, podrá seleccionar sus boletos. ¡Gracias! 😄🎉");
    alertaMostrada = true; // Marcar que la alerta ya se ha mostrado
  }
}

// Obtén todos los elementos con la clase "refresh-trigger"
var refreshElements = document.querySelectorAll('.refresh-trigger');

// Agrega un controlador de eventos a cada elemento
refreshElements.forEach(function (element) {
  element.addEventListener("input", mostrarAlertaPrimeraVez);
});

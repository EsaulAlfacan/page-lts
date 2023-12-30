document.addEventListener("DOMContentLoaded", function () {
  // Selección de elementos del DOM
  const listaDeBoletos = document.getElementById("lista-de-boletos");
  const listaDeBoletosSeleccionados = document.querySelector(".lista-de-boletos-seleccionados");
  const menuCantidad = document.querySelector(".menu-cantidad ul");
  const inputNumero = document.getElementById("numero");
  const listaDeBoletosBuscados = document.querySelector(".lista-de-boletos-buscados");

  // Función para crear un nuevo botón de boleto
  function crearBoton(numeroFormateado) {
    const boton = document.createElement("button");
    boton.textContent = numeroFormateado;
    boton.classList.add("boton-boleto");
    return boton;
  }

  // Función para generar boletos aleatorios
  function generarBoletosAleatorios(cantidad) {
    const indicesAleatorios = Array.from({ length: cantidad }, () => Math.floor(Math.random() * 60000));
    listaDeBoletosSeleccionados.innerHTML = "";
    indicesAleatorios.forEach(indice => {
      const boton = listaDeBoletos.children[indice].cloneNode(true);
      listaDeBoletosSeleccionados.appendChild(boton);
      boton.disabled = false;
    });
  }

  // Función para buscar un boleto por su número
  function buscarBoleto(numeroBuscado) {
    listaDeBoletosBuscados.innerHTML = "";
    const botones = listaDeBoletos.getElementsByClassName("boton-boleto");
    let contador = 0;

    Array.from(botones).forEach(boton => {
      if (contador < 5 && boton.textContent.includes(numeroBuscado)) {
        const botonClonado = boton.cloneNode(true);
        listaDeBoletosBuscados.appendChild(botonClonado);
        contador++;
      }
    });
  }

  // Función para verificar si un boleto ya está seleccionado
  function esBoletoRepetido(numeroBoleto, container) {
    const botones = container.getElementsByClassName("boton-boleto");
    for (let i = 0; i < botones.length; i++) {
      if (botones[i].textContent === numeroBoleto) {
        return true;
      }
    }
    return false;
  }

  // Función para ordenar y eliminar boletos duplicados
  function ordenarYEliminarDuplicados(container) {
    const botones = Array.from(container.getElementsByClassName("boton-boleto"));
    const numerosVistos = new Set();
    container.innerHTML = "";
    botones.sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(boton => {
      if (!numerosVistos.has(boton.textContent)) {
        numerosVistos.add(boton.textContent);
        container.appendChild(boton);
      }
    });
  }

  // Función para eliminar un boleto seleccionado
  function eliminarBoletoSeleccionado(numeroBoleto) {
    const botonesSeleccionados = listaDeBoletosSeleccionados.getElementsByClassName("boton-boleto");
    for (let i = 0; i < botonesSeleccionados.length; i++) {
      if (botonesSeleccionados[i].textContent === numeroBoleto) {
        listaDeBoletosSeleccionados.removeChild(botonesSeleccionados[i]);
        return;
      }
    }
  }

  // Función para marcar boletos según números específicos
  function marcarBotonesPorNumeros(numeros) {
    const botones = Array.from(listaDeBoletos.getElementsByClassName("boton-boleto"));
    botones.forEach(boton => {
      if (numeros.includes(boton.textContent)) {
        boton.addEventListener("click", function () {
          alert("Boleto no disponible: " + boton.textContent);
        });
        boton.style.backgroundColor = "red";
        boton.style.color = "red";
        boton.style.cursor = "default";
        boton.disabled = true;
      }
    });
  }

  // Función para marcar los boletos comprados
  function marcarBotonesComprados(numerosComprados) {
    const botones = Array.from(listaDeBoletos.getElementsByClassName("boton-boleto"));
    botones.forEach(boton => {
      if (numerosComprados.includes(boton.textContent)) {
        boton.style.backgroundColor = "red";
        boton.style.color = "red";
        boton.style.cursor = "default";
        boton.disabled = true;

        // Restablece el estilo después de una hora
        setTimeout(function () {
          boton.style.backgroundColor = "";
          boton.style.color = "";
          boton.style.cursor = "pointer";
          boton.disabled = false;
        }, 3600000);
      }
    });
  }

  // Función para registrar la compra de boletos
  function registrarBoletosComprados() {
    const boletosSeleccionados = Array.from(listaDeBoletosSeleccionados.getElementsByClassName("boton-boleto"));
    const numerosComprados = boletosSeleccionados.map(boton => boton.textContent);
    marcarBotonesComprados(numerosComprados);
    console.log("Boletos comprados:", numerosComprados);
    listaDeBoletosSeleccionados.innerHTML = "";
  }

  // Creación inicial de botones de boleto
  const fragmento = document.createDocumentFragment();
  for (let i = 0; i < 60000; i++) {
    const numeroFormateado = i.toString().padStart(5, "0");
    fragmento.appendChild(crearBoton(numeroFormateado));
  }
  listaDeBoletos.appendChild(fragmento);


  // Eventos para la interacción con el usuario
  listaDeBoletos.addEventListener("click", function (event) {
    const botonSeleccionado = event.target;
    if (botonSeleccionado.classList.contains("boton-boleto") && !botonSeleccionado.classList.contains("boton-boleto-seleccionado")) {
      botonSeleccionado.classList.add("boton-boleto-seleccionado");
      const botonClonado = botonSeleccionado.cloneNode(true);
      listaDeBoletosSeleccionados.appendChild(botonClonado);
    }
  });

  menuCantidad.addEventListener("click", function (event) {
    const cantidadSeleccionada = event.target.getAttribute("data-cantidad");
    if (cantidadSeleccionada) {
      generarBoletosAleatorios(parseInt(cantidadSeleccionada));
      ordenarYEliminarDuplicados(listaDeBoletosSeleccionados);
    }
  });

  inputNumero.addEventListener("input", function (event) {
    const numeroBuscado = event.target.value;
    buscarBoleto(numeroBuscado);
  });

  listaDeBoletosBuscados.addEventListener("click", function (event) {
    const botonSeleccionado = event.target;
    if (botonSeleccionado.classList.contains("boton-boleto")) {
      if (!esBoletoRepetido(botonSeleccionado.textContent, listaDeBoletosSeleccionados)) {
        const botonClonado = botonSeleccionado.cloneNode(true);
        listaDeBoletosSeleccionados.appendChild(botonClonado);
        ordenarYEliminarDuplicados(listaDeBoletosSeleccionados);
      } else {
        alert("Boleto ya seleccionado");
      }
    }
  });

  listaDeBoletosSeleccionados.addEventListener("click", function (event) {
    const botonSeleccionado = event.target;
    if (botonSeleccionado.classList.contains("boton-boleto")) {
      const numeroBoleto = botonSeleccionado.textContent;
      eliminarBoletoSeleccionado(numeroBoleto);
    }
  });

  // Configuración del botón de compra
  const botonComprar = document.getElementById("botonComprar");
  if (botonComprar) {
    botonComprar.addEventListener("click", function () {
      registrarBoletosComprados();
    });
  }

  // Marcar boletos como vendidos al inicio
  marcarBotonesPorNumeros([
    // Lista de números de boletos vendidos
    "00000", "00004", "00005", "00009", "00029",
    "00090", "00014", "00015", "00019", "00069",

  ]);

  // Ocultar overlay después de 2 segundos
  setTimeout(function () {
    overlay.style.display = "none";
  }, 2000);
});

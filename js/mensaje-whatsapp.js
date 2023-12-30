document.getElementById("botonComprar").addEventListener("click", function() {
    // Obtener los valores introducidos en los campos
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var estado = document.getElementById("estado").value;
    var telefono = document.getElementById("telefono").value;
    var textomas = "¡ɴᴏ ᴘɪᴇʀᴅᴀꜱ ᴛɪᴇᴍᴘᴏ! RECUERDA QUE TUS BOLETOS SOLO SE QUITARAN DE LA LISTA DE PÚBLICA AL MOMENTO DE COMPROBAR TU PAGO. ʀᴇᴄᴜᴇʀᴅᴀ ᴇɴᴠɪᴀʀɴᴏꜱ ᴜɴᴀ ꜰᴏᴛᴏ o ᴄᴀᴘᴛᴜʀᴀ ᴅᴇ ᴛᴜ ᴄᴏᴍᴘʀᴏʙᴀɴᴛᴇ ᴅᴇ ᴘᴀɢᴏ ᴀ ᴇꜱᴛᴇ ɴÚᴍᴇʀᴏ. ¡ʙᴜᴇɴᴀ ꜱᴜᴇʀᴛᴇ!"+"\n"+"ʀᴇᴄᴜᴇʀᴅᴀ Quᴇ ᴘᴜᴇᴅᴇꜱ ᴠᴇʀɪꜰɪᴄᴀʀ ɴᴜᴇꜱᴛʀᴀꜱ ᴄᴜᴇɴᴛᴀꜱ ᴘᴀʀᴀ ᴅᴇᴘᴏꜱɪᴛᴏꜱ o ᴛʀᴀɴꜱꜰᴇʀᴇɴᴄɪᴀꜱ ᴇɴ ᴇʟ ꜱɪɢᴜɪᴇɴᴛᴇ ᴇɴʟᴀᴄᴇ:"+"\n"+"https://loteriadeltrebolsolidario.website/"+"\n"
    var cuentas ="Pueder hacer tu pago de la siguiente forma:"+"\n"+"Transferencia: 1273 1201 3870 1124 30 "+"\n"+"Depósito:  4027 6658 0765 4810"

    // Verificar si algún campo está vacío
    if (nombre === "" || apellido === "" || estado === "" || telefono === "") {
        alert("Falta información. Por favor, complete todos los campos.");
        return; // No continúa si falta información
    }

    // Obtener los números de los boletos seleccionados
    var boletosSeleccionados = obtenerNumerosDeBoletosSeleccionados();

    // Crear el mensaje con la información del usuario y los números de boletos
    var mensaje = textomas+"\n";
    mensaje += cuentas+"\n"+"\n";
    mensaje += "Nombre: " + nombre + "\n";
    mensaje += "Apellido: " + apellido + "\n";
    mensaje += "Estado: " + estado + "\n";
    mensaje += "Teléfono: " + telefono+ "\n"+"\n";

    if (boletosSeleccionados.length > 0) {
        mensaje += "Boletos Seleccionados:\n";
        mensaje += boletosSeleccionados.join(",");
    }

    // Crear el enlace de WhatsApp con el mensaje
    var numeroDeWhatsApp = "7751614422"; // Reemplaza con el número de WhatsApp al que deseas enviar el mensaje
    var enlaceDeWhatsApp = "https://wa.me/" + numeroDeWhatsApp + "?text=" + encodeURIComponent(mensaje);

    // Redirigir a WhatsApp
    window.open(enlaceDeWhatsApp, "_blank");
});

// Función para obtener los números de boletos seleccionados
function obtenerNumerosDeBoletosSeleccionados() {
    var numerosDeBoletos = [];
    var botonesSeleccionados = document.querySelectorAll(".lista-de-boletos-seleccionados .boton-boleto");
    botonesSeleccionados.forEach(function(boton) {
        numerosDeBoletos.push(boton.textContent);
    });
    return numerosDeBoletos;
}


function copyToClipboard(elementId) {
  var inputElement = document.getElementById(elementId);
  inputElement.select();
  inputElement.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand("copy");
  // alert("Número de teléfono copiado al portapapeles: " + inputElement.value);
}

function conductorRespuesta() {
    // Redireccionar a la página deseada
    window.location.href = './ofrezcoResultados.html';
}

function pasajeroRespuesta() {
    // Redireccionar a la página deseada
    window.location.href = './buscoResultados.html';
}
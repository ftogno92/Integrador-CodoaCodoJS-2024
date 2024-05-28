document.getElementById('whatsapp-btn').addEventListener('click', function () {
    var numCelular = document.getElementById('telefono1').value;
    if(numCelular){
        var whatsappUrl = 'https://wa.me/' + numCelular + "?text=Hola,%20necesito%20más%20información%20sobre%20tu%20viaje";
        window.open(whatsappUrl, '_blank');
    }else{
        alert('número no encontrado')
    }
})
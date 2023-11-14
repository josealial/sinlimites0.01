// contacto.js

// Función para inicializar el mapa
function initMap() {
    // Coordenadas del gimnasio (puedes ajustarlas según la ubicación real)
    var gimnasioLocation = { lat: -34.397, lng: 150.644 };

    // Crea el mapa
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: gimnasioLocation,
        zoom: 15
    });

    // Coloca un marcador en el mapa
    var marker = new google.maps.Marker({
        position: gimnasioLocation,
        map: map,
        title: 'Gimnasio Sin Límites'
    });
}

// Función para enviar el formulario de contacto por correo electrónico
function enviarFormulario() {
    // Aquí puedes agregar lógica para enviar el formulario, por ejemplo, utilizando AJAX.
    // Puedes utilizar servicios de backend para procesar y enviar el correo electrónico.
    alert('¡Formulario enviado! (Esta es solo una simulación, implementa la lógica del servidor real)');
}

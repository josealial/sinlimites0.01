// actividades.js

var actividades = [
    { nombre: "Spinning", descripcion: "Ejercicio cardiovascular en bicicleta estática.", intensidad: "Alta", dificultad: "Media" },
    { nombre: "Zumba Tonic", descripcion: "Baile aeróbico con ritmos latinos y ejercicios tonificantes.", intensidad: "Media", dificultad: "Baja" },
    { nombre: "Jumping", descripcion: "Ejercicios de salto sobre una cama elástica.", intensidad: "Alta", dificultad: "Alta" },
    { nombre: "Zumba", descripcion: "Baile aeróbico con ritmos y coreografías variadas.", intensidad: "Media", dificultad: "Baja" },
    { nombre: "Local", descripcion: "Entrenamiento de fuerza enfocado en grupos musculares específicos.", intensidad: "Media", dificultad: "Media" },
    { nombre: "GAP 30' minutos", descripcion: "Entrenamiento enfocado en glúteos, abdominales y piernas en 30 minutos.", intensidad: "Alta", dificultad: "Media" },
    { nombre: "Local MS", descripcion: "Entrenamiento de fuerza con máquinas y pesas.", intensidad: "Media", dificultad: "Alta" },
    { nombre: "Funcional", descripcion: "Ejercicios que imitan los movimientos naturales del cuerpo.", intensidad: "Alta", dificultad: "Alta" },
    { nombre: "Aerointense", descripcion: "Aeróbicos intensos para mejorar la resistencia cardiovascular.", intensidad: "Alta", dificultad: "Alta" },
    { nombre: "Aerobox", descripcion: "Combinación de aeróbicos y boxeo para mejorar la resistencia y la coordinación.", intensidad: "Alta", dificultad: "Alta" },
];

// Función para mostrar las tarjetas de actividades
function mostrarTarjetas() {
    var container = document.querySelector('.container');
    actividades.forEach(function (actividad) {
        var cardHtml = '<div class="card mt-3">';
        cardHtml += '<div class="card-body">';
        cardHtml += '<h5 class="card-title">' + actividad.nombre + '</h5>';
        cardHtml += '<p class="card-text"><strong>Descripción:</strong> ' + actividad.descripcion + '</p>';
        cardHtml += '<p class="card-text"><strong>Intensidad:</strong> ' + actividad.intensidad + '</p>';
        cardHtml += '<p class="card-text"><strong>Dificultad:</strong> ' + actividad.dificultad + '</p>';
        cardHtml += '</div>';
        cardHtml += '</div>';

        container.innerHTML += cardHtml;
    });
}

// Llama a la función al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    mostrarTarjetas();
});

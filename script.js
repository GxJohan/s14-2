// Esperar a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón por su ID utilizando el DOM
    const boton = document.getElementById('boton');

    // Agregar un evento de clic al botón
    boton.addEventListener('click', function() {
        // Seleccionar el elemento del párrafo utilizando el DOM
        const parrafo = document.getElementById('parrafo');
        
        // Modificar el contenido del párrafo
        parrafo.textContent = 'El texto ha sido cambiado usando el DOM.';
        
        // Seleccionar el título y cambiar su color como otra manipulación del DOM
        const titulo = document.getElementById('titulo');
        titulo.style.color = 'blue';
    });
});

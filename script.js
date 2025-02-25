document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener referencias a elementos del DOM
    const darkModeToggle = document.getElementById('darkModeToggle'); // Botón para alternar el modo oscuro
    const body = document.body; // Elemento body de la página
    const projectCards = document.querySelectorAll('.project-card'); // Todas las tarjetas de proyectos
    const developerName = document.querySelector('.developer-name'); // Nombre del desarrollador

    // 2. Modo oscuro
    darkModeToggle.addEventListener('click', () => { // Agregar un evento click al botón de modo oscuro
        body.classList.toggle('dark-mode'); // Alternar la clase 'dark-mode' en el body
        // Cambiar el icono basado en el modo
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Cambiar a icono de sol si está en modo oscuro
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Cambiar a icono de luna si está en modo claro
        }
    });

    // 3. Animación de latido en tarjetas de proyectos
    projectCards.forEach(card => { // Iterar sobre cada tarjeta de proyecto
        card.addEventListener('mouseover', () => { // Agregar un evento mouseover a la tarjeta
            card.style.animation = 'heartbeat 1.5s ease infinite'; // Iniciar la animación de latido
        });
        card.addEventListener('mouseout', () => { // Agregar un evento mouseout a la tarjeta
            card.style.animation = ''; // Detener la animación de latido
        });
    });

    // 4. Animación del nombre del desarrollador
    developerName.style.animation = 'fadeIn 2s ease-in-out'; // Aplicar la animación fadeIn al nombre del desarrollador
});
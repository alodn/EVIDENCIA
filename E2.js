document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('show-content');
});

    function showContent() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight) {
                section.classList.add('show');
            } else {
                section.classList.remove('show'); // Elimina la clase si la sección está fuera de la vista
            }
        });
    }

    // Mostrar contenido cuando se carga la página con un efecto suave
    showContent();

    // Mostrar contenido mientras se desplaza hacia abajo con un efecto suave
    window.addEventListener('scroll', function() {
        showContent();
    });
});
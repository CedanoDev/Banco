document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Función para activar el estilo en el enlace de la página actual
    function setActiveLink() {
        // Obtiene el nombre del archivo actual (ej: "index.html", "about.html")
        const currentPath = window.location.pathname.split('/').pop();

        navLinks.forEach(link => {
            // Quita la clase 'active' de todos
            link.classList.remove('active'); 

            // Determina qué enlace debe estar activo
            const linkHref = link.getAttribute('href');
            
            if (linkHref === currentPath) {
                link.classList.add('active');
            } 
            // Maneja el caso de la página principal (index.html), ya sea que la URL termine en "/" o en "index.html"
            else if (currentPath === '' && linkHref === 'index.html') {
                link.classList.add('active');
            }
        });
    }

    // Llama a la función al cargar la página
    setActiveLink();
    
    console.log('Banco O.K.J Dominicano: Interacción de menú y lógica de JS cargada.');
});
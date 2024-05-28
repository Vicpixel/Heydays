// Selecciona el elemento del header
const header = document.querySelector('header');

// Obtiene la posición inicial del header
const stickyOffset = header.offsetTop;

window.addEventListener('scroll', () => {
    // Compara la posición de scroll con la posición del header
    if (window.pageYOffset > stickyOffset) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

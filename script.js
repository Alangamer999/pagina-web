function mostrarMensaje() {
    alert("¡Hola! Esto es JavaScript en acción.");
}
// Ejemplo: Cambiar color al hacer clic
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', () => {
        alert('Navegando a ' + link.textContent);
    });
});

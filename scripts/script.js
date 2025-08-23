const logo = document.getElementById('logo');

function ocultarImagen(elemento) {
    setTimeout(() => {
        if (elemento) {
            elemento.style.display = 'none';
        }
    }, 2000);
}

window.onload = () => {
    ocultarImagen(logo); 
};
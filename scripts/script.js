const logoP = document.getElementById('logoP');

function ocultarImagen(elemento) {
    setTimeout(() => {
        if (elemento) {
            elemento.style.display = 'none';
        }
    }, 3000);
}

window.onload = () => {
    ocultarImagen(logoP); 
};
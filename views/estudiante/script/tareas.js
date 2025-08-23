const modalEnviar = document.getElementById('modalEnviar');
const modalExito = document.getElementById('modalExito');
const cerrarModal = document.getElementsByClassName('cerrarModal')[0];
const btnComenzar = document.querySelector('.entregaTarea a');
const btnEnviarTarea = document.getElementById('btnEnviarMensaje');
const btnRegresar = document.getElementById('btnRegresar');

btnComenzar.addEventListener('click', function (event) {
    event.preventDefault();
    modalEnviar.style.display = 'block';
});

cerrarModal.addEventListener('click', function () {
    modalEnviar.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modalEnviar) {
        modalEnviar.style.display = 'none';
    }
    if (event.target === modalExito) {
        modalExito.style.display = 'none';
    }
});

btnEnviarTarea.addEventListener('click', function () {
    modalEnviar.style.display = 'none';
    modalExito.style.display = 'block';
});

btnRegresar.addEventListener('click', function () {
    modalExito.style.display = 'none';
});
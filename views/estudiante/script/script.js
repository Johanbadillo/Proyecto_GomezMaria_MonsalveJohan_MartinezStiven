const modalMensajeDocente = document.getElementById('modalMensajeDocente');
const cerrarModal = document.getElementsByClassName('cerrarModal')[0];
const btnEnviarMensajeDocente = document.querySelector('.Notificaciones a');
const modalExito = document.getElementById('modalExito');
const btnRegresar = document.getElementById('btnRegresar');
const btnEnviarMensaje = document.getElementById('btnEnviarMensaje');

btnEnviarMensajeDocente.addEventListener('click', function (event) {
    event.preventDefault();
    modalMensajeDocente.style.display = 'block';
});

cerrarModal.addEventListener('click', function () {
    modalMensajeDocente.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modalMensajeDocente) {
        modalMensajeDocente.style.display = 'none';
    }
});

btnEnviarMensaje.addEventListener('click', function () {
    modalMensajeDocente.style.display = 'none';
    modalExito.style.display = 'block';
});

btnRegresar.addEventListener('click', function () {
    modalExito.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modalExito) {
        modalExito.style.display = 'none';
    }
});
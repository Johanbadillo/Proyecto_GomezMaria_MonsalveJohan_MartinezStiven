const logo = document.getElementById('logo');
const formulario = document.getElementsByClassName('formulario')[0];
const user = document.getElementById('user');
const password = document.getElementById('password');

function ocultarImagen(elemento) {
    setTimeout(() => {
        if (elemento) {
            elemento.style.display = 'none';
        }
    }, 2000);
}

function manejarInicio(e) {
    e.preventDefault();
    const nombre = user.value;
    const contrasena = password.value;

    fetch(`https://689e120e3fed484cf8763a5c.mockapi.io/Usuarios/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(respuesta => respuesta.json())
    .then(datos => {
        if (datos.length > 0 && datos[0].tipoUsuario) {
            if (datos[0].tipoUsuario === 'estudiante') {
                window.location.href = './views/estudiante/inicio.html';
            } else if (datos[0].tipoUsuario === 'profesor') {
                window.location.href = './views/profesor/inicio.html';
            } else if (datos[0].tipoUsuario === 'admin') {
                window.location.href = './views/admin/inicio.html';
            } else {
                alert('Tipo de usuario no válido');
            }
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    })
    .catch(error => {
        console.log('Error:', error);
        alert('Error al iniciar sesión');
    });
}

window.onload = () => {
    ocultarImagen(logo);
    formulario.onsubmit = manejarInicio;
};
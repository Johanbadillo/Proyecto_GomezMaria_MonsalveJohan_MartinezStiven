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

async function fetchData() {
    const res = await fetch('https://689e120e3fed484cf8763a5c.mockapi.io/Usuarios');
    let data = await res.json();
    return data
}

async function inicio() {
    event.preventDefault()
    const nombre = document.getElementById('user').value.trim();
    const contra = document.getElementById('password').value.trim();
    const data = await fetchData();
    data.forEach(i => {
        if (i.nombre === nombre && i.contra === contra) {
            usuarioEncontrado = i
        }
    });
    if (usuarioEncontrado) {
        localStorage.setItem('usuarioEncontrado', JSON.stringify(usuarioEncontrado));
        if (usuarioEncontrado.perfil === 'estudiante') {
            window.location.href = './../views/estudiante/inicio.html'
        } else if (usuarioEncontrado.perfil === 'profesor') {
            window.location.href = './../views/docente/inicio.html'
        } else if (usuarioEncontrado.perfil === 'administrador') {
            window.location.href = './../views/administrador/inicio.html'
        }
    }
}





function inicioH( pagina = 'inicio'){
    if(pagina === 'estudiante'){
        window.location.href = './inicio.html'
    }else if(pagina === 'docente'){
        window.location.href = './inicio.html'
    }else if(pagina === 'administrador'){
        window.location.href =  './inicio.html'
    }
}

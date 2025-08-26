function mostrarPerfil(){
    const modal = document.querySelector('.modal_general');

    modal.innerHTML= `<div class="modal_perfil">
    <div class="modal_header">
        <div class="perfil2">
            <div class="indice_header">
                <img src="./media/aa.jpg" alt="perfil">
                <p>PERFIL</p>
                <a href="#" class="cerrar_modal" onclick="cerrarModal1()">&times;</a>
            </div>
            <div class="indice_content2">
                <div class="i2">
                    <a href="./perfil.html" onclick="irAPerfil('estudiante')"><button  class="button3" >Mi Perfil</button></a>
                    <a href="./../../index.html" onclick="irAInicio()"><button class="button3">Cerrar Sesion</button></a>
                </div>
            </div>
        </div>
    </div>
</div>
    `
    modal.classList.add('show')
}

function cerrarModal1() {
    const modal = document.querySelector('.modal_general');
    modal.classList.remove('show');
    modal.innerHTML = '';
}

window.onclick = function(event) {
    const modal = document.querySelector('.modal_general');
    if (event.target === modal) {
        cerrarModal1();
    }
}

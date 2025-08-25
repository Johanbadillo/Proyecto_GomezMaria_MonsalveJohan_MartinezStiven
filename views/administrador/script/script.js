function mostrarSeccion(id) {
  // Ocultar el menú principal
  document.getElementById("menuGestionar").style.display = "none";

  // Ocultar todas las secciones de formularios
  document.querySelectorAll("#formEstudiante, #formDocente, #formCurso")
    .forEach(div => div.style.display = "none");

  // Mostrar solo la sección correspondiente
  document.getElementById(id).style.display = "block";
}

function volverMenu() {
  // Ocultar todas las secciones
  document.querySelectorAll("#formEstudiante, #formDocente, #formCurso")
    .forEach(div => div.style.display = "none");

  // Volver a mostrar el menú principal
  document.getElementById("menuGestionar").style.display = "block";
}

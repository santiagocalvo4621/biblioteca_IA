function validarFormulario() {
    const correo = document.getElementById("correo").value;
    const error = document.getElementById("errorCorreo");

    if (!correo.endsWith("@unibarranquilla.edu.co")) {
        error.textContent = "El correo debe ser institucional";
        return false;
    }

    error.textContent = "";
    window.location.href = 'bienvenida.html';
    return false; 
    
}


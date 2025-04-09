document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("");
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const contraseña = document.getElementById("contraseña");
    const confirmarContraseña = document.getElementById("confirmarContraseña");
    const mensajeExito = document.getElementById("mensajexitoso");

    const mostrarError = (entrada, mensaje) => {
        const error2 = document.getElementById(`error${entrada.id.charAt(0).toUpperCase() + entrada.id.slice(1)}`);
       error2.textContent = mensaje;
        entrada.style.borderColor = "red";
    };
    const mostrarExito = (entrada) => {
        const error2 = document.getElementById(`error${entrada.id.charAt(0).toUpperCase() + entrada.id.slice(1)}`);
       error2.textContent = "";
        entrada.style.borderColor = "green";
    };

    const validarNombre = () => {
        if (nombre.value.trim().length < 3) {
            mostrarError(nombre, "tiene que poseer un minimo de 3 caracteres");
            return false;
        }
        mostrarExito(nombre);
        return true;
    };
    
    const validarCorreo = () => {
        const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!patronCorreo.test(correo.value.trim())) {
            mostrarError(correo, "Formato de correo inválido");
            return false;
        }
        mostrarExito(correo);
        return true;
    };

    const validarContraseña = () => {
        const patronContraseña = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!patronContraseña.test(contraseña.value)) {
            mostrarError(contraseña, "Tiene tener al menos 8 caracteres, un número y una letra");
            return false;
        }
        mostrarExito(contraseña);
        return true;
    };

    const validarConfirmarContraseña = () => {
        if (confirmarContraseña.value !== contraseña.value) {
            mostrarError(confirmarContraseña, "Las contraseñas no coinciden");
            return false;
        }
        mostrarExito(confirmarContraseña);
        return true;
    };

    nombre.addEventListener("input", validarNombre);
    correo.addEventListener("input", validarCorreo);
    contraseña.addEventListener("input", validarContraseña);
    confirmarContraseña.addEventListener("input", validarConfirmarContraseña);

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();
        if (validarNombre() && validarCorreo() && validarContraseña() && validarConfirmarContraseña()) {
            mensajeExito.textContent = "Registro exitoso";
            formulario.reset();
        }
    });
});

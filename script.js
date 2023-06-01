function validarFormulario() {

    var nombre = document.getElementById("first_name").value.trim();
    var apellido = document.getElementById("last_name").value.trim();
    var correo = document.getElementById("email").value.trim();
    var selectElement = document.getElementById("00N8b00000IbUcu");
    var telefono = document.getElementById("phone").value.trim();

    var nombreInput = document.getElementById("first_name");
    var apellidoInput = document.getElementById("last_name");
    var correoInput = document.getElementById("email");
    var telefonoInput = document.getElementById("phone");

    nombreInput.classList.remove("campo-obligatorio");
    apellidoInput.classList.remove("campo-obligatorio");
    correoInput.classList.remove("campo-obligatorio");
    telefonoInput.classList.remove("campo-obligatorio");

    if (nombre === "") {
        nombreInput.classList.add("campo-obligatorio");
    }

    if (apellido === "") {
        apellidoInput.classList.add("campo-obligatorio");
    }

    if (correo === "") {
        correoInput.classList.add("campo-obligatorio");
    }

    if (selectElement.value === "Telefono" && telefono === "") {
        telefonoInput.classList.add("campo-obligatorio");
    }

    if (nombre === "" || apellido === "" || correo === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }

    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correo.match(correoRegex)) {
        alert("Ingrese una dirección de correo electrónico válida.");
        correoInput.classList.add("campo-obligatorio");
        return false;
    }

    if (selectElement.value === "Telefono") {
        var telefonoRegex = /^\d+$/;
        if (!telefono.match(telefonoRegex)) {
            alert("Ingrese un número de teléfono válido.");
            return false;
        }
    }

    return true;
}
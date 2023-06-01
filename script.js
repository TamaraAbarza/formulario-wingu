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

    var correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!correo.match(correoRegex)) {
        alert("Ingrese una dirección de correo electrónico válido.");
        correoInput.classList.add("campo-obligatorio");
        return false;
    }

    // Validar teléfono
    if (selectElement.value === "Telefono") {
        var telefonoRegex = /^\d{10}$/; 
        if (!telefono.match(telefonoRegex)) {
            alert("Ingrese un número de teléfono válido.");
            return false;
        }
    }
    return true;
}


// Validar que solo se ingresen números en el campo de teléfono
var telefonoInput = document.getElementById("phone");
telefonoInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});

// Validar que solo se ingresen letras y acentos en los campos de nombre y apellido y empresa
var nombreInput = document.getElementById("first_name");
var apellidoInput = document.getElementById("last_name");
var empresaInput= document.getElementById("company");


nombreInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s']/g, "");
});
apellidoInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s']/g, "");
});
empresaInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s']/g, "");
  });

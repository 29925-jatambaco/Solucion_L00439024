function validar() {
	var correo, telefono, expresion;
	
	correo = document.getElementById('txtEmail').value;
	telefono = document.getElementById('txtTelefono').value;
	expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	
	// Validación de correo electrónico
	if(!expresion.test(correo)){
		alert("El correo no es válido");
		return false;
	}
	
	// Validación de teléfono (10 caracteres y solo dígitos)
	if(telefono.length != 10 || isNaN(telefono)){
		alert("El teléfono debe tener exactamente 10 digitos");
		return false;
	}
	
	// Si todas las validaciones son correctas, permitir el envío del formulario
	return true;
}

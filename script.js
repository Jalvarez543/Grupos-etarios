function asignarGrupo() {
    let edad = document.getElementById("edad").value;
    let mensaje = "";
    
    if (edad === "" || isNaN(edad) || edad < 0) {
        mensaje = "Por favor, ingresa una edad válida.";
    } else {
        edad = parseInt(edad);
        if (edad <= 12) {
            mensaje = "Eres un niño.";
        } else if (edad >= 13 && edad <= 17) {
            mensaje = "Eres un adolescente.";
        } else if (edad >= 18 && edad <= 29) {
            mensaje = "Eres un adulto joven.";
        } else {
            mensaje = "Eres un adulto mayor.";
        }
    }
    
    document.getElementById("resultado").innerText = mensaje;
}
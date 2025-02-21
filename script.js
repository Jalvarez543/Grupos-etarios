function asignarGrupo() {
    let edad = document.getElementById("edad").value;
    let mensaje = "";
    
    if (edad === "" || isNaN(edad) || edad < 0) {
        mensaje = "Por favor, ingresa una edad válida.";
    } else {
        edad = parseInt(edad);
        if (edad <= 12) {
            mensaje = "Usted es un niño.";
        } else if (edad >= 13 && edad <= 17) {
            mensaje = "Usted es un adolescente.";
        } else if (edad >= 18 && edad <= 29) {
            mensaje = "Usted es un adulto joven.";
        } else {
            mensaje = "Usted es un adulto mayor.";
        }
    }
    
    document.getElementById("resultado").innerText = mensaje;
}
function precio() {
    let opcionElegida = document.getElementById('typeinsurance');
    document.getElementById('precio').textContent = "Costo $ " + opcionElegida.value;
}
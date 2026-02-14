// ================= BASES DE DATOS =================
const baseDatos1 = [
  'Canada', 'EUA', 'Mexico', 'Ecuador',
  'Brazil', 'Argentina', 'Uruguay'
];

const baseDatos2 = [
  'Japón', 'Irán', 'Corea del Sur',
  'Alemania', 'Croacia', 'España', 'Inglaterra'
];

function mostrarResultado(mensaje, encontrado = false) {
  const resultado = document.getElementById("resultado");
  resultado.textContent = mensaje;
  resultado.style.color = encontrado ? "#28a745" : "#dc3545";
}

function encontrado() {
  mostrarResultado("País encontrado", true);
}

function busquedaBaseDatos2(pais, callbackEncontrado, callbackNoEncontrado) {
  if (baseDatos2.includes(pais)) {
    callbackEncontrado();
  } else {
    callbackNoEncontrado();
  }
}

function busquedaBaseDatos1(pais, callbackEncontrado, callbackBuscarEnBD2) {
  if (baseDatos1.includes(pais)) {
    callbackEncontrado();
  } else {
    callbackBuscarEnBD2(
      pais,
      callbackEncontrado,
      () => mostrarResultado("Dato no encontrado", false)
    );
  }
}

document.getElementById("buscar").addEventListener("click", () => {
  const pais = document.getElementById("pais").value.trim();

  if (!pais) {
    mostrarResultado("Debe ingresar un país", false);
    return;
  }

  busquedaBaseDatos1(
    pais,
    encontrado,
    busquedaBaseDatos2
  );
});
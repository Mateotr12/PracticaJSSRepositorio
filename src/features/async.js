function obtenerDoble(numero) {
  return new Promise((resolve, reject) => {

    if (isNaN(numero)) {
      reject("Debe ingresar un número válido");
      return;
    }

    setTimeout(() => {
      resolve(numero * 2);
    }, 2000);
  });
}

async function procesarNumero() {
  const input = document.getElementById("numero").value;
  const resultado = document.getElementById("resultado");

  resultado.textContent = "Procesando...";
  resultado.style.color = "#ffc107";

  try {
    const doble = await obtenerDoble(Number(input));
    resultado.textContent = `El doble es: ${doble}`;
    resultado.style.color = "#28a745";
  } catch (error) {
    resultado.textContent = error;
    resultado.style.color = "#dc3545";
  }
}

document.getElementById("calcular").addEventListener("click", procesarNumero);
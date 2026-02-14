// ================= PROMESA =================
function validarVocalFinal(cadena) {
  return new Promise((resolve, reject) => {

    if (!cadena || typeof cadena !== "string") {
      reject("Debe ingresar una cadena válida");
      return;
    }

    const ultimaLetra = cadena.trim();
    const vocales = ["a", "e", "i", "o", "u"];

    if (vocales.includes(ultimaLetra)) {
      resolve(`La vocal final es: ${ultimaLetra}`);
    } else {
      reject("El caracter no es una vocal");
    }
  });
}

document.getElementById("verificar").addEventListener("click", () => {
  const texto = document.getElementById("texto").value;
  const resultado = document.getElementById("resultado");

  resultado.textContent = "";
  resultado.style.color = "#fff";

  validarVocalFinal(texto)
    .then(respuesta => {
      resultado.textContent = respuesta;
      resultado.style.color = "#28a745";
    })
    .catch(error => {
      resultado.textContent = error;
      resultado.style.color = "#dc3545";
    });
});
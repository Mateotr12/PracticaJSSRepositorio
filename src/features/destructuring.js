const person = {
  name: 'Mateo Torres Ramírez',
  age: 18,
  city: 'medellin',
  profession: 'Desarrollador'
};

function mostrarPersona() {
  const { name, age, profession } = person;

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <strong>Nombre:</strong> ${name}<br>
    <strong>Edad:</strong> ${age}<br>
    <strong>Profesión:</strong> ${profession}
  `;
}
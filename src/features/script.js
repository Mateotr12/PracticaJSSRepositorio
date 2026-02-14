let datos = JSON.parse(localStorage.getItem("datos")) || [];
let editIndex = null;

const nombre = document.getElementById("nombre");
const documento = document.getElementById("documento");
const correo = document.getElementById("correo");
const tabla = document.getElementById("tablaDatos");

function render() {
  tabla.innerHTML = "";

  datos.forEach((item, index) => {
    tabla.innerHTML += `
      <tr>
        <td>${item.correo}</td>
        <td>${item.nombre}</td>
        <td>${item.documento}</td>
        <td>
          <button onclick="editar(${index})">Editar</button>
          <button onclick="eliminar(${index})">Eliminar</button>
        </td>
      </tr>
    `;
  });

  localStorage.setItem("datos", JSON.stringify(datos));
}

function validarFormulario() {

  if (!nombre.value || !documento.value || !correo.value) {
    alert("Todos los campos son obligatorios.");
    return false;
  }

  const existe = datos.some((item, index) =>{
    if (editIndex !== null && index === editIndex){
      return false;
    }
    return (
      item.correo === correo.value || 
      item.documento === documento.value
    );
  });

  if(existe){
    alert("Ya existe un registro con ese correo o número")
    return false;
  }


  return true;
}

document.getElementById("guardar").addEventListener("click", () => {

  if (!validarFormulario()) return;

  const registro = {
    nombre: nombre.value.trim(),
    documento: documento.value.trim(),
    correo: correo.value.trim()
  };

  if (editIndex !== null) {
    datos[editIndex] = registro;
    editIndex = null;
  } else {
    datos.push(registro);
  }

  nombre.value = "";
  documento.value = "";
  correo.value = "";

  render();
});

function editar(index) {
  const item = datos[index];
  nombre.value = item.nombre;
  documento.value = item.documento;
  correo.value = item.correo;
  editIndex = index;
}

function eliminar(index) {
  if (confirm("¿Seguro que deseas eliminar este registro?")) {
    datos.splice(index, 1);
    render();
  }
}





render();

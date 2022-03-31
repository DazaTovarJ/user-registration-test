document.addEventListener("DOMContentLoaded", () => {
  const btnListar = document.getElementById("listar");
  const formAgregar = document.getElementById("agregar-form");

  let table = [
    {id: 0, nombre: "Son", apellido: "Goku", direccion: "Kamehouse"},
    {id: 1, nombre: "Son", apellido: "Gohan", direccion: "Calle 5"},
    {id: 2, nombre: "Picoro", apellido: "Daimaku", direccion: "Calle 9"},
  ];

  const hasUser = (id) => {
    let found = false;
    for (const user of table) {
      const {id: userId} = user;
      if (id === userId) {
        found = true;
      }
    }

    return found;
  };

  //TODO: validations: id: required|integer|noexists
  function loadData() {
    const tableData = document.getElementById("data");
    let tableContent = "";
    for (let i = 0; i < table.length; i++) {
      const element = table[i];
      tableContent += `<tr>
        <td>${element.nombre}</td>
        <td>${element.apellido}</td>
        <td>${element.direccion}</td>
      </tr>`;
    }
    tableData.innerHTML = tableContent;
  }

  function newData(e) {
    e.preventDefault();

    let id = document.getElementById("id");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let direccion = document.getElementById("direccion");
    let idMsg = document.getElementById("req-id");
    let nombreMsg = document.getElementById("req-nombre");
    let apellidoMsg = document.getElementById("req-apellido");
    let direccionMsg = document.getElementById("req-direccion");

    if (hasUser(Number.parseInt(id.value))) {
      id.setCustomValidity("El usuario ya existe");
    } else {
      id.setCustomValidity("");
      idMsg.textContent = "";
    }

    if (!formAgregar.checkValidity()) {
      idMsg.textContent = id.validity.valueMissing
        ? "El id es requerido"
        : hasUser(Number.parseInt(id.value))
        ? "El usuario ya existe"
        : "";
      nombreMsg.textContent = nombre.validity.valueMissing
        ? "El nombre es requerido"
        : "";
      apellidoMsg.textContent = apellido.validity.valueMissing
        ? "El apellido es requerido"
        : "";
      direccionMsg.textContent = direccion.validity.valueMissing
        ? "La dirección es requerida"
        : "";
    } else {
      table.push({
        id: Number.parseInt(id.value),
        nombre: nombre.value,
        apellido: apellido.value,
        direccion: direccion.value,
      });
      console.log(table);
      loadData();
    }
  }

  btnListar.addEventListener("click", loadData);
  formAgregar.addEventListener("submit", newData);
});

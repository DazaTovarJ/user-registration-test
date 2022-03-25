document.addEventListener("DOMContentLoaded", () => {
  const btnListar = document.getElementById("listar");
  const btnRegistrar = document.getElementById("registrar");
  let table = [
    {id: 0, nombre: "Son", apellido: "Goku", direccion: "Kamehouse"},
    {id: 1, nombre: "Son", apellido: "Gohan", direccion: "Calle 5"},
    {id: 2, nombre: "Picoro", apellido: "Daimaku", direccion: "Calle 9"},
  ];

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

  function newData() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let direccion = document.getElementById("direccion").value;

    table.push({nombre, apellido, direccion});
    loadData();
  }

  btnListar.addEventListener("click", loadData);
  btnRegistrar.addEventListener("click", newData);
});

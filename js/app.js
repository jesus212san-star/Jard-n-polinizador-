function mostrarTabla() {
  const tabla = document.getElementById("tabla");
  const tbody = tabla.querySelector("tbody");

  tbody.innerHTML = "";

  for (let x = 0; x <= 8; x++) {
    let y = 0.2 * (x * x);

    let fila = `
      <tr>
        <td>${x}</td>
        <td>${y.toFixed(2)}</td>
      </tr>
    `;
    tbody.innerHTML += fila;
  }

  tabla.style.display = "table";
}

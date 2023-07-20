const DATA = [
  { name: "Juan", lastname: "Perez" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Gian", lastname: "Laic" },
  { name: "Fernando", lastname: "Saavedra" },
];

// function displayData() {
  const container = document.getElementById("container");

  // Creamos una variable para almacenar el contenido HTML de los párrafos
  let paragraphsHTML = "";

  // Generamos el contenido HTML de los párrafos utilizando un bucle for...of
  for (const item of DATA) {
    paragraphsHTML += `<p>${item.name} ${item.lastname}</p>`;
  }

  // Utilizamos insertAdjacentHTML para insertar el contenido dentro del div
  container.insertAdjacentHTML('beforeend', paragraphsHTML);
// }

// document.addEventListener("DOMContentLoaded", displayData);
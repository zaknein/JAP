document.addEventListener("DOMContentLoaded", function () {
  // Obtén el botón utilizando querySelector
  var botonResaltar = document.querySelector("#highlightBtn");

  // Obtén el párrafo utilizando querySelector
  var parrafoLorem = document.querySelector("#lorem");

  // Agrega un event listener al botón
  botonResaltar.addEventListener("click", function() {
    // Agrega la clase "highlight" al párrafo
    parrafoLorem.classList.add("highlight");
  });
});
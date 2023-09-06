const CONTAINER = document.getElementById('contenedor');
const BUTTON = document.getElementById('btnBuscar');
const INPUT = document.getElementById('inputBuscar');
const URL = 'https://images-api.nasa.gov/';
let NASA = {};

function getJSON(data) {
  return fetch(data)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => console.error('Error:', error));
} 


function ShowGalaxies() {
  let htmlContentToAppend = '';

  for (let i = 0;i < NASA.items.length;i++){

    htmlContentToAppend += `
        <div class="galaxy-box">
            <img class="image" src="${NASA.items[i].links[0].href}">
            <div class="title">${NASA.items[i].data[0].title}</div>
            <div class="description">${NASA.items[i].data[0].description}</div>
        </div>`;
  };

  CONTAINER.innerHTML = htmlContentToAppend;
}

BUTTON.addEventListener('click', function (e) {
  const inputValue = INPUT.value.toLowerCase();
  getJSON(URL + 'search?q=' + inputValue)
    .then(function (result) {
      if (result.collection && result.collection.items) {
        NASA = result.collection;
        console.log(NASA);
        ShowGalaxies();
      } else {
        console.error('No se encontraron resultados');
      }
    })
    .catch(error => console.error('Error:', error));
});






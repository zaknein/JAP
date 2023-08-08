// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  // El for itera sobre los elementos del array
  for (const item of dataArray.students) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  }
}
// let getJSONData = function(url){
//   let result = {};
//   return fetch(url)
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }else{
//       throw Error(response.statusText);
//     }
//   })
//   .then(function(response) {
//         result.status = 'ok';
//         result.data = response;
//         return result;
//   })
//   .catch(function(error) {
//       result.status = 'error';
//       result.data = error;
//       return result;
//   });
// }

// // Escribe el código necesario para realizar el fetch al archivo con los datos y mostrar los estudiantes con la función showData
// document.addEventListener("DOMContentLoaded", function(e){
//   getJSONData(DATA_URL).then(function(result){
//       if (resul.status == "ok"){
//           currentProductArray = result.data
//           showData()
//       };
//     });
//   });
let getJSONData = function(url){
  let result = {};
  return fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }else{
      throw Error(response.statusText);
    }
  })
  .then(function(response) {
        result.status = 'ok';
        result.data = response;
        return result;
  })
  .catch(function(error) {
      result.status = 'error';
      result.data = error;
      return result;
  });
}
document.addEventListener("DOMContentLoaded", function(e){
  getJSONData(DATA_URL).then(function(resultObj){
      if (resultObj.status == "ok"){
          currentProductArray = resultObj.data
          showData(currentProductArray)
      };
    });
  });
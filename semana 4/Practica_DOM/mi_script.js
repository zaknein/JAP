document.addEventListener('DOMContentLoaded', function () {
    const enlaces = document.querySelectorAll('a');
    const info = document.getElementById('info');
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :
    const n_enlaces = enlaces.length;
    info.innerHTML += `<p>Numero de enlaces: ${n_enlaces} </p>`;
    // Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :
    const penult_enlace = enlaces[n_enlaces - 2].getAttribute('href');
    info.innerHTML += `<p>Direccion a la que enlaza el penulimo enlace : ${penult_enlace} </p>`;
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :
    const enlaces_prueba = document.querySelectorAll('a[href="http://prueba/"]');
    const n_prueba = enlaces_prueba.length;
    info.innerHTML += `<p> Numero de enlaces a prueba ${n_prueba}</p>`;
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :
    const tercer_parrafo = document.querySelectorAll('p')[2];
    const enlaces_tercer_parrafo = tercer_parrafo.querySelectorAll('a');
    const n_parrafos = enlaces_tercer_parrafo.length;
    info.innerHTML += `<p>Numero de enlaces en el tercer parrafo ${n_parrafos}</p>` 
});
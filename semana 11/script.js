const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastname").value;
    const fecha = document.getElementById("fecha").value;

    let datos = {name, lastName, fecha};

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(response => response.json())
        .then(data => console.log(data))

        .catch(error => console.error("Error en la solicitud:", error));
});

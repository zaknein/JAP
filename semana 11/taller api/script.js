var output = document.getElementById('output');
document.getElementById('btn').addEventListener('click', predictName);
let name = document.getElementById('nameInput');
document.getElementById('nameInput').addEventListener('change',checkName)
function predictName(){
    let name = nameInput.value;

    fetch('https://api.agify.io?name='+name,{ method:'GET'})
    .then(function(response){return response.json();})
    .then(data => {
        if (name != '') {
           output.innerHTML = "Tu edad debe de ser de " + data.age;
           output.style.display = 'block';
            console.log(data.age);
        }else{
           output.style.display = 'none'; 
        }


    })
    .catch(err => console.log(err));
};


















fetch(URL)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        //manejar errores de la solicitud
        console.error('error:',error);

    });
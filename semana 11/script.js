const Name = document.getElementById("name");
const lastName = document.getElementById("lastname");
const fecha = document.getElementById("fecha");
const BUTTON = document.getElementById("button");
const URL = "https://jsonplaceholder.typicode.com/users";
const DATA = {};
function insertData(array){
    array.name = Name.value;
    array.lastname = lastName.value;
    array.dob = fecha.value;
}
const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'},
    body: JSON.stringify(DATA)
}
BUTTON.addEventListener("click",()=>{
    
    insertData(DATA);
    
    fetch(URL, options)
    .then(response => {
        if (!response == 'ok'){
            throw new Error("Los datos han fallado al enviarse");
        }
        return response.json();
    })
    .then (data => {
        console.log(data);
    })
    .catch (error => {
        console.error('Error', error);
    })
})
    

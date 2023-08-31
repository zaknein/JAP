function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function Check (){
    let name = document.getElementById('nombre').value.length;
    let lastName = document.getElementById('apellido').value.length;
    let email = document.getElementById('email').value.length;
    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;
    let checkBox = document.getElementById('terminos');
    if (name > 0 && lastName > 0 && email > 0 && password1.length >=6 && password2.length >=6 && checkBox.checked && password1 == password2){
        return true;
    }else {
        return false;
    }
}

const button = document.getElementById('regBtn');

button.addEventListener('click', (e => {
    if (Check()){
        showAlertSuccess();
        
    }else{
        showAlertError();
        setTimeout(()=> {
            location.reload();
        }, 1000)

    }
}))
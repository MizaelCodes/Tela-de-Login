function Login(){
    let nome = document.getElementById('name').value
    let mail = document.getElementById('email').value
    let senha = document.getElementById('password').value

    if(nome != "" && mail != "" && senha != ""){
        alert('Usuario Cadastrado!');
        window.location.href = "login.html";
    }else{
        alert('Por favor preenche os campos informados!')
    }
}
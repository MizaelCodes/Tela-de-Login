function Login() {
    let nome = document.getElementById('name').value
    let mail = document.getElementById('email').value
    let senha = document.getElementById('password').value

    if (nome != "" && mail != "" && senha != "") {
        localStorage.setItem("nome", nome)
        localStorage.setItem("mail", mail)
        localStorage.setItem("senha", senha)

        alert('Usuario Cadastrado!')
        window.location.href = "index.html"
    }
    else {
        alert('Por favor preenche os campos informados!')
    }
}

function acesso() {

    let mailDigitado = document.getElementById("email").value
    let senhaDigitada = document.getElementById("password").value

    let mailSalvo = localStorage.getItem("mail")
    let senhaSalva = localStorage.getItem("senha")

    if (mailDigitado === mailSalvo && senhaDigitada === senhaSalva) {
        window.location.href = "page.html"
    }
    else {
        alert("Usuario incorreto")
    }

}

function Hello() {
    let nomeSalvo = localStorage.getItem("nome")
    document.getElementById("nome").innerText = "" + nomeSalvo
}

function IrRegistro(){
    window.location.href = "register.html"
}

let usuarios = [
    {
        nome: "welyda@gmail.com",
        senha: "1234"
    },
    {
        nome: "maria@gmail.com",
        senha: "1234"
    },
    {
        nome: "larissa@gmail.com",
        senha: "1234"
    },
    {
        nome: "maiza@gmail.com",
        senha: "1234"
    },
    {
        nome: "ana@gmail.com",
        senha: "1234"
    },
    {
        nome: "anthony@gmail.com",
        senha: "1234"
    },
    {
        nome: "julia@gmail.com",
        senha: "1234"
    },
    {
        nome: "lucas@gmail.com",
        senha: "1234"
    },
    {
        nome: "matheus@gmail.com",
        senha: "1234"
    },
    {
        nome: "thiago@gmail.com",
        senha: "1234"
    },
    {
        nome: "gabriel@gmail.com",
        senha: "1234"
    },
    {
        nome: "joão@gmail.com",
        senha: "1234"
    },
    {
        nome: "fernando@gmail.com",
        senha: "1234"
    },
    {
        nome: "pedro@gmail.com",
        senha: "1234"
    },
    {
        nome: "carlos@gmail.com",
        senha: "1234"
    },
]
//   lendo conteudo do navegador
let nomepag2 = localStorage.getItem('usuarioLogado')


if (nomepag2!=undefined) {

    let h2nome = document.querySelector("h2#nome")
    h2nome.innerHTML += `${nomepag2}`
    window.addEventListener('beforeunload', function (e) {
    localStorage.removeItem("usuarioLogado")

    })
   

    function listar() {
        limpar()
        let res = document.querySelector('.res')

        for (let i = 0; i < usuarios.length; i++) {
            res.innerHTML += `nome:${usuarios[i].nome}<br><br>`
        }
    }

    function limpar() {

        let res = document.querySelector(`div.res`)
        res.innerHTML = ``

    }

} else { // tudo relacionado a pagina 1
    function testar() {

        let user = document.querySelector('input#user').value

        let senhas = document.querySelector('input#senha').value

        let controle = 0
        let res = document.querySelector('div.res')

        for (let index = 0; index < usuarios.length; index++) {
            if (usuarios[index].nome === user && usuarios[index].senha === senhas) {
                controle = 1
                localStorage.setItem("usuarioLogado", usuarios[index].nome)
                index = usuarios.length
                window.location.href = "./p2.html"

            }
        }
        if (controle == 0) {
            res.innerHTML = `<p> Acesso negado </p>`
            alert("Usuário ou senha incorreto!")
            res.style.color = 'red'
        }
    }
}

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
        nome: "joao@gmail.com",
        senha: "1234"
    },
    {
        nome: "gabriel@gmail.com",
        senha: "1234"
    },
    {
        nome: "thiago@gmail.com",
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

//função e evento para listar usuarios
const inputlistar = document.querySelector("#listar")
inputlistar.addEventListener("click", listar)


//função e evento para limpar usuarios
const inputlimpar = document.querySelector("#limpar")
inputlimpar.addEventListener("click", limpar)


//função e evento para deletar usuarios
const inputdeletar = document.querySelector("#deletar1")
inputdeletar.addEventListener("click", deletar1)

//função e evento para criar usuarios
const criaruser = document.querySelector("#criar");
criaruser.addEventListener("click", criar)

//função e evento para testar usuarios
const testaruser = document.querySelector("#testar");
testaruser.addEventListener("click", testar)

//função e evento para atualizar usuarios
const atualizar1 = document.querySelector('#atualizar')
atualizar1.addEventListener("click", loaduser)

//função e evento para sair usuarios
const sairpag = document.querySelector("#sair");
sairpag.addEventListener("click", sair)


let nomepag2 = localStorage.getItem('usuarioLogado')


if (nomepag2 != undefined) {

    let h2nome = document.querySelector("h2#nome")
    h2nome.innerHTML += `${nomepag2}`
    window.addEventListener('beforeunload', function (e) {
        localStorage.removeItem("usuarioLogado")

    })

}


function listar() {

    limpar()
    let res = document.querySelector('div.res')

    for (let i = 0; i < usuarios.length; i++)

        res.innerHTML += `Nome: ${usuarios[i].nome} <br>`


}


function limpar() {

    let res = document.querySelector(`div.res`)

    res.innerHTML = ``

}


limpar();
function deletar1() {

    let res = document.querySelector('div.res');

    res.innerHTML = "";

    res.innerHTML += "DELETAR USUÁRIO <br><br>"

    for (let index = 0; index < usuarios.length; index++) {

        res.innerHTML += `<div><input type="checkbox" id="${index}" value="${usuarios[index].nome}"><label for="usuarios${index}">-${usuarios[index].nome}</label></div>`
    }
    res.innerHTML += `<input type="button" value="Deletar" class="btn" id="deletar2">`

    //função e evento para deletar escolhidos
    const inputdeletar2 = document.querySelector("#deletar2")
    inputdeletar2.addEventListener("click", deletar2)


}

function deletar2() {

    userdeletado = [""]

    for (let index = 0; index < usuarios.length; index++) {

        let checkbox = document.getElementById(`${index}`);

        if (checkbox.checked == true) {

            userdeletado[index] = 1
        }
        else {

            userdeletado[index] = 0
        }
    }
    for (let index = userdeletado.length - 1; index >= 0; index--) {

        if (userdeletado[index] == 1) {

            usuarios.splice(index, 1);
        }
    }
    limpar();

    listar();

}




function criar() {


    let res = document.querySelector('div.res');
    res.innerHTML = "";
    res.innerHTML += "Criar usuário <br><br>"
    res.innerHTML += `<form>
    <label for="inputuser">Nome usuário:</label><br>
    <input type="text" id="inputuser"><br>
    <label for="inputsenha">Digite senha:</label><br>
    <input type="password" id="inputsenha"><br>
    <label for="inputsenha">Confirme a senha:</label><br>
    <input type="password" id="confirmsenha"><br>
    <input type="button" value="Cadastrar" class="btn" id="criar2">
    </form>`

    // botão adicionar
    const criaruser2 = document.querySelector("#criar2");
    criaruser2.addEventListener("click", criar2)

}

function criar2() {

    let novousuario = {

        nome: document.querySelector('input#inputuser').value,
        senha: document.querySelector('input#inputsenha').value

    }
    let senhaconfirm = document.querySelector('input#confirmsenha').value
    let repetida = 0

    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].nome == novousuario.nome) {
            repetida = 1
            index = usuarios.length
        }
    }
    if (repetida == 0) {
        if (senhaconfirm != novousuario.senha) {
            alert(`Senhas diferentes, digite novamente`)
        } else {
            usuarios.push(novousuario)
            alert("Usuário adicionado com sucesso")
            listar()
        }
    }
    else {
        alert("Usuário já existe no cadastro,digite outro nome")
        criar()
    }
}






function testar() {

    let res = document.querySelector('div.res');
    res.innerHTML = "";
    res.innerHTML += "Testar usuário <br><br>"
    res.innerHTML += `<form>
    <label for="user">Nome usuário:</label><br>
    <input type="text" id="usertest" placeholder:"Usuário"><br>
    <label for="senha">Digite senha:</label><br>
    <input type="password" id="senhatest" placeholder:"Usuário"><br><br>
    <input type="button" value="Confirmar" class="btn" id="testar2">
    </form>`


    const testaruser2 = document.querySelector("#testar2");
    testaruser2.addEventListener("click", testar2)


}

function testar2() {

    let nome=document.querySelector('#usertest').value
    let senha=document.querySelector('#senhatest').value
    let cont= 0


    for (let index=0;index < usuarios.length;index++) {

        if (usuarios[index].nome==nome && usuarios[index].senha==senha) {


            alert("O usuário e a senha estão corretos!")
            cont=1
            index=usuarios.length


        }
    }
    if (cont==0) {

        alert("O usuário ou a senha estão INCORRETOS! Tente novamente.")

    }


}



function loaduser() {

    let res = document.querySelector('div.res')
    res.innerHTML = "";
    res.innerHTML+= "Atualizar Dados<br><br>"
    res.innerHTML+= `<form>
    <label for="inputuser">Usuário:</label><br>
    <input type="text" class="inputuser"><br>
    <label for="inputsenha">Senha atual:</label><br>
    <input type="password" class="inputsenha"><br>
    <label for="inputuser1">Novo usuário:</label><br>
    <input type="text" class="inputuser1"><br>
    <label for="inputsenha1">Nova senha:</label><br>
    <input type="password" class="inputsenha1"><br>
    <label for="inputsenha2">Confirmar senha:</label><br>
    <input type="password" class="inputsenha2"><br>
    <input type="button" id="atualizar2" class="btn" value="Atualizar" >
    </form>`

    //testando e gerenciando se o botão atualizar quando for clicado
    const atualizaruser = document.querySelector('#atualizar2')
    atualizaruser.addEventListener("click", atualizar2)
}

function atualizar2() {

let nome= document.querySelector('input.inputuser').value;
let senha= document.querySelector('input.inputsenha').value;
let nome1= document.querySelector('input.inputuser1').value;
let senha1= document.querySelector('input.inputsenha1').value;
let senha2= document.querySelector('input.inputsenha2').value;

    let indice = 0
    let errorusernc = 1
    let errorpassuser = 1
    let repetida = 0
    let errorpassconf = 1

    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].nome ==nome) {
            errorusernc = 0

            if (usuarios[index].senha ==senha) {
                errorpassuser = 0

                if (senha1 == senha2) {
                    errorpassconf = 0
                    indice = index

                } 
            } 
        } 

    }


    if (errorusernc == 0 && errorpassuser == 0 && errorpassconf == 0) {
        
        for (let index = 0; index < usuarios.length; index++) {

            if ((nome1!=nome) && (nome1==usuarios[index].nome)) {
                repetida = 1
                index = usuarios.length
                alert("Nome de usuario ja existe no cadastro")
                
            } 
        }
    } 



    if (repetida == 0 && errorusernc == 0 && errorpassuser == 0 && errorpassconf == 0) {
        

            let res = document.querySelector('div.res')
            res.innerHTML = ""
            usuarios[indice].nome = nome1
            usuarios[indice].senha =senha1
            alert("Usuário atualizado com sucesso!")
            listar()

        
        } else {
            if (repetida == 1) {
                alert("Usuario ja cadastrado")
            
            }else if (errorusernc == 1) {
                alert("Usuario não cadastrado")

            }else if (errorpassuser == 1) {
                alert("Senha não cadastrado")

            }else if (errorpassconf == 1) {
                alert("Senhas diferentes")
                
            }
        }


}


function sair() {


    window.location.href = "./index.html"


}













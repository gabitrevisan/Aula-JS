function mudar(){
    let novo = document.getElementById("idNome")

    //chamar pelo ID
    document.getElementById("titulo").required=true;
    document.getElementById("titulo").innerHTML=novo.value;
}

function jogo(){
    let numero = document.getElementById("posicao").value -1;
    let novo = document.getElementById("novo").value;
    
    document.getElementsByClassName("atleta")[numero].innerHTML = novo;
}

function mostrar(){
    let numero = document.getElementById("numero").value-1;
    let dia = document.getElementsByTagName("li")[numero].innerHTML;
    document.getElementById("resultado").innerHTML = dia;
}

//função arrow/anônima
document.querySelector("#btnMsg").onclick = () =>{
    alert("Olá! Você acionou o botão. Parabéns!!");
}

//Evento addEventListener
document.querySelector("#btnMsg1").addEventListener('click', function(){
    alert("Oi! Alguém me acionou.")} )

let botao = document.querySelector("#btnMsg2")
botao.addEventListener('click', clicou)
botao.addEventListener('mouseenter', entrou)
botao.addEventListener('mouseout', saiu)

function clicou(){
    botao.innerHTML = "O usuário clicou no botão!"
    botao.removeEventListener('mouseup', entrou)
    botao.removeEventListener('mouseout', saiu)
}
function logou(){
    botao.innerHTML = "O usuário logou com sucesso!"
}

function entrou(){botao.innerHTML="Você entrou"}
function saiu(){botao.innerHTML="Você saiu"}

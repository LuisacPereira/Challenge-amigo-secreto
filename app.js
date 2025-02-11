let amigos = [];

function adicionarAmigo () {
    let nome = document.querySelector('#amigo').value;
    if(nome == '') {
        alert('Por favor, insira um nome');
    } else {
        amigos.push(nome);
    }
    limparCampo();
    adicionarAmigosNaLista();
}


function limparCampo () {
    nome = document.querySelector('#amigo');
    nome.value = ' ';
}

function adicionarAmigosNaLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    for (let x = 0; x < amigos.length; x++) {
        let li = document.createElement('li');
        li.textContent = amigos[x];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let qtdAmigos = amigos.length;
    let amigoEscolhido;
    if (qtdAmigos > 0) {
        let escolhido = Math.floor(Math.random() * qtdAmigos);
        amigoEscolhido = amigos[escolhido];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto é ${amigoEscolhido}`; 
        lista = document.querySelector('#listaAmigos');
        lista.innerHTML = '';
    } else {
        alert('Impossível sortear, insira um nome na lista');
    } 
}

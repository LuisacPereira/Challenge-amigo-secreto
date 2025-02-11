let amigos = [];

function adicionarAmigo () {
    let nome = document.querySelector('#amigo').value;
    if(nome == null) {
        alert('Por favor, insira um nome');
    } else {
        amigos.push(nome);
    }

    limparCampo();
}

function limparCampo () {
    nome = document.querySelector('#amigo');
    nome.value = ' ';
}
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
    const lista = document.querySelector('#listaAmigos');
    

    lista.innerHTML = "";
    
    for (let x = 0; x < amigos.length; x++) {
        let li = document.createElement('li');
        li.textContent = amigos[x];
        lista.appendChild(li);
    }

}
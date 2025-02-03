let amigos = [];

function adicionarAmigo(event) {
    
    let amigoInput = document.getElementById('amigo');
    let amigo = amigoInput.value.trim();  

    if (amigo == '') {  // Verifica se o campo está vazio
        alert('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(amigo)) {  // Verifica se o nome já está na lista
        alert('Esse nome já está na lista!');
        return; 
    }

    amigos.push(amigo); 
    atualizarListaAmigos();  // Atualiza a lista na tela
    limparCampo(); 
}

function limparCampo() {
    document.getElementById('amigo').value = '';  // Limpa o input
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";  // Limpa a lista antes de atualizar

    amigos.forEach((nome, index) => {
        let li = document.createElement('li');
        li.textContent = nome;

        // Botão de remover amigo
        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = '❌';
        botaoRemover.style.marginLeft = '10px';
        botaoRemover.onclick = () => removerAmigo(index);

        li.appendChild(botaoRemover); 
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);  
    atualizarListaAmigos(); 
}

// Remove qualquer evento duplicado antes de adicionar um novo
document.getElementById('botaoAdicionar').removeEventListener('click', adicionarAmigo);
document.getElementById('botaoAdicionar').addEventListener('click', adicionarAmigo);

function sortearAmigo() {
    if (amigos.length === 0) {  // Verifica se há amigos na lista
        alert('A lista está vazia! Adicione amigos antes de sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let amigoSorteado = amigos[indiceAleatorio]; 

    
    document.getElementById('resultado').innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}


document.getElementById('botaoSortear').addEventListener('click', sortearAmigo);


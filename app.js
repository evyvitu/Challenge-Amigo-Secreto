let amigos = [];

// Exibir mensagens de feedback
function mostrarMensagem(texto, tipo = "info") {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="${tipo}">${texto}</li>`;
    setTimeout(() => resultado.innerHTML = "", 2500);
}

// Adicionar amigos
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        mostrarMensagem("Por favor, insira um nome.", "erro");
        return;
    }

    if (amigos.includes(nome)) {
        mostrarMensagem("Esse nome já foi adicionado.", "erro");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
    mostrarMensagem("Nome adicionado com sucesso!", "sucesso");
}

// Atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.classList.add("card-nome");
        item.innerHTML = `
            ${amigo}
            <button class="remover" onclick="removerAmigo(${index})">
                <img src="assets/x.png" alt="Remover" />
            </button>
        `;
        lista.appendChild(item);
    });
}

// Remover amigo pelo índice
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    mostrarMensagem("Nome removido.", "sucesso");
}

// Sortear amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarMensagem("A lista está vazia!", "erro");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="sorteado">O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}

// Resetar o jogo
function resetarJogo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    mostrarMensagem("Novo jogo iniciado!", "sucesso");
}
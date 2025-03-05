let nomes = [];             // Array que armazena os nomes que serão digitados pelo usuário para o sorteio
let nomesSorteados = [];    // Array que armazena os nomes sorteados


// Função que adiciona um amigo ao array de nomes
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value; // Pega o nome digitado pelo usuário
    if (nomes.includes(nome)) { // Verifica se o nome digitado já está no array de nomes
        alert("Este amigo já foi adicionado! Tente adicionar um novo nome."); // Exibe um alerta caso o nome já esteja no array de nomes
        document.getElementById("amigo").value = ""; // Limpa o campo de input
    } else {
        nomes.push(nome); // Adiciona o nome ao array de nomes
        document.getElementById("listaAmigos").innerHTML += "<li>" + nome + "</li>"; // Exibe o nome na tela
        console.log(nomes); // Exibe o array de nom
        document.getElementById("amigo").value = ""; // Limpa o campo de input
    }
}

// Função que sorteia um amigo
function sortearAmigo() {
    if (nomes.length === 0) { // Verifica se o array de nomes está vazio
        //let mensagem = "Adicione amigos para sortear!"; // Exibe um alerta caso o array de nomes esteja vazio
        //document.getElementById("resultado").innerHTML = mensagem; // Exibe um alerta caso o array de nomes esteja vazio
        alert("Adicione amigos para sortear!"); // Exibe um alerta caso o array de nomes esteja vazio
        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
    } else {
        let indice = Math.floor(Math.random() * nomes.length); // Sorteia um índice do array de nomes
        let nomeSorteado = nomes[indice]; // Pega o nome sorteado
        document.getElementById("resultado").innerHTML = nomeSorteado; // Exibe o nome sorteado na tela
        nomesSorteados.push(nomeSorteado); // Adiciona o nome sorteado ao array de nomes sorteados
        nomes.splice(indice, 1); // Remove o nome sorteado do array de nomes
    }
}

// Função que limpa a lista de amigos e resulatdo
function limpar() {
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    nomes = [];
    nomesSorteados = [];
}

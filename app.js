let nomes = [];             // Array que armazena os nomes que serão digitados pelo usuário para o sorteio
let nomesSorteados = [];    // Array que armazena os nomes sorteados



// Função que adiciona um amigo ao array de nomes
function adicionarAmigo() {
    
    let nome = document.getElementById("amigo").value; // Pega o nome digitado pelo usuário
    let validacao = validarNomeProprio(nome); // Valida o nome digitado pelo usuário
    if (validacao !== "Nome válido!") { // Verifica se o nome digitado é válido
        alert(validacao); // Exibe um alerta caso o nome digitado não seja válido
        document.getElementById("amigo").value = ""; // Limpa o campo de input
    } else if (nomes.includes(nome)) { // Verifica se o nome digitado já está no array de nomes
        testInfo(document.getElementById("amigo"));
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
        limpar();
    } else {
        let indice = Math.floor(Math.random() * nomes.length); // Sorteia um índice do array de nomes
        let nomeSorteado = nomes[indice]; // Pega o nome sorteado
        //document.getElementById("resultado").innerHTML = nomeSorteado; // Exibe o nome sorteado na tela
        nomesSorteados.push(nomeSorteado); // Adiciona o nome sorteado ao array de nomes sorteados
        nomes.splice(indice, 1); // Remove o nome sorteado do array de nomes
        nomesSorteadosOrdemSorteio();
    }
    
    
}

// Função que verifica se o nome digitado pelo usuário é válido
function validarNomeProprio(nome) {
    // Remover espaços extras no início e no final
    nome = nome.trim();

    // Expressão regular para validar nomes próprios:
    // - Deve conter apenas letras e espaços.
    // - Deve ter entre 2 e 50 caracteres.
    // - Não permite mais de um espaço consecutivo.
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

    if (regex.test(nome) && nome.length >= 2 && nome.length <= 50) {
        return "Nome válido!";
    } else {
        return "Nome inválido. Certifique-se de que ele não tenha espaços extras, contenha apenas letras, e tenha entre 2 e 50 caracteres.";
    }
}

// Função que exibe os nomes sorteados por ordem de sorteio
function nomesSorteadosOrdemSorteio() {
    document.getElementById("resultado").innerHTML = nomesSorteados.join(", "); // Exibe os nomes sorteados na tela
}

// Função limpar
function limpar() {
    document.getElementById("listaAmigos").innerHTML = ""; // Limpa a lista de amigos
    document.getElementById("resultado").innerHTML = ""; // Limpa o resultado
}

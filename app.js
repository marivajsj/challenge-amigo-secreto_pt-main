let nomes = [];             // Array que armazena os nomes que serão digitados pelo usuário para o sorteio
let nomesSorteados = [];    // Array que armazena os nomes sorteados



// Função que adiciona um amigo ao array de nomes
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value; // Pega o nome digitado pelo usuário
    let validacao = validarNomeProprio(nome); // Valida o nome digitado pelo usuário
    if (validacao !== "Nome válido!") { // Verifica se o nome digitado é válido
        alert(validacao); // Exibe um alerta caso o nome digitado não seja válido
        document.getElementById("amigo").value = ""; // Limpa o campo de input
    } else if (nomes.includes(nome)) { // Verifica se o nome digitado já existe no array de nomes
        alert("O nome já existe na lista."); // Exibe um alerta caso o nome digitado já exista no array de nomes
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
        alert("Adicione amigos para sortear!"); // Exibe um alerta caso o array de nomes esteja vazio
        limpar();
    } else {
        let indice = Math.floor(Math.random() * nomes.length); // Sorteia um índice do array de nomes
        let nomeSorteado = nomes[indice]; // Pega o nome sorteado
        alert("O amigo sorteado foi: " + nomeSorteado); // Exibe um alerta com o nome sorteado
        nomesSorteados.push(nomeSorteado); // Adiciona o nome sorteado ao array de nomes sorteados
        nomes.splice(indice, 1); // Remove o nome sorteado do array de nomes
        nomesSorteadosOrdemSorteio();
    }
    
    
}

// Função que verifica se o nome digitado pelo usuário é válido
function validarNomeProprio(nome, config = { min: 2, max: 100 }, nomesExistentes = []) {
    let erros = [];
    
    // 1. Verificar se o nome está vazio
    if (nome.length === 0) {
        erros.push("O nome não pode estar vazio.");
    }

    // 2. Verificar comprimento total do nome
    if (nome.length < config.min || nome.length > config.max) {
        erros.push(`O nome deve ter entre ${config.min} e ${config.max} caracteres.`);
    }

    // 3. Verificar caracteres válidos (letras, hífens, apóstrofos, etc.)
    const regexCaracteresValidos = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[-'][A-Za-zÀ-ÖØ-öø-ÿ]+)*(?: [A-Za-zÀ-ÖØ-öø-ÿ]+(?:[-'][A-Za-zÀ-ÖØ-öø-ÿ]+)*)*$/;
    if (!regexCaracteresValidos.test(nome)) {
        erros.push("O nome contém caracteres inválidos. Use apenas letras, hífens ou apóstrofos bem posicionados.");
    }

    // 4. Verificar caracteres repetidos mais de 2 vezes consecutivamente
    const regexRepetidas = /(.)\1{2,}/;
    if (regexRepetidas.test(nome)) {
        erros.push("Não deve haver letras repetidas consecutivamente mais de duas vezes.");
    }

    // 5. Verificar se há números
    const regexNumeros = /\d/;
    if (regexNumeros.test(nome)) {
        erros.push("Números não são permitidos.");
    }

    // 6. Verificar espaços consecutivos (já tratado pela normalização)
    if (nome.includes("  ")) {
        erros.push("Não são permitidos espaços consecutivos.");
    }

    // 7. Verificar comprimento mínimo de cada palavra
    const palavras = nome.split(" ");
    if (palavras.some(palavra => palavra.length < 2)) {
        erros.push("Todas as palavras devem ter pelo menos 2 letras.");
    }

    // 8. Verificar maiúsculas iniciais para cada palavra
    const regexPrimeiraMaiuscula = /^[A-ZÀ-Ö][a-zà-ö]+(?: [A-ZÀ-Ö][a-zà-ö]+)*$/;
    if (!regexPrimeiraMaiuscula.test(nome)) {
        erros.push("Cada palavra deve começar com letra maiúscula.");
    }

    // Retornar resultado final (erros detalhados ou mensagem de sucesso)
    return erros.length > 0
        ? `Nome inválido: ${erros.join("; ")}`
        : "Nome válido!";
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

//Função normalizar nome
function normalizar() {
    let nome = document.getElementById("amigo").value;
    let nomeNormalizado = nome
        .trim() // Remove espaços no início e no fim
        .replace(/\s+/g, " ") // Remove espaços consecutivos
        .split(" ") // Divide o nome em palavras
        .filter(palavra => palavra.length > 0) // Remove palavras vazias
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()) // Define a primeira letra de cada palavra como maiúscula e as demais como minúsculas
        .join(" "); // Junta as palavras com um espaço        
    document.getElementById("amigo").value = nomeNormalizado;
}
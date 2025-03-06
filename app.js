let nomes = [];             // Array que armazena os nomes que serão digitados pelo usuário para o sorteio
let nomesSorteados = [];    // Array que armazena os nomes sorteados
var re = /^[A-zÀ-ú '´]+$/ // Expressão regular para verificar se o nome digitado pelo usuário é válido


// Função que adiciona um amigo ao array de nomes
function adicionarAmigo() {
    
    let nome = document.getElementById("amigo").value; // Pega o nome digitado pelo usuário
    if (nomes.includes(nome)) { // Verifica se o nome digitado já está no array de nomes
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
// function verificarNome() {
//     let nome = document.getElementById("amigo").value; // Pega o nome digitado pelo usuário
//     if (nome === "") { // Verifica se o nome digitado é vazio
//         alert("Digite um nome válido!"); // Exibe um alerta caso o nome digitado seja vazio
//     } else if (nomes.includes(nome)) { // Verifica se o nome digitado já está no array de nomes
//         alert("Este amigo já foi adicionado! Tente adicionar um novo nome."); // Exibe um alerta caso o nome já esteja no array de nomes
//     } else if (nome.length < 3) { // Verifica se o nome digitado tem menos de 3 caracteres
//         alert("Digite um nome com mais de 3 caracteres!"); // Exibe um alerta caso o nome digitado tenha menos de 3 caracteres
//     } else if (!isNaN(nome)) { // Verifica se o nome digitado contém números
//         alert("Digite um nome válido! Números não são permitidos."); // Exibe um alerta caso o nome digitado contenha números
//     } else if (nome.includes("  ")) { // Verifica se o nome digitado contém mais de um espaço
//         alert("Digite um nome válido! Espaços não são permitidos."); // Exibe um alerta caso o nome digitado contenha espaços
//     } else if (nome.charAt(0) === " ") { // Verifica se o nome digitado começa com espaço
//         alert("Digite um nome válido! Espaços no início do nome não são permitidos."); // Exibe um alerta caso o nome digitado comece com espaço
//     } else if (nome.charAt(nome.length - 1) === " ") { // Verifica se o nome digitado termina com espaço
//         alert("Digite um nome válido! Espaços no final do nome não são permitidos."); // Exibe um alerta caso o nome digitado termine com espaço
//     } else if (nome.includes(" ")) { // Verifica se o nome digitado contém espaços
//         let nomeSeparado = nome.split(" "); // Separa o nome em um array de palavras
//         let nomeInvalido = nomeSeparado.find(palavra => palavra.length < 3); // Verifica se alguma palavra do nome tem menos de 3 caracteres
//         if (nomeInvalido) { // Verifica se alguma palavra do nome tem menos de 3 caracteres
//             alert("Digite um nome válido! Nomes com menos de 3 caracteres não são permitidos."); // Exibe um alerta caso alguma palavra do nome tenha menos de 3 caracteres
//         } else {
//             adicionarAmigo(); // Adiciona o nome ao array de nomes
//         }
//     } else if (nome.length >= 3) { // Verifica se o nome digitado tem 3 ou mais caracteres
//         adicionarAmigo(); // Adiciona o nome ao array de nomes
//     } else {
//         alert("Digite um nome válido!"); // Exibe um alerta caso o nome digitado não seja válido
//     }

// }
// Função que verifica se o nome digitado pelo usuário é válido
function testInfo(nomeInput){  
    var OK = re.exec(nomeInput.value);  
    if (!OK)  
      console.log(document.getElementById("amigo").value + " não é um nome válido!");  
    else
      console.log("Seu nome " + document.getElementById("amigo").value + " é válido");  
  } 

// Função que exibe os nomes sorteados por ordem de sorteio
function nomesSorteadosOrdemSorteio() {
    document.getElementById("resultado").innerHTML = nomesSorteados.join(", "); // Exibe os nomes sorteados na tela
}
function nomesSorteadosMaiusculos() {
    let nomesMaiusculos = nomesSorteados.map(nome => nome.charAt(0).toUpperCase() + nome.slice(1)); // Coloca a primeira letra de cada nome sorteado em maiúsculo
    document.getElementById("resultado").innerHTML = nomesMaiusculos.join(", "); // Exibe os nomes sorteados na tela
}

// Função limpar
function limpar() {
    document.getElementById("listaAmigos").innerHTML = ""; // Limpa a lista de amigos
    document.getElementById("resultado").innerHTML = ""; // Limpa o resultado
}

function encontrarResposta(perguntaUsuario) {
    const busca = perguntaUsuario.toLowerCase().trim();
    
    if (busca === "") return "Por favor, digite sua dúvida sobre a OMASP.";

    // 1. Busca por frase exata no banco OMASP
    for (let item of baseConhecimentoOMASP) {
        if (busca.includes(item.pergunta.toLowerCase())) {
            return item.resposta;
        }
    }

    // 2. Busca por palavra-chave (Keyword)
    // Criamos uma pontuação para cada resposta baseada em quantas palavras-chave batem
    let melhorMatch = null;
    let maxKeywords = 0;

    for (let item of baseConhecimentoOMASP) {
        let contagem = 0;
        item.keywords.forEach(kw => {
            if (busca.includes(kw.toLowerCase())) {
                contagem++;
            }
        });

        if (contagem > maxKeywords) {
            maxKeywords = contagem;
            melhorMatch = item;
        }
    }

    if (melhorMatch && maxKeywords > 0) {
        return melhorMatch.resposta;
    }

    return "Desculpe, não encontrei essa informação específica sobre a OMASP. Tente perguntar sobre 'fases', 'datas', 'medalhas' ou 'quem pode participar'.";
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chat-box");
    const texto = input.value;

    if (texto.trim() === "") return;

    // Adiciona o texto do usuário no balão azul
    chatBox.innerHTML += `<div class="message user"><strong>Você:</strong> ${texto}</div>`;

    // Processa a resposta
    const resposta = encontrarResposta(texto);

    // Efeito de "pensando" e resposta do bot
    setTimeout(() => {
        chatBox.innerHTML += `<div class="message bot"><strong>Assistente OMASP:</strong> ${resposta}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 400);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Atalho para o botão Enter
document.getElementById("userInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

 
const resultado = document.getElementById('resultado');
const botaoFormulario = document.getElementById('botao_enviar');
const botaoResponder = document.getElementById('botao_responder');

function exibirDados(event) {
    event.preventDefault();
    resultado.innerHTML = '';

    const nome = document.getElementById('fnome').value;
    const idade = document.getElementById('fidade').value;
    const linguagem = document.getElementById('flinguagem').value;

    if (nome && idade && linguagem) {
        const mensagem = `Olá, ${nome}! Você tem ${idade} anos e está aprendendo ${linguagem}.`

        const p = document.createElement('p')
        p.textContent = mensagem;
        p.style.display = 'inline-block'; 
        p.style.color = 'black';
        p.style.margin = '10px'; 

        resultado.appendChild(p)

        exibirPergunta(linguagem)
    } else {
        resultado.style.color = 'red'
        resultado.textContent = 'Preencha todos os campos.';
    }

}

function exibirPergunta(linguagem){
    
    const perguntaElemento = document.getElementById('pergunta_adicional');
    const pergunta = document.getElementById('pergunta');

    perguntaElemento.style.display = 'block';

    pergunta.innerHTML = `Você gosta de programar em ${linguagem}? Digite "sim" ou "não"`;

    responderPergunta()     
}

function responderPergunta(){

    let resposta = document.getElementById('input_resposta');
    let motrarResposta = document.getElementById('resposta');
    motrarResposta.innerHTML = ''

    if (resposta.value === 'sim'){
        motrarResposta.innerHTML = 'Muito bom! Continue estudando e você terá muito sucesso.'
    } else if(resposta.value === 'não'){
        motrarResposta.innerHTML = 'Ahh que pena... Já tentou aprender outras linguagens?'
    } 
}

botaoFormulario.addEventListener('click', exibirDados);
botaoResponder.addEventListener('click', responderPergunta);
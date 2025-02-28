const botaoVerificarNumero =  document.getElementById('verificar_numero');
const botaoJogarNovamente = document.getElementById('jogar_novamente');
let numeroSorteado = numeroRandomico();
let tentativas = 3;

function numeroRandomico(){
    let novoNUmero = (Math.floor(Math.random() * 10));
    return novoNUmero;
}

function mensagemTela(tag, mensagem){
    let mensagemElement = document.querySelector(tag);
    mensagemElement.innerHTML = mensagem;
    return mensagemElement;
}

function verificarNumero(){
    let inputNumero = document.getElementById('input_numero').value;
    
    if(inputNumero == numeroSorteado){
    mensagemTela('p', 'Parabéns você acertou o número').style.color = 'orange';
    botaoJogarNovamente.disabled = false;

    } else{
    mensagemTela('p', 'Você errou o número, tente novamente').style.color = 'red';
    tentativas--;
    mensagemTela('h2', `Você ainda tem ${tentativas} tentativas`).style.color = 'yellow';

    if(tentativas == 0){
        mensagemTela('p', 'Suas tentativas acabaram').style.color = 'red';
        botaoVerificarNumero.disabled = true;
        botaoJogarNovamente.disabled = false;
        }
    }
}

function resetarJogo(){
    numeroSorteado = numeroRandomico();
    document.getElementById('input_numero').value = '';
    mensagemTela('p', '');
    mensagemTela('h2', '');
    tentativas = 3;
    botaoVerificarNumero.disabled = false;
    botaoJogarNovamente.disabled = true;
}

botaoVerificarNumero.addEventListener('click', verificarNumero);
botaoJogarNovamente.addEventListener('click', resetarJogo);

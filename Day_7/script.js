const visor = document.getElementById('visor');
const botoes = document.querySelectorAll('.btn');
const limpar = document.getElementById('limpar');
const igual = document.getElementById('igual');

botoes.forEach(btn => {
    btn.addEventListener('click', () => {
    visor.value += btn.getAttribute('data-value');
    });
});

limpar.addEventListener('click', () => {
    visor.value = '';
});

igual.addEventListener('click', () => {
    try {
    visor.value = eval(visor.value);
    } catch (error) {
    visor.value = 'Erro';
    }
});

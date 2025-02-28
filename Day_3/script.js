const botaoFrontEnd = document.getElementById('front_end');
const botaoBackEnd = document.getElementById('back_end');
const botaoReact = document.getElementById('react');
const botaoVue = document.getElementById('vue');
const botaoCSharp = document.getElementById('c_sharp');
const botaoJava = document.getElementById('java');
const boatoEspecialista = document.getElementById('especialista');
const botaoFullSatck = document.getElementById('full_stack');
const escolherArea = document.getElementById('escolher_area');
const menssagem = document.getElementById('menssagem');
const botaoAdicionarTech = document.getElementById('adicionar_tech');

let tecnologias = []

function escolhaFrontBack(){
    document.addEventListener('click', function(event){
        const elementoClicado = event.target;
    
        if (elementoClicado.id === 'front_end'){
            botaoReact.removeAttribute('hidden');
            botaoVue.removeAttribute('hidden')
            botaoBackEnd.style.display = 'none';
    
        } else if(elementoClicado.id === 'back_end'){
            botaoCSharp.removeAttribute('hidden');
            botaoJava.removeAttribute('hidden');
            botaoFrontEnd.style.display = 'none';
        }
    
        if (elementoClicado.id === 'react'){
            botaoFrontEnd.disabled = true;
            botaoVue.style.display = 'none';
            escolherArea.removeAttribute('hidden');
    
        } else if(elementoClicado.id === 'vue'){
            botaoFrontEnd.disabled = true;
            botaoReact.style.display = 'none';
            escolherArea.removeAttribute('hidden');
    
        } else if (elementoClicado.id === 'c_sharp'){
            botaoBackEnd.disabled = true;
            botaoJava.style.display = 'none';
            escolherArea.removeAttribute('hidden');
    
        } else if(elementoClicado.id === 'java'){
            botaoBackEnd.disabled = true;
            botaoCSharp.style.display = 'none';
            escolherArea.removeAttribute('hidden');
        }
    });
}

function escolhaArea(){
    document.addEventListener('click', function(event){
        const elementoClicado = event.target;
        const section_2 = document.getElementById('section_2');

        if (elementoClicado.id === 'especialista'){
            botaoFullSatck.style.display = 'none';
            menssagem.innerHTML = 'Ótimo é muito bom manter o foco!';
            section_2.removeAttribute('hidden');
    
        } else if(elementoClicado.id === 'full_stack'){
            boatoEspecialista.style.display = 'none';
            menssagem.innerHTML = 'Você irá ampliar as suas habilidades!';
            section_2.removeAttribute('hidden');
        }
    });
}

function adicionarTecnologia(){
    
    const inputTecnologia = document.getElementById('itech');
    const alerta = document.getElementById('alerta');
    let novaTecnologia = inputTecnologia.value.trim();

    if (novaTecnologia === ''){
        alerta.style.color = 'red';
        alerta.textContent ='Digite uma tecnologia!';
        inputTecnologia.focus();
        return;
    }

    if (tecnologias.includes(novaTecnologia)){
        alerta.style.color = 'red';
        alerta.textContent ='Tecnologia já adicionada!';
        inputTecnologia.focus();
        return;
    }

    tecnologias.push(novaTecnologia);
    alerta.textContent = '';
    inputTecnologia.value = '';
    atualizarListaTecnologias(tecnologias)
    inputTecnologia.focus();
    return tecnologias;
}

function atualizarListaTecnologias(tecnologias){
    const listaTecnologias = document.getElementById('lista_tech');
    listaTecnologias.innerHTML = '';

    for(let i=0; i < tecnologias.length; i++){
        const li = document.createElement('li');
        li.textContent = tecnologias[i];
        listaTecnologias.appendChild(li);
    }
}

escolhaFrontBack();
escolhaArea();
botaoAdicionarTech.addEventListener('click', adicionarTecnologia);
const listaDeCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: []
}

const botaoAdicionarProduto = document.getElementById("adicionar_produto");
const botaoMostrarLista = document.getElementById("mostrar_lista");
const botaoCriarLista = document.getElementById("criar_lista");
const botaoNaoCriarLista = document.getElementById("nao_criar_lista");
const botaoFibalizarLista = document.getElementById("finalizar_lista");
const menssagensCriacao = document.getElementById("menssagens_criacao");
const menssagensListagem = document.getElementById("menssagens_lista");


function avisosCricaoLista(mensagem) {
    menssagensCriacao.style.color = 'red';
    menssagensCriacao.innerHTML = mensagem;
}

function avisosItensListagem(mensagem){
    menssagensListagem.style.color = 'red';
    menssagensListagem.innerHTML = mensagem;
}


function menssagemItemAdicionado() {
    menssagensCriacao.style.color = 'green';
    menssagensCriacao.innerHTML = 'Item adicionado com sucesso';
}

function entradaVazia(item) {
    if (item === '') {
        avisosCricaoLista('Digite um nome de item válido');
        avisosItensListagem('Digite um nome de item válido')
        return true;
    }
    return false;
}

function verificarProdutoLista(item){
    if(listaDeCompras.frutas.includes(item) || listaDeCompras.laticinios.includes(item) 
        || listaDeCompras.congelados.includes(item) || listaDeCompras.doces.includes(item)){
        resetarEntrada();
        avisosCricaoLista('Item já adicionado');
        return true;

    }
}

function resetarEntrada() {
    const input = document.getElementsByClassName('entrada_valores')[0];
    if (input) {
      input.value = '';
      input.focus();
    }
  }

function manipularLista() {
    document.addEventListener('click', function(event) {
        if(event.target.id === 'criar_lista') {
            document.getElementById('criar_lista_compras').hidden = false;
            botaoNaoCriarLista.disabled = true;
            
        }else if(event.target.id === 'nao_criar_lista') {
            botaoNaoCriarLista.hidden = false;
            botaoCriarLista.disabled = true;
            document.getElementById('lista_nao_criada').hidden = false;
            document.getElementById('mostrar_lista_compras').hidden = false;

        }else if(event.target.id === 'finalizar_lista') {
            botaoCriarLista.disabled = true;
            botaoAdicionarProduto.disabled = true;
            document.getElementById('mostrar_lista_compras').hidden = false;
            
        }else if(event.target.id === 'adicionar_produto') {
            adicionarItem();
        }else if(event.target.id === 'mostrar_lista') {
            mostrarLista();
        }
    });
}

function adicionarItem() {
    const select = document.getElementById("categoria");
    const opcao = select.options[select.selectedIndex].text.toLowerCase();
    const input_produto = document.getElementById("input_produto").value.trim();
    const item = input_produto;

    if (entradaVazia(item)) return;
    if (verificarProdutoLista(item)) return;

    switch(opcao) {
        case 'frutas':
            listaDeCompras.frutas.push(item);
            menssagemItemAdicionado();
            resetarEntrada()
            break;

        case 'laticínios':
            listaDeCompras.laticinios.push(item);
            menssagemItemAdicionado();
            resetarEntrada()
            break;

        case 'congelados':
            listaDeCompras.congelados.push(item);
            menssagemItemAdicionado();
            resetarEntrada()
            break;
        
        case 'doces':
            listaDeCompras.doces.push(item);
            menssagemItemAdicionado();
            resetarEntrada()
            break;

        default:
            avisosCricaoLista('Categoria não definida');
    }
}

function mostrarLista() {
    const listarCompras = document.getElementById("listar_compras")
    listarCompras.innerHTML = '';

    let listaVazia = true;

    Object.keys(listaDeCompras).forEach((categoria) => {
        if (listaDeCompras[categoria].length > 0) {
            document.getElementById('section_criar_lista_compras').hidden = true;
            listaVazia = false;
            const ul = document.createElement('ul');
            ul.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
            listarCompras.appendChild(ul);

            listaDeCompras[categoria].forEach((item) => {
                const li = document.createElement('li');
                li.textContent = item;
                listarCompras.appendChild(li);
            });
        }
    });

    if (listaVazia) {
        avisosItensListagem('Lista de compras vazia');
    }
}

function buscarItem() {
    const botaoBuscarItem = document.getElementById('buscar_item');
    const botaoDeletarItem = document.getElementById('deletar_item');
    const botaoAtualizarLista = document.getElementById('atualizar_lista');
    const itemEncontradoElemento = document.getElementById('mostrar_item');
  
    botaoBuscarItem.addEventListener('click', function() {

      const item = document.getElementById('input_buscar_item').value.trim();
  
      if (entradaVazia(item)) return;
  
      let encontrado = false;
      Object.keys(listaDeCompras).forEach((categoria) => {
        if (listaDeCompras[categoria].includes(item)) {
          encontrado = true;
        }
      });
  
      if (encontrado) {
        itemEncontradoElemento.innerHTML = `${item}`;
      } else {
        avisosItensListagem(`${item} não consta na lista`);
      }
      resetarEntrada(); 
    });
  
    botaoDeletarItem.addEventListener('click', function() {
      const item = document.getElementById('input_buscar_item').value.trim();
      if (entradaVazia(item)) return; 
      deletarItem(item);
      itemEncontradoElemento.innerHTML = `${item} deletado com sucesso`;
    });

    botaoAtualizarLista.addEventListener('click', function(){
        mostrarLista();
        itemEncontradoElemento.innerHTML = '';

    })
}
  
function deletarItem(item) {
    Object.keys(listaDeCompras).forEach((categoria) => {
        const index = listaDeCompras[categoria].indexOf(item);
        if (index > -1) {
        listaDeCompras[categoria].splice(index, 1);
        
        }
    });
}

buscarItem();
manipularLista();


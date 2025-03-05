const listaDeCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: []
  };
  
  const botaoAdicionarProduto = document.getElementById("adicionar_produto");
  const botaoMostrarLista = document.getElementById("mostrar_lista");
  const botaoCriarLista = document.getElementById("criar_lista");
  const botaoNaoCriarLista = document.getElementById("nao_criar_lista");
  const botaoFinalizarLista = document.getElementById("finalizar_lista");
  const menssagensCriacao = document.getElementById("menssagens_criacao");
  const menssagensListagem = document.getElementById("menssagens_lista");
  
  function mostrarAvisos(mensagem) {
    menssagensCriacao.style.color = 'red';
    menssagensCriacao.innerHTML = mensagem;
  }

  function mostrarAvisosListagem(mensagem){
    menssagensListagem.style.color = 'red';
    menssagensListagem.innerHTML = mensagem;
  }
  
  function menssagemItemAdicionado() {
    menssagensCriacao.style.color = 'green';
    menssagensCriacao.innerHTML = 'Item adicionado com sucesso';
  }
  
  function entradaVazia(item) {
    if (item === '') {
      mostrarAvisos('Digite um nome de item válido');
      return true;
    }
    return false;
  }
  
  function verificarProdutoLista(item) {
    if (
      listaDeCompras.frutas.includes(item) ||
      listaDeCompras.laticinios.includes(item) ||
      listaDeCompras.congelados.includes(item) ||
      listaDeCompras.doces.includes(item)
    ) {
      resetarEntrada();
      mostrarAvisos('Item já adicionado');
      return true;
    }
    return false;
  }
  
  function resetarEntrada() {
    const input = document.getElementById("input_produto");
    input.value = '';
    input.focus();
  }
  
  function adicionarItem() {
    const select = document.getElementById("categoria");
    const opcao = select.options[select.selectedIndex].text.toLowerCase();
    const input_produto = document.getElementById("input_produto").value.trim();
    const item = input_produto;
  
    if (entradaVazia(item)) return;
    if (verificarProdutoLista(item)) return;
  
    switch (opcao) {
      case 'frutas':
        listaDeCompras.frutas.push(item);
        break;
      case 'laticínios':
        listaDeCompras.laticinios.push(item);
        break;
      case 'congelados':
        listaDeCompras.congelados.push(item);
        break;
      case 'doces':
        listaDeCompras.doces.push(item);
        break;
      default:
        mostrarAvisos('Categoria não definida');
        return;
    }
  
    menssagemItemAdicionado();
    resetarEntrada();
  }
  
  function mostrarLista() {
    const listarCompras = document.getElementById("listar_compras");
    const mensagem_lista = document.getElementById("menssagens_lista")
    listarCompras.innerHTML = '';
  
    let listaVazia = true;
  
    Object.keys(listaDeCompras).forEach((categoria) => {
      if (listaDeCompras[categoria].length > 0) {
        listaVazia = false;
        
        document.getElementById('section_criar_lista_compras').hidden = true;

        const tituloCategoria = document.createElement('h4');
        tituloCategoria.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        const ul = document.createElement('ul');
  
        listaDeCompras[categoria].forEach((item) => {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });
  
        listarCompras.appendChild(tituloCategoria);
        listarCompras.appendChild(ul);
      }
    });
  
    if (listaVazia) {
        mostrarAvisosListagem('Lista vazia');
    }
  }
  
  function manipularLista() {
    document.addEventListener('click', function(event) {
      switch (event.target.id) {
        case 'criar_lista':
          document.getElementById('criar_lista_compras').hidden = false;
          botaoNaoCriarLista.disabled = true;
          break;
  
        case 'nao_criar_lista':
          botaoCriarLista.disabled = true;
          document.getElementById('lista_nao_criada').hidden = false;
          document.getElementById('mostrar_lista_compras').hidden = false;
          break;
  
        case 'finalizar_lista':
          botaoCriarLista.disabled = true;
          botaoAdicionarProduto.disabled = true;
          document.getElementById('mostrar_lista_compras').hidden = false;
          break;
  
        case 'adicionar_produto':
          adicionarItem();
          break;
  
        case 'mostrar_lista':
          mostrarLista();
          break;
        
        default:
          break;
      }
    });
  }
  
  manipularLista();
  
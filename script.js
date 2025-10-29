const botoesComprar = document.querySelectorAll('.btn-comprar');

botoesComprar.forEach(botao => {
  botao.addEventListener('click', () => {
    // procura o contêiner do produto (.produto, .produto-02, .produto-03 ou .item)
    const produto = botao.closest('.produto, .produto-02, .produto-03, .item');
    if (!produto) return; // segurança caso não ache

    // tenta pegar nome e preço de diferentes estruturas
    const nomeEl = produto.querySelector('h3, p');
    const precoEl = produto.querySelector('.preco, strong');

    if (!nomeEl || !precoEl) {
      alert('Erro: não foi possível identificar o produto.');
      return;
    }

    const nome = nomeEl.innerText.trim();
    const preco = precoEl.innerText.trim();
    const imagem = produto.querySelector('img')?.src || '';

    // cria o objeto do item
    const item = { nome, preco, imagem };

    // busca carrinho existente ou cria um novo
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // adiciona o novo produto
    carrinho.push(item);

    // salva novamente no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${nome} foi adicionado ao carrinho!`);
  });
});




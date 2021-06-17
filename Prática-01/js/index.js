const inserirImovel = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector('.lista');
    const titulo = document.querySelector('#titulo');
    const descricao = document.querySelector('#descricao');
    const quartos = document.querySelector('#quartos');
    const vagasGaragem = document.querySelector('#vagas-garagem');
    const areaTerreno = document.querySelector('#area-terreno');
    const areaConstruida = document.querySelector('#area-construida');
    const localidade = document.querySelector('#localidade');
    const preco = document.querySelector('#preco');
    const imagem = document.querySelector('#imagem');
    
    const tarefa = document.createElement('li');
    const conteudo = `<p class="info">Título: ${titulo.value}<br>Descrição: ${descricao.value}<br>Quartos: ${quartos.value}<br>Vagas de Garagem: ${vagasGaragem.value}<br>Área do Terreno: ${areaTerreno.value}<br>Área Construída: ${areaConstruida.value}<br>Localidade: ${localidade.value}<br>Preço: ${preco.value}</p><img src="${imagem.value}" class="imagem-imovel"><hr>`; 

    tarefa.innerHTML = conteudo;
    lista.appendChild(tarefa);
    titulo.value = descricao.value = quartos.value = vagasGaragem.value = areaTerreno.value = areaConstruida.value = localidade.value = preco.value = imagem.value = '';
}

const limparCampos = (evento) => {
    evento.preventDefault();

    const titulo = document.querySelector('#titulo');
    const descricao = document.querySelector('#descricao');
    const quartos = document.querySelector('#quartos');
    const vagasGaragem = document.querySelector('#vagas-garagem');
    const areaTerreno = document.querySelector('#area-terreno');
    const areaConstruida = document.querySelector('#area-construida');
    const localidade = document.querySelector('#localidade');
    const preco = document.querySelector('#preco');
    const imagem = document.querySelector('#imagem');

    titulo.value = descricao.value = quartos.value = vagasGaragem.value = areaTerreno.value = areaConstruida.value = localidade.value = preco.value = imagem.value = '';
}

const novoImovel = document.querySelector('.inserir');
novoImovel.addEventListener('click', inserirImovel);

const limpar = document.querySelector('.limpar');
limpar.addEventListener('click', limparCampos);
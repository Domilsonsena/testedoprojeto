/*let list = document.querySelector(".list");
/*import { produtos } from './produtos.js';
import { formatarMoeda } from './utils.js';



function initApp() {
  produtos.forEach((value, index) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
            <img src="./imgs/${value.imagem}">
            <div class="title">${value.title}</div>
            <div class="atualprice">${value.atualprice.toLocaleString()}</div>
            <div class="price">${value.price.toLocaleString()}</div>`;
    list.appendChild(newDiv);
  })

}
initApp();


//começo do filtro
const listaProdutos = document.getElementsByClassName('.list');
const pesquisaInput = document.getElementById('pesquisa');

function exibirProdutos(produtosParaExibir) {
    listaProdutos.innerHTML = '';

    const itensLista = produtosParaExibir.map(produto => {
        const item = document.createElement('li');
        item.textContent = `${produto.title} - ${formatarMoeda(produto.atualprice)}`;
        return item;
    });

}

function filtrarProdutos() {
    const termoPesquisa = pesquisaInput.value.toLowerCase();
    const produtosFiltrados = produtos.filter(produto => {
        const termoNumerico = parseFloat(termoPesquisa);
        return produto.title.toLowerCase().includes(termoPesquisa) || produto.atualprice === termoNumerico;
    });
    exibirProdutos(produtosFiltrados);
 
    
}


//fim do filtro


//exibir produtos filtrados
exibirProdutos(produtos);

pesquisaInput.addEventListener('input', filtrarProdutos);
//exibir produtos filtrados

*/



import { produtos } from './produtos.js';
import { formatarMoeda } from './utils.js';
let list = document.querySelector(".list"); // Seleciona a lista usando querySelector

function initApp() {
    produtos.forEach((value, index) => {
        let newLi = document.createElement('div'); // Cria elementos <li>
        newLi.classList.add('item');
        newLi.innerHTML =  `
            <img src="./imgs/${value.imagem}" 
            <div class="title">${value.title}</div>
            <div class="atualprice">${value.atualprice.toLocaleString()}</div>
            <div class="price">${value.price.toLocaleString()}</div>`;
        list.appendChild(newLi); // Adiciona os <li> à lista
    });
}

initApp();


const pesquisaInput = document.getElementById('pesquisa');

function exibirProdutos(produtosParaExibir) {
    list.innerHTML = ''; // Limpa a lista *corretamente*

    produtosParaExibir.forEach(produto => { // Use forEach para iterar e adicionar os elementos
        const item = document.createElement('li');
        item.classList.add('item');
        item.textContent = `${produto.title} - ${formatarMoeda(produto.atualprice)}`;
        list.appendChild(item);
    });
}

function filtrarProdutos() {
    const termoPesquisa = pesquisaInput.value.toLowerCase();

    const produtosFiltrados = produtos.filter(produto => {
        return produto.title.toLowerCase().includes(termoPesquisa) || produto.atualprice.toLowerCase().includes(termoPesquisa); // converte o preço para lowerCase tambem
    });

    exibirProdutos(produtosFiltrados);
}

exibirProdutos(produtos); // Exibe todos os produtos inicialmente

pesquisaInput.addEventListener('input', filtrarProdutos);

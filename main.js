$(document).ready(function() {
    $('#carousel-imagens').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    })
})

// dispara os comandos depois que todos os elementos já foram carregados
document.addEventListener("DOMContentLoaded", function () {
    gerarProdutos(13)
})

// cria o html de cada produto, pega a div com id = "produtos_lista", e coloca o html dentro dela
function gerarProdutos(quantidade) {
    let produtosHtml = ""
    for (let id = 1; id <= quantidade; id++) {
        produtosHtml += `<div class="col-3 col-md-6 col-sm-12 produto-container">`
        produtosHtml += `  <div class="produto-content">` // Conteúdo do produto
        produtosHtml += `    <img class="w-100 bg-secondary" src="./img/produto_${id}.jpg" alt="...">`
        produtosHtml += `    <p><strong>Nome do produto ${id}</strong></p>`
        produtosHtml += `    <p class="text-align-justify">`
        produtosHtml += `       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quam`
        produtosHtml += `       voluptas impedit in nemo sit, dolorum tempore rem nam cumque cum sint nisi earum`
        produtosHtml += `       exercitationem aspernatur rerum repudiandae ipsum consequuntur!`
        produtosHtml += `    </p>`
        produtosHtml += `  </div>`
        produtosHtml += `  <button class="btn-primary mt-3">Adicionar ao carrinho</button>` // Botão
        produtosHtml += `</div>`
    }
    document.getElementById("produtos_lista").innerHTML = produtosHtml
}


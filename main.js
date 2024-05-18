$(document).ready(function() {
    $('#carousel').slick({
        autoplay:true,
    });
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle(); /* se o conteudo não esta sendo exibido ele executa o slidedwonm ele verifica se esta executado efaz o slideup */
    })
})
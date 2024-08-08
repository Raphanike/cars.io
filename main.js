$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true
    })
    
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00)0000-0000') 

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            memsagem: {
                required: true
            },
            veiculoDesejado: {
                required: false
            }
        },
        messages:{
            nome:'Campo Obrigatório'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento,validador){
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos Incorretos`)
            }
            
        }
    })
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato')
        const nomeVeiculo =  $(this).parent().find('h3').text()

        $('#veiculo-desejado').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
})
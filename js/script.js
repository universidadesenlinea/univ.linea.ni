$(document).ready(main);

var valorleft = -100;

function main(){
    $('.menu_bar').click(function(){
        if(valorleft == -100){
            $('#navbar_sup').animate({
                left: '0'
            });
            
            valorleft= 0;
        }else{
            valorleft= -100;
            $('#navbar_sup').animate({
            left: '-100%'
            });
        }
    });
    
    //Mostrar el submenu
    
    $('.submenu').click(function(){
        $(this).children('.children').slideToggle();
    });
    
    
    //Aplicar sombra
    
    $(window).scroll(function(){
       var scroll = $(this).scrollTop();
        if(scroll > 10){
            $('#contenedor_cabecera').addClass("sombra_inferior blanco_con_transparencia");
        }else{
            $('#contenedor_cabecera').removeClass("sombra_inferior blanco_con_transparencia");
        }
    });
    
    
}
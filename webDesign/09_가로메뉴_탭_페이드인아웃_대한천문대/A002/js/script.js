$(function(){
    /*메뉴*/
    $('.nav>li').on('mouseover focusin', function(){
        $(this).find('.sub').stop().slideDown(500);
    });
    $('.nav>li').on('mouseout focusout', function(){
        $(this).find('.sub').stop().slideUp(500);
    });
    
    /*슬라이드*/
    $('.imgslide a:gt(0)').hide();
    setInterval(function(){
        $('.imgslide a:first-child').fadeOut().next('a').fadeIn().end().appendTo('.imgslide');
    },3000);
    
    /*탭*/
    $('.tabmenu>li>a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        return false;
    });
    
    /*팝업*/
    $('.notice li:first').click(function(){
        $('.modal').stop().fadeIn();
    });
    $('.modal .btn').click(function(){
        $('.modal').stop().fadeOut();
    });
});
$(document).ready(function(){

    // 탑배너
    $('.tb_item').eq(0).css({top: 0});
    
    let tb_idx = 0;
    let tb_count = $('.tb_item').length;
    let tb_timer = 500;
    
    setInterval(function(){
        // 나갈판
        $('.tb_item').eq(tb_idx % tb_count).animate({
            top: '-100%'
        }, tb_timer)

        // 들어올판
        $('.tb_item').eq((tb_idx+1) % tb_count).css({
            top: '100%'
        }).animate({
            top: '0'
        }, tb_timer)
        tb_idx+=1;
    }, tb_timer + 500);


    // nav에 hover 하면 메뉴100%, 판의 알맹이 나타나게 하기 
    $('.nav_item').hover(function(){
        $('.pan').stop().slideDown(300)
 
        $('.pan_item').css({display: 'none'})
        $('.pan_item').eq($(this).index()).css({
            display: 'flex'
        })
    }, function(){
        $('.pan').stop().slideUp(300)
    })

    $('.pan').hover(function(){
        $('.pan').stop().slideDown(300)
         

    }, function(){
        $('.pan').stop().slideUp(300)
    })


    // 스크롤 내려가면 nav바 끌고 다니게 하기
    let nav_o_top = $('.nav').offset().top;
    $(window).scroll(function(){    
        let s_top = $(window).scrollTop() + 40;

        if(nav_o_top <= s_top) {
            $('.nav').addClass('nav_active')
            $('.pan').css({
                position: 'fixed',
                top: (40 + 51),
                left: 0
            })
        }
        else {
            $('.nav').removeClass('nav_active')
            $('.pan').css({
                position: 'absolute',
                top: '100%',
                left: '0'
            })
        }
    })

})
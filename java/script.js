$('.word1').hide();
        $('.word1').hide();
        $('#me1').animate({opacity:1});
    
        $('#img1').hover(function(){
            $(this).stop().animate({opacity:.4},200);
            $('.word1').fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1},500)
            $('.word1').fadeOut();      
        });
        // ------------------------------------------
    
        $('.word2').hide();
        $('#me2').animate({opacity:1});
    
        $('#img2').hover(function(){
            $(this).stop().animate({opacity:.4},200);
            $('.word2').fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1},500)
            $('.word2').fadeOut();      
        });
    // -----------------------------------------
    $('.word3').hide();
    $('#me3').animate({opacity:1});
    
    $('#img3').hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.word3').fadeIn();
    },
    function(){
        $(this).stop().animate({opacity:1},500)
        $('.word3').fadeOut();      
    });
    //----------------------------------------- 
    $('.word4').hide();
    $('#me4').animate({opacity:1});
    
    $('#img4').hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.word4').fadeIn();
    });
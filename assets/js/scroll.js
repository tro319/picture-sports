
jQuery(function($) {

    $(window).on('load scroll', function () {
        var box = $('.fadeIn');
        var box2 = $('.fadeIn2');
        var animated = 'animated';
    
        box.each(function() {
            var boxOffset = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
    
            var wh = $(window).height();
    
            if (scrollPos > boxOffset - wh + 500){
                $(this).addClass(animated);
            }
    
        })

        box2.each(function() {
            var boxOffset = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
    
            var wh = $(window).height();
    
            if (scrollPos > boxOffset - wh + 10){
                $(this).addClass(animated);
            }
    
        })
    })
  
})


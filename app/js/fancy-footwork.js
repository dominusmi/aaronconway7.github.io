$(window).on("load", function() {
	// Animate loader off screen
    setTimeout(function(){
        $("#loader").fadeOut(1000, function(){
            $('.universe').fadeIn(1000);
            setTimeout(typed, 1000);
            $('.grid').masonry();
        });
    }, 3000);
});

$(document).ready(function(){
    animatedScroll();
    typed2();
    portfolioDescription();
    masonry();
});

$(window).scroll(function(){
    navDots();
    sectionScrolled();
});

function animatedScroll() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}

function typed(){
    $(".typed").typed({
      stringsElement: $('#typed-strings'),
      typeSpeed: 125,
      contentType: 'text', // or 'html'
      callback: function() {
            $('#hello .content h1').addClass('loaded');
      }
    });
}

function typed2(){
    $(".typed-2").typed({
      strings: ["Hello.", "Hi.", "Sup.","What's gwanin?", "Yo.", "What's up?"],
      typeSpeed: 30,
      loop: true,
      contentType: 'text' // or 'html'
    });
}

function portfolioDescriptionLoad() {
    $('#portfolio .description .loading .loading-bar').addClass('loaded');
    setTimeout( function(){
        $('#portfolio .description .loading').fadeOut();
        $('#portfolio .description .content').show();
        $('#portfolio .description .close').show();
    }, 3000 );
}

function portfolioDescriptionUnLoad() {
    $('#portfolio .description .loading .loading-bar').removeClass('loaded');
    $('#portfolio .description .loading').show();
    $('#portfolio .description .content').hide();
    $('#portfolio .description .close').hide();
}

function portfolioDescription(){
    $('#portfolio .client').click(function(){
        $(this).find('.description').addClass('is-open');
        $('body').addClass('no-scroll');
        portfolioDescriptionLoad();
    });

    $('#portfolio .wrok .client .description .close span').click(function(){
        $(this).parent().parent().removeClass('is-open');
        $(this).parents('.description').removeClass('is-open');
        $('body').removeClass('no-scroll');
        setTimeout( function(){
            portfolioDescriptionUnLoad();
        }, 1000 );
    });
}

function navDots(){
    var wScroll = $(window).scrollTop();
    var sectionNo;
    $('section').each(function(i){
        if(wScroll >= $(this).offset().top){
            sectionNo = i + 1;
        }
    });
    $('.nav-dots ul li').removeClass('is-active');
    $('.nav-dots ul a:nth-of-type('+sectionNo+') li').addClass('is-active');


    $('.nav-dots ul li').each(function(){
        var navDotMid = $(this).offset().top + ($(this).height()/2);
        if( navDotMid > $('#portfolio').offset().top){

            if(navDotMid > $('#projects').offset().top){
                $(this).css('background-color', 'black');
            } else {
                $(this).css('background-color', 'white');
            }

        } else {
            $(this).css('background-color', 'black');
        }
    });

}

function masonry(){
    $('.grid').masonry({
        itemSelector: '.work',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
}

function sectionScrolled(){

    var wScroll = $(window).scrollTop();
    var wHeight = $(window).height();

    $('section').each(function(i){
        if((wScroll + (wHeight * 0.75)) > $('section').eq(i).offset().top){
            $('section').eq(i).addClass('scrolled');
            if($('section').eq(i).is('#portfolio')){
                portfolioLoad();
            }
        }
    })
}

function portfolioLoad(){
    $('.work').each(function(i){
        setTimeout(function(){
            $('.work').eq(i).addClass('loaded');
        }, 150 * (i+1));
    });
}

function typed(){
    $(".typed").typed({
      stringsElement: $('#typed-strings'),
      typeSpeed: 125,
      contentType: 'text', // or 'html'
      callback: function() {
            $('#hello-section .content h1').addClass('loaded');
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
    $('#portfolio-section .description .loading .loading-bar').addClass('loaded');
    setTimeout( function(){
        $('#portfolio-section .description .loading').fadeOut();
        $('#portfolio-section .description .content').show();
        $('#portfolio-section .description .close').show();
    }, 3000 );
}

function portfolioDescriptionUnLoad() {
    $('#portfolio-section .description .loading .loading-bar').removeClass('loaded');
    $('#portfolio-section .description .loading').show();
    $('#portfolio-section .description .content').hide();
    $('#portfolio-section .description .close').hide();
}

function portfolioDescription(){
    $('#portfolio-section .work').click(function(){
        $.fn.fullpage.setAutoScrolling(false);
        //$.fn.fullpage.moveTo(3);
        $(this).parents('.slide').find('.description').addClass('is-open');
        $('body').css('overflow', 'hidden');
        $('#fp-nav').hide();
        $('.fp-slidesNav').hide();
        portfolioDescriptionLoad();
    });

    $('#portfolio-section .description .close span').click(function(){
        $.fn.fullpage.setAutoScrolling(true);
        //$.fn.fullpage.moveTo(3);
        $(this).parents('.description').removeClass('is-open');
        $('body').css('overflow', 'visible');
        $('#fp-nav').show();
        $('.fp-slidesNav').show();
        setTimeout( function(){
            portfolioDescriptionUnLoad();
        }, 1000 );
    });
}

$(window).on("load", function() {
	// Animate loader off screen
    setTimeout(function(){
        $("#loader").fadeOut(1000, function(){
            $('.universe').fadeIn(1000);
            setTimeout(typed, 1000);
            setTimeout(function(){
                $('#fp-nav').show();
            }, 1000);
        });
    }, 3000);
});

$(document).ready(function(){
    typed2();
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        // fitToSection: false, //default: true
        scrollingSpeed: 1000, //default: 700
        // scrollBar: true, //deault: false
        responsiveWidth: 640,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrows: false,
        onLeave: function(index, nextIndex, direction){
            //var leavingSection = $(this);
            if(nextIndex == 3){
                $('#portfolio-section').addClass('in-view');
                $('#fp-nav ul li a span, .fp-slidesNav ul li a span').css('background-color', '#fff');
                $('#fp-nav ul li .fp-tooltip').addClass('light');
            } else {
                $('#portfolio-section').removeClass('in-view');
                $('#fp-nav ul li a span, .fp-slidesNav ul li a span').css('background-color', '#333');
                $('#fp-nav ul li .fp-tooltip').removeClass('light');
            }
        }
    });
    portfolioDescription();
});

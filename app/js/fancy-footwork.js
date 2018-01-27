$(document).ready(function(){
    console.log("I see you peeking 👀");
    window.sr = ScrollReveal();
    sr.reveal('.reveal');
    $('.js-tilt').tilt({
        perspective: 2000,
        scale: 1.2
    });
});

$(window).on("load", function() {
    setTimeout(function(){
        $('#index').addClass('loaded');
        typed();
    }, onLoad() + 500);
});

function typed(){
    Typed.new('.typed', {
        strings: ["Hello World!^500", "Hi.", "Yo.", "Sup.", "Wag1.", "What'gwanin?", "Hello.", "What's up?"],
        typeSpeed: 10,
        loop: true,
        showCursor: false
    });
}

function onLoad() {
  var now = new Date().getTime();
  return page_load_time = now - performance.timing.navigationStart;
}

$(window).on('hashchange', function() {
    var page = location.hash.slice(1).replace(/#/g , '/');
    if (page.indexOf("/") >= 0) {
        var href = page +".html";
        $('#portfolio-pull-out').load(href, function(){
            $(this).show();
            console.log("loaded");
        });
    }
});

// $('body').on("click", '#load-more', function(){
//     $('.work.old').toggle();
//     $(this).find('h1').html("Hide old work!");
// });
//
// $('body').on("click", '.theme-change', function(){
//     $(this).toggleClass('theme-black');
//     $('#portfolio').toggleClass('black')
// });
//
// $('body').on("click", '.small-grid', function(){
//     $('#grid').addClass('small');
// });
//
// $('body').on("click", '.big-grid', function(){
//     $('#grid').removeClass('small');
// });
//
// $('body').on("mouseenter", '.work', function(){
//     $(this).siblings('.work').addClass('hovered');
// }).on("mouseleave", '.work', function(){
//     $(this).siblings('.work').removeClass('hovered');
// });

$('.show-old-work').click(function(){
    $('#portfolio .item.old').toggle();
    if ($(this).find('h3').text() == "Show my old work!") {
        $(this).find('h3').text("Hide my old work!");
    } else {
        $(this).find('h3').text("Show my old work!");
    }
});

var portfolioScrolled = false;

$(window).scroll(function(e){
    var wScroll = $(this).scrollTop();

    if (wScroll >= $('#portfolio').offset().top) {
        if (!portfolioScrolled) {
            $(this).scrollTop($('#portfolio').offset().top);
            $('html').addClass('lock');
        }
    } else {
        if ($('.portfolio-panel').scrollTop() + $('.portfolio-panel').innerHeight() >= $('.portfolio-panel')[0].scrollHeight) {
            portfolioScrolled = true;
        } else {
            portfolioScrolled = false;
        }
    }

});

$('.portfolio-panel').scroll(function(){
    var wScroll = $(this).scrollTop();
    var iHeight = $(this).innerHeight();

    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
        portfolioScrolled = true;
        $('html').removeClass('lock');
    }

});

$('body').on("click", '#portfolio-pull-out .close-panel', function(){
    $('#portfolio-pull-out').hide();
    window.location.hash="portfolio";
});

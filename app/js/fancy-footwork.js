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
    var page = location.hash.slice(1).replace(/#/g , '/');
    if (page == "") {
        setTimeout(function(){
            $('#index').addClass('loaded');
            typed();
        }, onLoad() + 500);
    } else if (page.indexOf("portfolio/") >= 0) {
        var href = page +".html";
        $('#portfolio-pull-out').load(href, function(){
            $('#index').addClass('loaded');
            typed();
            $(window).scrollTop($('#portfolio').offset().top);
            $(this).addClass('loaded');
            setTimeout(function(){
                $('#portfolio-pull-out .portfolio-panel').addClass('loaded');
            }, 750);
        }, onLoad() + 500);
    } else if ($('#'+page).length > 0){
        setTimeout(function(){
            $('#index').addClass('loaded');
            typed();
            $(window).scrollTop($('#'+page).offset().top);
        }, onLoad() + 500);
    }
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
    if (page.indexOf("portfolio/") >= 0) {
        var href = page +".html";
        $('#portfolio-pull-out').load(href, function(){
            $(this).addClass('loaded');
            $('html').addClass('lock');
            setTimeout(function(){
                $('#portfolio-pull-out .portfolio-panel').addClass('loaded');
            }, 750);
        });
    }
});

$('.show-old-work').click(function(){
    $('#portfolio .item.old').toggle();
    if ($(this).find('h3').text() == "Show my old work!") {
        $(this).find('h3').text("Hide my old work!");
    } else {
        $(this).find('h3').text("Show my old work!");
    }
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if (wScroll >= $('#about').offset().top) {
        $('.hero').addClass('transparent');
        if (wScroll >= $('#portfolio').offset().top) {
            $('#portfolio').addClass('fixed');
            if (wScroll >= $('#contact').offset().top) {
                $('#portfolio').addClass('transparent');
            } else {
                $('#portfolio').removeClass('transparent');
            }
        } else {
            $('#portfolio').removeClass('fixed');
        }
    } else {
        $('.hero').removeClass('transparent');
    }
});

$('body').on("click", '#portfolio-pull-out .close-panel', function(){
    $('#portfolio-pull-out .portfolio-panel').removeClass('loaded');
    setTimeout(function(){
        $('#portfolio-pull-out').removeClass('loaded');
    }, 500);
    $('html').removeClass('lock');
    window.location.hash="portfolio";
});

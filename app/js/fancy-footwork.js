$(document).ready(function(){
    console.log("I see you peeking 👀");
    window.sr = ScrollReveal();
});

$(window).on("load", function() {
    var page = location.hash.slice(1).replace(/#/g , '/');
    if (page == "") {
        page = "home";
    }
    var href = page +".html";
    $('main').attr('id', page);
    $('main').load(href, function(){
        setTimeout(function(){
            $('#index').addClass('loaded');
            if (page == "home") {
                typed();
            } else if (page == "portfolio") {
                sr.reveal('.work');
            }
        }, 5000);
    });
});

$('main').on("load", function(){
    // var page = location.hash.slice(1).replace(/#/g , '/');
    // setTimeout(function(){
    //     $('#index').addClass('loaded');
    //     if (page == "home") {
    //         typed();
    //     }
    // }, onLoad()+5000);
    // window.sr = new scrollReveal();
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
    $('body').removeClass('loaded');
    var page = location.hash.slice(1).replace(/#/g , '/');
    if (page == "") {
        page = "home";
    }
    var href = page +".html";
    setTimeout(function(){
        $('main').attr('id', page);
        $('main').load(href, function(){
            setTimeout(function(){
                $('#index').addClass('loaded');
                if (page == "home") {
                    typed();
                } else if (page == "portfolio") {
                    sr.reveal('.work');
                }
            }, 0);
        });
    }, 1500)
});

$('body').on("click", '#load-more', function(){
    $('.work.old').toggle();
    $(this).find('h1').html("Hide old work!");
});

$('body').on("click", '.theme-change', function(){
    $(this).toggleClass('theme-black');
    $('#portfolio').toggleClass('black')
});

$('body').on("click", '.small-grid', function(){
    $('#grid').addClass('small');
});

$('body').on("click", '.big-grid', function(){
    $('#grid').removeClass('small');
});

$('body').on("mouseenter", '.work', function(){
    $(this).siblings('.work').addClass('hovered');
}).on("mouseleave", '.work', function(){
    $(this).siblings('.work').removeClass('hovered');
});

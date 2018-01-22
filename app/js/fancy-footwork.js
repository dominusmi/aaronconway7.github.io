$(document).ready(function(){
    console.log("I see you peeking 👀");
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
            }
        }, 5000);
    });
});

// $('main').on("load", function(){
//     var page = location.hash.slice(1).replace(/#/g , '/');
//     setTimeout(function(){
//         $('#index').addClass('loaded');
//         if (page == "home") {
//             typed();
//         }
//     }, onLoad()+5000);
// });

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
                }
            }, 5000);
        });
    }, 1500)
});

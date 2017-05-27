$(document).ready(function(){
});

$(window).on("load", function() {
    setTimeout(function(){
        $('#index').addClass('loaded');
        typed();
    }, onLoad()+5000);
});

function typed(){
    Typed.new('.typed', {
        strings: ["Hello World!^500", "Hi.", "Yo.", "Sup.", "Wag1.", "What'gwanin?", "Hello.", "What's up?"],
        typeSpeed: 30,
        loop: true,
        showCursor: false
    });
}

function onLoad() {
  var now = new Date().getTime();
  return page_load_time = now - performance.timing.navigationStart;
}

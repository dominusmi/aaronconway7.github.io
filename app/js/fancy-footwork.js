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
        // strings: ["The ting goes...", "skrrrahh!", "Pap, pap, ka-ka-ka", "Skidiki-pap-pap!", "And a pu-pu-drrrr-boom!", "Skya!", "Du-du-ku-ku-pun-pun!", "Poom, poom", "You dun know, Big Aaron^500"],
        typeSpeed: 10,
        // typeSpeed: 30,
        loop: true,
        showCursor: false
    });
}

function onLoad() {
  var now = new Date().getTime();
  return page_load_time = now - performance.timing.navigationStart;
}

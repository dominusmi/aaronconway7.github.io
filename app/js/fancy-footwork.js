$(document).ready(function(){
    typed();
});

// $(window).on("load", function() {
//     setTimeout(function(){
//         $('#loading').addClass('loaded');
//
//     }, 3000);
//     // $('#loading').fadeOut(1000);
//     // $('main').fadeIn(1000);
// });

function typed(){
    Typed.new('.typed', {
        strings: ["Hello World!", "Hi.", "Yo.", "Sup.", "Wag1.", "What'gwanin?", "Hello.", "What's up?"],
        typeSpeed: 30,
        loop: true,
        showCursor: false
    });
}

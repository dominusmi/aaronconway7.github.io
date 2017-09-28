$(document).ready(function(){
    $('.raw-testimonials').slide({
        quantity    :   3,
        timer       :   false,
        transition  :   true,
        controls    :   true,
        controlColor:   '#fff'
    });
});

$('.view').click(function(){
    if($(this).hasClass('list-view')){
        $('#list').show();
        $('#grid').hide();
    }else if($(this).hasClass('grid-view')){
        $('#list').hide();
        $('#grid').show();
    }
});

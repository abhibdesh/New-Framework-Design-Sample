$(document).ready(function() {
   

    $('#menu-icon').click(function() {
        $('#nav-menu').toggleClass('active');
    });

    $('.dropdown > a').click(function(event) {
        event.preventDefault();
        $(this).parent().toggleClass('active');
    });
});
$("#UserImage").click(function() {
    $(".UserMenu").slideToggle("Fast");
});
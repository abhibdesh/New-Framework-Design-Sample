$(document).ready(function() {
   

   
});

function ToggleMenu(){
    $('.nav-menux').slideToggle('fast');
}

function dropdownList(){
$('.dropdownx > a').click(function(event) {
    event.preventDefault();
    $(this).parent().toggleClass('active');
});
}

function ToggleUser() {
    $(".UserMenu").slideToggle("Fast");
}
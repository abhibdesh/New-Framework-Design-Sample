$(document).ready(function() {
   
const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];


const layout = {title:"Member Status"};

const data = [{labels:xArray, values:yArray, type:"pie", marker: {
    colors: ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F3"] // Custom colors
}}];

Plotly.newPlot("myChart", data, layout);
    
   
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
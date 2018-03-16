


$(document).ready(function(){
console.log('js is up!');


$('button#change-red').on('click', function() {
  $('#change-red-div').css('background-color', 'red');
})

$('button#change-green').on('click', function() {
  $('#change-green-div').css('background-color', 'green');
})

$('button#change-blue').on('click', function() {
  $('#change-blue-div').css('background-color', 'blue');
})

$('button#make-big').on('click', function() {
  $('#make-big-div').addClass('big-div');
})

$('button#make-small').on('click', function() {
  $('#make-small-div').addClass('small-div');
})

$('button#animate-div').on('click', function() {
  $('#make-animate-div').animate( {
  "margin-top" : "500px",
})
})

// $('li').on('mouseenter', function(){
//         $(this).addClass('white'); // 'this' applies addClass only to the one you've clicked
//     })
}) //closing (document).ready

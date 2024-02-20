$('#change-color').on('click', function(){
  $('button').css('border', '1px solid black');
  $('button').css('border-radius', '3px');
  $('#target').css('color', 'red');
  $('#change-color').css('border', '3px solid blue');
  $('#change-color').css('border-radius', '5px');
});

$('#change-text').on('click', function(){
  $('button').css('border', '1px solid black');
  $('button').css('border-radius', '3px');
  $('#target').text('Hello!');
  $('#change-text').css('border', '3px solid blue');
  $('#change-text').css('border-radius', '5px');
});

$('#fade-out').on('click', function(){
  $('button').css('border', '1px solid black');
  $('button').css('border-radius', '3px');
  $('#fade-out').css('border', '3px solid blue');
  $('#fade-out').css('border-radius', '5px');
  $('#target').fadeOut();
});

$('#fade-in').on('click', function(){
  $('button').css('border', '1px solid black');
  $('button').css('border-radius', '3px');
  $('#fade-in').css('border', '3px solid blue');
  $('#fade-in').css('border-radius', '5px');
  $('#target').fadeIn();
});
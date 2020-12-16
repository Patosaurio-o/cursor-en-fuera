$('img').on('click', function(){
  $(this).slideUp();
  decir('ouch');
});

$('#reset').on('click', function(){
  location.reload();
  decir('im back');
});

function decir(mensaje){
  var msg = new SpeechSynthesisUtterance();
  msg.text = mensaje;
  window.speechSynthesis.speak(msg)
};

function cambioImagen(){
  var img1 = $(this).attr('src');
  var img2 = $(this).attr('data-src');
  $(this).attr('src', img2);
  $(this).attr('data-src', img1);
};

$("img").hover(cambioImagen, cambioImagen);

$("img").hover(function(){
  $(this).css('transform', 'scale(1.2)');
},
function(){
  $(this).css('transform', 'scale(1)');
});
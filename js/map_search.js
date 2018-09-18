$(document).ready(function (){
  $('#spisok > li').click(function (){
    $('#container > div').hide();
    var i=$(this).data('id');
    $('#d'+i).fadeIn();
  });
});
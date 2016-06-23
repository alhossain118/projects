$(document).ready(init);

function init(){

  $('.boardSize').click(boardSizeStuff)



}

function boardSizeStuff (){
  var value = $('.sizeBoard').val()
  console.log(value);
  //$('.sizeBoard').val("")
  var $div = $('<div>').addClass('box');
  
  for(var i = 0; i < value; i++){
    $('.board').append($div)
  }
}

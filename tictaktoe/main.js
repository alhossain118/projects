$(document).ready(init);

var num = Math.floor((Math.random() * 2) + 1);
var settings = num;

function init (){
  if(settings === 1){
  $('.turn').text("Its player 1's turn")
  }
  else if(settings === 2){
    $('.turn').text("Its player 2's turn")
  }
  console.log("ready");
  $('.box').click(clickBox);
  $('.refresh').click(reset)
}

function reset(){
  location.reload();
}
function clickBox (event){
  console.log(event.target.id);

  if(settings === 1){
  $(event.target).addClass('image1');
  $('.turn').text("Its player 2's turn")
  settings = 2;
  }
  else if (settings === 2){
    $(event.target).addClass('image2');
    $('.turn').text("Its player 1's turn")
    settings = 1;
  }
  ////////

      if ( ($('#1').hasClass( "image1" )) && ($('#2').hasClass( "image1" )) && ($('#3').hasClass( "image1" )) ) {
        $('.turn').text("Player 1 Wins");
        settings = 3;
      }
      else if( ($('#4').hasClass( "image1" )) && ($('#5').hasClass( "image1" )) && ($('#6').hasClass( "image1" )) ) {
        $('.turn').text("Player 1 Wins");
      settings = 3;      }
      else if( ($('#7').hasClass( "image1" )) && ($('#8').hasClass( "image1" )) && ($('#9').hasClass( "image1" )) ) {
        $('.turn').text("Player 1 Wins");
      settings = 3;     }
      else if( ($('#1').hasClass( "image1" )) && ($('#4').hasClass( "image1" )) && ($('#7').hasClass( "image1" )) ) {
        $('.turn').text("Player 1 Wins");
      settings = 3;     }
      else if( ($('#2').hasClass( "image1" )) && ($('#5').hasClass( "image1" )) && ($('#8').hasClass( "image1" )) ) {
        $('.turn').text("Player 1 Wins");
      settings = 3;     }
      else if( ($('#3').hasClass( "image1" )) && ($('#6').hasClass( "image1" )) && ($('#9').hasClass( "image1" )) ) {
        $('.turn').text("Player 1 Wins");
      settings = 3;     }
      else if( ($('#1').hasClass( "image1" )) && ($('#5').hasClass( "image1" )) && ($('#9').hasClass( "image1" )) ) {
        $('.turn').text("Player 1 Wins");
      settings = 3;      }
      else if( ($('#3').hasClass( "image1" )) && ($('#5').hasClass( "image1" )) && ($('#7').hasClass( "image1" )) ) {
        $('.turn').text("Player 1 Wins");
      settings = 3;      }
      //////
      if ( ($('#1').hasClass( "image2" )) && ($('#2').hasClass( "image2" )) && ($('#3').hasClass( "image2" )) ) {
        $('.turn').text("Player 2 Wins");
      settings = 3;     }
      else if( ($('#4').hasClass( "image2" )) && ($('#5').hasClass( "image2" )) && ($('#6').hasClass( "image2" )) ) {
        $('.turn').text("Player 2 Wins");
      settings = 3;     }
      else if( ($('#7').hasClass( "image2" )) && ($('#8').hasClass( "image2" )) && ($('#9').hasClass( "image2" )) ) {
        $('.turn').text("Player 2 Wins");
      settings = 3;     }
      else if( ($('#1').hasClass( "image2" )) && ($('#4').hasClass( "image2" )) && ($('#7').hasClass( "image2" )) ) {
        $('.turn').text("Player 2 Wins");
      settings = 3;     }
      else if( ($('#2').hasClass( "image2" )) && ($('#5').hasClass( "image2" )) && ($('#8').hasClass( "image2" )) ) {
        $('.turn').text("Player 2 Wins");
        settings = 3;   }
      else if( ($('#3').hasClass( "image2" )) && ($('#6').hasClass( "image2" )) && ($('#9').hasClass( "image2" )) ) {
        $('.turn').text("Player 2 Wins");
        settings = 3;  }
      else if( ($('#1').hasClass( "image2" )) && ($('#5').hasClass( "image2" )) && ($('#9').hasClass( "image2" )) ) {
        $('.turn').text("Player 2 Wins");
        settings = 3;  }
      else if( ($('#3').hasClass( "image2" )) && ($('#5').hasClass( "image2" )) && ($('#7').hasClass( "image2" )) ) {
        $('.turn').text("Player 2 Wins");
        settings = 3;  }
  ///////
}

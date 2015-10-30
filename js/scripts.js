$(function() {

  // Drops/Bounces Name, 1 Character at a time.
  (function nameDrop (i) {
    setTimeout(function () {
      var character = "char" + i;
  			
  		$('.' + character).animate({'top' : '20px'}, 200);
  		$('.' + character).animate({'top' : '-5px'}, 200 );
  	  $('.' + character).animate({'top' : '20px'}, 200 );
  	  $('.' + character).animate({'top' : '10px'}, 200 );
  	  $('.' + character).animate({'top' : '20px'}, 200 );
  	  $('.' + character).animate({'top' : '17px'}, 200 );
  	  $('.' + character).animate({'top' : '20px'}, 200 );
  		  
  		if (i++) {          // If i > 0, keep going
        nameDrop(i);       // Call the loop again, and pass it the current value of i
      }
    }, 200);
  })(1);

  // Pulsates Web Developer, Then Changes its Color.
	$(document).ready(function() {
	  $('.classify').hide();
	  $('.classify').delay(5000).show( "pulsate", {left: '20px', times: 20, duration: 500} );
    $('.classify').animate({color: 'f3f315'}, 2000);

    // Slides Skills into screen.
    $('.skills').delay(7000).animate({'left' : '82%'}, 500);
    $('.php').delay(7200).animate({'left' : '80%'}, 500);
    $('.mysql').delay(7400).animate({'left' : '80%'}, 500);
    $('.javascript').delay(7600).animate({'left' : '80%'}, 500);
    $('.jquery').delay(7800).animate({'left' : '80%'}, 500);
    $('.ajax').delay(8000).animate({'left' : '80%'}, 500);
    $('.html').delay(8200).animate({'left' : '80%'}, 500);
    $('.css').delay(8400).animate({'left' : '80%'}, 500);
    $('.linux').delay(8600).animate({'left' : '80%'}, 500);
    $('.git').delay(8800).animate({'left' : '80%'}, 500);

    // Slides The Bridge Back and Forth  
    function slideBridge() {
      
      var x = -150;
      var y = 0;
      var bridge = $('.bridge');

      bridge.css('backgroundPosition', x + 'px' + ' ' + y + 'px');

      if (x == -150) {
        var moveRight = window.setInterval(function() {
        
        if (x == 100) {
          clearInterval(moveRight);
          var moveLeft = window.setInterval(function() {

          if (x == 0) {
            clearInterval(moveLeft);
          }
          
          bridge.css('backgroundPosition', x + 'px' + ' ' + y + 'px');
          x--;
          }, 10);
        }
    
        bridge.css('backgroundPosition', x + 'px' + ' ' + y + 'px');
        x++;
        }, 10); 
      }
    }  
    slideBridge();
  });
});
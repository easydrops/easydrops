$(function() {
  $(document).scroll(function() {  // ... immer, wenn auf der Seite gescrollt wird...
    var scrollPosTop = $(document).scrollTop(); // ...speichere die aktuelle obere Scrollposition
    var scrollPosBottom = $(document).scrollTop()+$(window).height(); // ... und die aktuelle unterste Scrollposition
    $('.para').each(function() { // Für jedes Element mit der CSS-Klasse "parallax"...
      var positions = $(this).position(); // Lies die Position aus, in der das Element liegt.
      var posTop = positions.top; // Speichere die Position, an der das Element oben beginnt.
      var posBottom = positions.top+$(this).height(); // speichere die Position, an der das Element unten abschließt.
       
      if(posTop <= scrollPosBottom && posBottom >= scrollPosTop) // Ist das Element im sichtbaren Bereich?
      {
        // In welche Richtung soll sich der Hintergrund des Elements beim Scrollen bewegen?
        var direction = 'bottom';
        var speed = 1;
        if($(this).data('direction'))
        {
          direction = $(this).data('direction');
        }
         
        // Mit welcher Geschwindigkeit soll sich der Hintergrund des Elements bewegen?
        if($(this).data('speed'))
        {
          speed = $(this).data('speed');
        }
         
        // An welcher Scrollposition befinden wir uns - relativ gesehen zum Element?
        var pos = scrollPosBottom-posTop;
         
        var x = 0;
        var y = 0;
         
        // Berechne an Hand der Richtung die neue Position des Backgrounds des Elements.
        if(direction == 'top')
        {
          y = speed*pos*-1;
        }
        else if(direction == 'right')
        {
          x = speed*pos;
        }
        else if(direction == 'bottom')
        {
          y = speed*pos;
        }
        else // left
        {
          x = speed*pos*-1;
        }
         
        // Setze die neue Hintergrundposition des Elements.
        $(this).css('background-position', x + 'px ' + y + 'px' );
      }
       
    });
  });
});
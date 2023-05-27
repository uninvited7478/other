function getDirection( $el, coordinates ) {
 
    var w = $el.width(),
    h = $el.height(),
 
    x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
    y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
 

    direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;
 
    return direction;
 
}
 
var eventHandler = function() {
  $(this).click(function(e) {
    e.preventDefault();
  });
 
  $(this).mouseenter(function(event) {
 
        width = $(this).width();
        height = $(this).height();
      $(this).find('.portfolio-content').css('display','block');
      $(this).find('.portfolio-content').css('width',width);
      $(this).find('.portfolio-content').css('height',height);
        direction = getDirection($(this), { x : event.pageX, y : event.pageY })
 
        switch (direction) {
            case 0:
                $(this).find('.portfolio-content').animate({        marginTop: "-" + height + "px",     marginLeft: "0"     }, 0)   /* move into position */
                $(this).find('.portfolio-content').animate({        marginTop: "0",     marginLeft: "0"     }, 200) /* show overlay  */
                break;
            case 1:
                $(this).find('.portfolio-content').animate({        marginTop: "0",     marginLeft: width + "px"        }, 0)   /* move into position */
                $(this).find('.portfolio-content').animate({        marginTop: "0",     marginLeft: "0"     }, 200) /* show overlay  */
                break;
            case 2:
                $(this).find('.portfolio-content').animate({        marginTop: height + "px",       marginLeft: "0"     }, 0)   /* move into position */
                $(this).find('.portfolio-content').animate({        marginTop: "0",     marginLeft: "0"     }, 200) /* show overlay  */
                break;
            case 3:
                $(this).find('.portfolio-content').animate({        marginTop: "0",     marginLeft: "-" + width + "px"      }, 0)   /* move into position */
                $(this).find('.portfolio-content').animate({        marginTop: "0",     marginLeft: "0"     }, 200) /* show overlay  */
                break;
        }
   });
 
   $(this).mouseleave(function(event) {
        width = $(this).width();
        height = $(this).height();
       $(this).find('.portfolio-content').css('display','none');
       $(this).find('.portfolio-content').css('height',0);
   });
}
 
function updateGridHover() {
    $('.portfolio-content').animate({
        marginTop: "-1000000px",
        marginLeft: "-1000000px"
    }, 0)
 
    $('#grid-container .portfoli').each(eventHandler);
}
 /* Navigation */

jQuery(document).ready(function($) {

  $( ".nav-toggle" ).click(function() {
         $( ".mobile-menu" ).toggleClass( "active" );
         $( ".nav-toggle" ).toggleClass( "active" );
         $( "body" ).toggleClass( "fixed" );
	  	 $( "body" ).toggleClass( "light-content" );
     });

     $(window).scroll(function(){
     if ($(this).scrollTop() > 150) {
        $('#nav').addClass('sticky');
     } else {
        $('#nav').removeClass('sticky');
     }
		 		 
 });
	
	
	 /* fadeinup on scroll */
	
$(window).scroll( function(){
         $('.blocks-gallery-item').each( function(i){
             var bottom_of_object = $(this).offset().top + $(this).outerHeight() - $(this).outerHeight() ;
             var bottom_of_window = $(window).scrollTop() + $(window).height() / 1.1 ;
             if( bottom_of_window > bottom_of_object ){
                 $(this).addClass('showme');
             }
             if( bottom_of_window < bottom_of_object ){
                 $(this).removeClass('showme');
             }
         });
	
     });



 /* parallax on scroll */

	$(document).ready(function() {
  //parallax scroll
  $(window).on("load scroll", function() {
    var parallaxElement = $(".parallax"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.15 + "px, 0)"
        });
      }
    });
  });
		
	//parallax from right
  $(window).on("load scroll", function() {
    var parallaxElement = $(".parallax-right"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(" + scrolled * -0.40 + "px, 0, 0)"
        });
      }
    });
  });
  
  
  
 //parallax from right
  $(window).on("load scroll", function() {
    var parallaxElement = $(".parallax-left"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(" + scrolled * +0.40 + "px, 0, 0)"
        });
      }
    });
  });		
});







jQuery(document).ready(function($) { 
	 
	 const cursor = document.getElementById('cursor');
      let previousX = 0;
      let previousY = 0;
      document.addEventListener('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;
        cursor.style.transform = `translate(-50%, -50%) matrix(1, 0, 0, 1, ${x}, ${y})`;
        previousX = x;
        previousY = y;
      })
	
	
	 $('a').hover(function(){     
        $('#cursor').addClass('is-active');    
    },     
    function(){    
        $('#cursor').removeClass('is-active');     
    });
	
	
	
	 $('.ghostkit-video').hover(function(){     
        $('#cursor').addClass('play-video');    
    },     
    function(){    
        $('#cursor').removeClass('play-video');     
    });
	
	
	
	 $('.vp-portfolio__item-img-overlay').hover(function(){     
        $('#cursor').addClass('view-case');    
    },     
    function(){    
        $('#cursor').removeClass('view-case');     
    });
	
});
	
	
	


});

$(document).ready(function(){

  $('#owl-one').find('.owl-item').each(function(i){
            this.className+=' margin-item';
        });

  // jQuery OwlCarousel2-2.3.4
   var one = $("#owl-one");
   var two = $("#owl-two");
   one.owlCarousel({
        loop:true,
 	    margin:10,
 	    dotsEach:2,
      smartSpeed:500,
 	    responsive:{
 	        0:{ items:2 },
 	        600:{ items:3 },
 	        1000:{ items:4 }  }
      });

   two.owlCarousel({
     	nav:true, // Show next and prev buttons
      loop:true,
 	    margin:0,
      dots:false,
      smartSpeed:500,
      responsive:{
          0:{ items:1 },
           536:{ items:2,
              margin:15, },
           768:{ items:3,
              margin:35, },
           1000:{ items:4,
              margin:55 } }
 	    });

    //slide2id - плавная прокрутка по ссылкам внутри страницы
      $("li a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
          highlightSelector:"nav a"
      });

	 });

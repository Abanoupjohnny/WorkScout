$('body').on('mouseenter mouseleave','.dropdown-hover',function(e){
    let dropdown=$(e.target).closest('.dropdown-hover');
     dropdown.addClass('show');
     
   setTimeout(function(){
         dropdown[dropdown.is(':hover')?'addClass':'removeClass']('show');
     },300);
 });

  
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:4,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:6
        },
        1000:{
            items:8
        }
    }
})

/* AOS */
    AOS.init();

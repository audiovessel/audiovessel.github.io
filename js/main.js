/* Apptex Theme Scripts */

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });
     
/*=========================================================================
	Sticky Header
=========================================================================*/ 
	$(function() {
		var header = $("#header"),
			yOffset = 0,
			triggerPoint = 80;
		$(window).on( 'scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.addClass("navbar-fixed-top");
			} else {
				header.removeClass("navbar-fixed-top");
			}

		});
	});

/*=========================================================================
    Mobile Menu
=========================================================================*/  
    $('.menu-wrap ul.nav').slicknav({
        prependTo: '.header-section .navbar',
        label: '',
        allowParentLinks: true
    });          

/*=========================================================================
	Review Carousel
=========================================================================*/
	$('.review-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        center: true,
        autowidth:true,
        smartSpeed: 1000,
        margin: 20,
        dots: true,
        responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 1
		    },
		    // breakpoint from 480 up
		    480 : {
		       items: 2
		    },
		    // breakpoint from 768 up
		    768 : {
		       items: 3
		    }
		}
    });

/*=========================================================================
    Sponsor Carousel
=========================================================================*/
    $('#sponsor-carousel').owlCarousel({
        loop: true,
        margin: 40,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        dots: false,
        responsive : {
            0 : {
                items: 2
            },
            480 : {
                items: 3,
            },
            768 : {
                items: 4
            },
            992 : {
                items: 5
            }
        }
    });

/*=========================================================================
    Screenshot Carousel
=========================================================================*/
    function getSlide() {
        var wW = $(window).width();
        if (wW < 991) {
            return 1;
        } else if (wW < 1170) {
            return 3;
        } else {
            return 5;
        }
    }
    function getSlideSpace(){
        var wW = $(window).width();
        if (wW < 991) {
            return 0;
        }
        return 20;
    }    
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: getSlide(),
        loop: true,
        autoplay: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        spaceBetween: getSlideSpace()
    });

 /*=========================================================================
	Counter Up Active
=========================================================================*/
	var counterSelector = $('.counter');
	counterSelector.counterUp({
		delay: 10,
		time: 1000
	});
             
/*=========================================================================
    Active venobox
=========================================================================*/
	$('.img-popup').venobox({
		numeratio: true,
		infinigall: true
	});             
             
/*=========================================================================
	Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});
	 
/*=========================================================================
	Scroll To Top
=========================================================================*/ 
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

/*=========================================================================
	WOW Active
=========================================================================*/ 
   new WOW().init();

})(jQuery);

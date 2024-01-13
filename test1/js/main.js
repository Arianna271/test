'use strict';
$(window).on('load', function(){
	/*Preloader*/
	$(".loader").fadeOut();
	$("#preloader").delay(400).fadeOut("slow");
});

(function ($) {
	
/*toggle nav-switch section*/
$('.nav-switch').on('click',function(event) {
		$(this).toggleClass('active');
		$('.nav-wrap').slideToggle(400);
		event.preventDefault();
});

/*set background image hero section*/
$('.set-bg').each(function() {
	var bg = $(this).data('setbg');
	$(this).css('background-image', 'url('+ bg + ')');
});

/*carousel hook*/
jQuery(document).ready(function($) {
		        $('#news02').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 8500,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 2
		              },
		              1170: {
		                items: 3
		              }
		            }
		        });
        	});		
})(jQuery);
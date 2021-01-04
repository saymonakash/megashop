
$(document).ready(function(){
	/* ====Swiper Js  ===== */
	$(".carousel").swipe({
		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') $(this).carousel('next');
			if (direction == 'right') $(this).carousel('prev');
		},
		allowPageScroll: "vertical" 
	});
	/* ====Owl carousel 001  ===== */
	$("#sales-owl-carousel").owlCarousel({
		items:5,
		loop:true,
		margin:20,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		nav:false,
		dots:false,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
			},
			576:{
				items:3,
			},
			992:{
				items:5,
			}
		}
	});
	var selector = $('.owl-carousel');

		$('.next-button').click(function() {
		selector.trigger('next.owl.carousel');
		});

		$('.prev-button').click(function() {
		selector.trigger('prev.owl.carousel');
		});
	/* ====Owl carousel 002  ===== */
	$("#latest-sales-owl-carousel").owlCarousel({
		items:5,
		loop:true,
		margin:20,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		nav:false,
		dots:false,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
			},
			576:{
				items:3,
			},
			992:{
				items:5,
			}
		}
	});
	/* ====Owl carousel 003  ===== */
	$("#featured-product-owl-carousel").owlCarousel({
		items:5,
		margin:20,
		loop:true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		nav:false,
		dots:false,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
			},
			576:{
				items:3,
			},
			992:{
				items:5,
			}
		}
	});
	/* ====Owl carousel 003  ===== */
	$("#products-list-owl-carousel").owlCarousel({
		items:4,
		loop:true,
		margin:30,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		nav:false,
		dots:false,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
			},
			576:{
				items:3,
			},
			992:{
				items:4,
			}
		}
	});
	/* ====Wow Js ===== */
	new WOW().init();
	/* ====COUNTERJS  ===== */
	/*$('.counter').counterUp({
		delay: 10,
		time: 2000
	});*/
	/* === UPPER BUTTON SCROLL START === */
	window.onscroll = function() {myFunction()};
	var header = document.getElementById("main-nav");
	var sticky = header.offsetTop;

	function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
	}
	/* === UPPER BUTTON SCROLL START === */
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		
		if(x >700){
			$('#upper').fadeIn(1000);
			
		}else{
			$('#upper').fadeOut(1000);
		}
	});
	$('#upper').click(function(){
		$('html').animate({scrollTop: 0},0);
	});
});
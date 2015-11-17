$(document).ready(function() {
	
	$(document).on("click", function(){
		$(".js-popup").hide();
		if($(window).width() < 768) $(".js-nav").slideUp();
		$('.js-open-menu').removeClass('is-active');
	});
	$(".js-popup-in").on("click", function(e){
		e.stopPropagation();
	});
	$(".js-nav").on("click", function(e){
		e.stopPropagation();
	});
	$(".js-open-menu").on("click", function(e){
		e.stopPropagation();
	});
	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });
	// $('.flexmenu').menuFlex();
	// accordeon

	//accordion
	$('.js-open-accordion').click(function() {
		var $parent = $(this).parents('.js-accordion'),
			$body = $parent.find('.js-accordion-body');
			$body.slideToggle();
	});

	// popup
	$('.js-show-popup').on('click', function() {
		var $popup = $('.' + $(this).data('popup'));
		var $popups = $('.js-popup');
		$popups.fadeOut();
		$popup.fadeIn();
		$popup.css("top", $(window).scrollTop() + 80)
		return false;
	});

	// show menu
	$('.js-open-menu').on('click', function() {
		$(this).toggleClass('is-active');
		$('.js-nav').slideToggle();
	});
});
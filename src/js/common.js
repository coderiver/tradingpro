$(document).ready(function() {
	
	$(document).on("click", function(){
		$(".js-popup").hide();
	});
$(".js-popup-in").on("click", function(e){
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
	$('.flexmenu').menuFlex();
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
		$popup.fadeOut();
		$popup.fadeIn();

		return false;
	});
});
$(document).ready(function() {
	
	$(document).on("click", function(){
		$(".js-popup").hide();
		$('.js-open-menu .humb').removeClass('is-active');
		$('.js-nav').removeClass('is-active');
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
		$(this).find('.humb').toggleClass('is-active');
		$('.js-nav').toggleClass('is-active');
	});

	// fixed header
	(function() {
		// Create a clone of the menu, right next to original.
		$('.js-nav-main').addClass('original').clone(true).insertAfter('.js-nav-main').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original').hide();

		scrollIntervalID = setInterval(stickIt, 10);

		function stickIt() {

		  var orgElementPos = $('.original').offset();
		  orgElementTop = orgElementPos.top;

		  if ($(window).scrollTop() >= (orgElementTop)) {
		    // scrolled past the original position; now only show the cloned, sticky element.

		    // Cloned element should always have same left position and width as original element.     
		    orgElement = $('.original');
		    coordsOrgElement = orgElement.offset();
		    leftOrgElement = coordsOrgElement.left;
		    widthOrgElement = orgElement.css('width');
		    $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
		    $('.original').css('visibility', 'hidden');
		  } else {
		    // not scrolled past the menu; only show the original menu.
		    $('.cloned').hide();
		    $('.original').css('visibility', 'visible');
		  }
		}
	})();

});
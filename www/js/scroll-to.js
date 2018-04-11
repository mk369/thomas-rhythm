(function($) {
	// Scroll to element
	function initOnScroll(){
		const scrollBtn = $('[data-scroll]');
		function onScroll(e) {
			e.preventDefault();
			let target = $(this).attr('data-scroll');
			let dist = $(target).offset().top;
			$('html, body').animate({scrollTop: dist}, 1000, 'swing');
		}	
		scrollBtn.on('click', onScroll);
	}
	$(window).on('load', initOnScroll);
})(jQuery);

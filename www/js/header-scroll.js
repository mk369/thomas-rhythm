;(function($) {
	// Header on scroll
	const header = $('.header');

	const windowHeight = $(window).height();
	const headerHeight = header.outerHeight();
	
	
	function onScroll(e) {
		let pos = $(window).scrollTop();
	    if (pos > windowHeight) {
	        header.addClass('shown-fixed').css({				
				'position': 'fixed',
	            'top' : '0',
	            'transition' : 'top .3s ease-out'
			});
			return;
	    };
		if (pos > headerHeight * 2 + 50){
	        header.css({
	            'position': 'fixed',
				'top' : `-${headerHeight}px`,				
			});
		} else {
			header.removeClass('shown-fixed').css({
	            'position': 'absolute',
				'top' : '0',
				'transition': ""
			});
		}
	}
	
	$(window).on('load', onScroll);
	$(window).on('scroll', onScroll);

})(jQuery);

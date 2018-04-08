;(function($) {
	//arrowUp on scroll
    const arrowUp = $('.arrow-up');
    if (arrowUp.length<1) return;
    const arrowInitBootom = (arrowUp.length>0) ? arrowUp.css('bottom') : '0px';
	const windowHeight = $(window).height();
	const actionHeight = 200;
	
	function onScroll(e) {
	    let pos = $(window).scrollTop();
	    if (pos > windowHeight) {
            arrowUp.css({
                'bottom': arrowInitBootom,
                'transition': 'bottom .5s ease-out'
            });
	    }

	    if (pos < actionHeight) {
            arrowUp.css({
                'bottom': '-50px',
                'transition': 'bottom .5s ease-out'
            });
	    }
	}
	$(window).on('scroll', onScroll);
	$(window).on('load', onScroll);
})(jQuery);

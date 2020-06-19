$(window).scroll(function(){
	if ($(window).width() < 767) {
		var sticky = $('#top-nav-bar'),
			scroll = $(window).scrollTop();

		if (scroll >= 100) sticky.addClass('floating-header');
		else sticky.removeClass('floating-header');
	}
});
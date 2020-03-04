$(window).scroll(function() {

    var hT = $('#collector-show').offset().top,
    hH = $('#collector-show').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
	if (wS > (hT+hH-wH)){
        $('#collector-hide').fadeIn(500);
    }

    var hT = $('#father-show').offset().top,
    hH = $('#father-show').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
	if (wS > (hT+hH-wH)){
		$('#father-hide').fadeIn(500);
    }

    var hT = $('#pool-show').offset().top,
    hH = $('#pool-show').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
	if (wS > (hT+hH-wH)){
		$('#pool-hide').fadeIn(500);
    }

    var hT = $('#react-show').offset().top,
    hH = $('#react-show').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        $('#react-hide').fadeIn(500);
    }
});

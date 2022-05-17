$(function() {

	new WOW().init();

	$('#hamb-1').click(function() {
		$(this).toggleClass('is-active');

		if($(this).hasClass('is-active')){
			$('.menu').slideDown(300);
		}else{
			$('.menu').slideUp(300);
		}
	});

// reviews
	$('.nav_rev > div').click(function () {
		const revID = $(this).data('revid')

		$('.nav_rev > div').not(this).removeClass('active');
		$(this).addClass('active')

		$('.item_rev').not(revID).removeClass('active');
		$(revID).addClass('active')
	})
// reviews

$('.yakor').on('click', function(e) {
	var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top - 56
	}, {
		duration: 1000,
		specialEasing: {
			width: 'Liner',
			height: 'easeInOutCubic'
		}
	});
	e.preventDefault();
})




});
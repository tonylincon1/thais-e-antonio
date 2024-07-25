$(document).ready(function() {
	$('.block__epr-ftp-items').on('click', function (e) {
		$('.block__epr-ftp-items').removeClass('active');
		$(this).addClass('active');
		var paylist = $(this).data('payment');
		$('.block__epr-ftb-items').removeClass('visible');
		$('.'+paylist).addClass('visible');
	});
	$('.block__epr-ftb-items').on('click', function (e) {
		$('.block__epr-ftb-items').removeClass('active');
		$(this).addClass('active');
	});
});
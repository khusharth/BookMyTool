// $('#register-form').parsley();

	// On selecting Other Show Other input field
	$('#other-input').hide();
	$('#other-select').click(function() {
	    $('#other-input').removeClass('collapse');
	    // $("#number-input").before($("#other-input"));
	});

	// On selecting any other select option hide the other input
	$('.on-select-hide').click( function() {
	    $('#other-input').addClass('collapse');
	});

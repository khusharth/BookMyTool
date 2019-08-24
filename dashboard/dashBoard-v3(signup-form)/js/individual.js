// $('#register-form').parsley();

	// On selecting Other Show Other input field
	$('#other-input').hide();
	$("#other-select").click(function() {
	    $('#other-input').css("display","block");
	    $("#number-input").css("background-color","red");
	    // $("#number-input").before($("#other-input"));
	});

	// On selecting any other select option hide the other input
	$('.on-select-hide').click( function() {
	    $('#other-input').addClass('collapse');
	});

	$('#select-industry').on('change', 'select', function() {
		var index = $(this).find('option:selected').index();
		if (index == 4) {
			$('#other-input').show();
		} else {
			$('#other-input').hide();
		}
	  });
	  

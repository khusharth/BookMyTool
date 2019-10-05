
$('.selectpicker').selectpicker();
// $('#register-form').parsley();

// On selecting Other Show Other input field
$('#other-input').hide();
$('#other-select').click(function() {
    $('#other-input').show();
    // $("#number-input").before($("#other-input"));
});

// On selecting any other select option hide the other input
$('.on-select-hide').click( function() {
    $('#other-input').hide();
});


//Display card-2 and hide card-1
$('#next-1').click(function(){
    $('#card-1').addClass('collapse');
    $('#card-2').removeClass('collapse');
});

//Display card-1 and hide card-2
$('#prev-1').click(function(){
    $('#card-2').addClass('collapse');
    $('#card-1').removeClass('collapse');
});
//Display card-3 and hide card-2
$('#next-2').click(function(){
    $('#card-2').addClass('collapse');
    $('#card-3').removeClass('collapse');
});
//Display card-2 and hide card-3
$('#prev-2').click(function(){
    $('#card-3').addClass('collapse');
    $('#card-2').removeClass('collapse');
});


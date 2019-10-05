$('#other-select').hide();
    $('#brand-select').on('change', 'select', function() {
        var index = $(this).find('option:selected').index();
        if (index == 3) {
            $('#other-select').show();
        } else {
            $('#other-select').hide();
        }
    });
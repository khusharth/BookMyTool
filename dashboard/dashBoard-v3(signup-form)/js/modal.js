// Validation using Parsley
// $('#signin-form').parsley();

// Switch Modals
$('#forgetpassword').click(function(){         
    $('#login-modal-content').fadeOut('fast', function(){
        $('#forgot-password-modal-content').fadeIn('fast');
        });
    });
    
    $('#backtologin').click(function(){          
    $('#forgot-password-modal-content').fadeOut('fast', function(){
        $('#login-modal-content').fadeIn('fast');
        });
    });

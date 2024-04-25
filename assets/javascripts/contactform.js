$(function () {
    "use strict";
    
    /*  
        Template name    : Tech-IT - IT Solutions & Business Services Multipurpose Responsive Website Template
        Author           : ZRTHEMES
        Version          : 1.0
        File Description : contact js file of the template
    */
    $('#ajax-contact').validator();
    $('#ajax-contact').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "assets/phpscripts/contact.html";
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    $( "#msgSubmit" ).removeClass( "hidden" );
                    $('#ajax-contact')[0].reset();
                    
                }
            });
            return false;
        }
    })
});
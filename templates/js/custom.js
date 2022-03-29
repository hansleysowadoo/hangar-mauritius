$(document).ready(function(){
    // Scroll to next Section
    $("#scrollDown").click(function() {
        $('html, body').animate({
            scrollTop: $('#how_we_do').offset().top - $('nav').outerHeight(true)
        }, 0);
    });

    // Hide Cookie Disclaimer after accepted
    $('#acceptCookies').click(function(){
        $('.hs-cookies-disclaimer').fadeOut();
    });

    // Return to the top of the page
    $('#returnTop').click(function(){
        window.scrollTo(0,0);
    });

    // Change color of navbar
    var distance = $('#how_we_do').offset().top - (2 * ($('nav').outerHeight(true)));

    $(window).scroll(function(){
        if ($(window).scrollTop() >= distance) {
            if ($('nav').hasClass('nav-dark') == false) {
                $('nav').addClass('nav-dark')
            }
        } else {
            $('nav').removeClass('nav-dark');
        }
    });
});


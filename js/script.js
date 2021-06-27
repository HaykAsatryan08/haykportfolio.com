$(document).ready(function () {

    // Preloader

    setTimeout(function () {
        $('body').attr('style', 'overflow-y: auto;');
        $('#preloader').attr('style', 'display: none;');
    }, 1000);

    // Responsive Navbar

    $('.menu').click(function () {
        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
    });
    
    // On Clicking Link Close Navbar
    
    $('.nav-item').click(function () {
        $('.menu').removeClass('active');
        $('.nav').removeClass('active');
    });
    
    // Sticky Header

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
});






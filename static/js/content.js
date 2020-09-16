;(function () {

    'use strict';
    
    // iPad and iPod detection	
    var isiPad = function(){
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function(){
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };

    // Parallax
    var parallax = function() {
        $(window).stellar();
    };

    // Burger Menu
    var burgerMenu = function() {
        $('body').on('click', '.js-fh5co-nav-toggle', function(event){
            event.preventDefault();

            if ( $('#navbar').is(':visible') ) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        });

    };

    var goToTop = function() {
        $('.js-gotop').on('click', function(event){
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500);
            return false;
        });
    };

    // Page Nav
    var clickMenu = function() {
        $('#navbar a:not([class="external"])').click(function(event){
            var section = $(this).data('nav-section'),
                navbar = $('#navbar');
            if ( $('[data-section="' + section + '"]').length ) {
                $('html, body').animate({
                    scrollTop: $('[data-section="' + section + '"]').offset().top
                }, 500);
            }
            if ( navbar.is(':visible')) {
                navbar.removeClass('in');
                navbar.attr('aria-expanded', 'false');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }
            event.preventDefault();
            return false;
        });
    };

    // Document on load.
    $(function(){
        parallax();
        burgerMenu();
        clickMenu();
    });

}());
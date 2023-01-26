(function($) {
    $(document).ready(function() {
        const toggleAttr = (i, attr) => {
            return attr == 'true' ? 'false' : 'true';
        };

        $('.menu-toggle').click(function() {
            $(this).attr('aria-expanded', toggleAttr);
            $('#top-nav').toggleClass('closed').toggleClass('open');

        });

        $('#switcher-toggle').click(function() {
            $(this).attr('aria-expanded', toggleAttr);
            $('.language-switcher').toggleClass('closed');
        });

        $('html').click(function(e) {
            target = $(e.target);
            if (!target.is(".language-switcher a, .menu-toggle, #switcher-toggle")) {
                // close navigation
                if ($('body').hasClass('menu-open')) {
                    $('#top-nav').removeClass('open').addClass('closed');
                    $('body').removeClass('menu-open');
                }

                // close search and language switcher
                $('#search-container, .language-switcher').addClass('closed');
                $('.search-toggle, #switcher-toggle').attr('aria-expanded', 'false');
            }
        });
    });
})(jQuery)
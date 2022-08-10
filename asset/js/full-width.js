$(document).ready(function() {
    $(window).resize(function() {
        var $c = $('.container'),
            $w = $('.full-width-container'),
            totalWidth = $('.top-bar').outerWidth(),
            wellWidth = $c.outerWidth(),
            diff = totalWidth - wellWidth,
            marg = -Math.floor(diff / 2) + 'px';
        $w.each(function() {
            $(this).css({
                'margin-left': marg,
                'margin-right': marg
            });
        })
    });
    $(window).resize();
});
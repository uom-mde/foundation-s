$(window).on('load',function(){
    $('figure img').each(function(){ //you need to put this inside the window.onload-function (not document.ready), otherwise the image dimensions won't be available yet
        if ($(this).width()/$(this).height() >= 1) {
            $(this).addClass('landscape');
        } else {
            $(this).addClass('portrait');
        }
    });
});
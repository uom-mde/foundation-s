$(window).load(function() {
    jQuery("img").each(function(index, element) {

        // Calculate aspect ratio and store it in HTML data- attribute
        var aspectRatio = $(element).width()/$(element).height();
        $(element).data("aspect-ratio", aspectRatio);
               // Conditional statement

        if(aspectRatio > 1) {
            // Image is landscape

            $(element).addClass( "landscape" );

        } else if (aspectRatio < 1) {
            // Image is portrait
            $(element).addClass( "portrait" );;
        } else {
            // Image is square
            $(element).addClass( "square" );;            
        }
    })
});
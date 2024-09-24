$(window).on('load', function() {
    // Select the <canvas> element under the .openseadragon-canvas class
    $('div.openseadragon-canvas > canvas').each(function() {
        var canvasWidth = $(this).attr('width');
        var canvasHeight = $(this).attr('height');
        
        // Check if the width and height are available
        if (canvasWidth && canvasHeight) {
            // Find the parent element with the class "openseadragon"
            var parentDiv = $(this).closest('.openseadragon');

            // Determine if it's landscape or portrait and add class accordingly
            if (canvasWidth / canvasHeight >= 1) {
                parentDiv.addClass('landscape');
            } else {
                parentDiv.addClass('portrait');
            }
        }
    });
});

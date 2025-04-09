const browseScripts = () => {
    const resources = document.querySelectorAll('.resources');

    resources.forEach((resourcesSet, index) => {
        const resourceItems = resourcesSet.querySelectorAll('.resource-masonry');

        // Wait for all images inside this resourcesSet to load
        imagesLoaded(resourcesSet, function () {
            // Once images are loaded, initialize Masonry
            const msnry = new Masonry(resourcesSet, {
                itemSelector: '.resource-masonry',
                columnWidth: '.grid-sizer',
                gutter: '.gutter-sizer',
                percentPosition: true,
            });

            resourcesSet.style.opacity = 1; // Optional fade-in or visibility
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    browseScripts();
});
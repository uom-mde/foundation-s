const browseScripts = () => {
    const resources = document.querySelectorAll('.resources');

    resources.forEach((resourcesSet, index) => {
        const resourceItems = resourcesSet.querySelectorAll('.resource-masonry');

        const initMasonryGrid = () => {
            const createMasonryInstance = () => {
                var msnry = new Masonry(resourcesSet, {
                    itemSelector: '.resource-masonry',
                    columnWidth: '.grid-sizer',
                    gutter: '.gutter-sizer',
                    percentPosition: true,
                });
                resourcesSet.style.opacity = 1;
            };
        
            createMasonryInstance();
        };
        
        initMasonryGrid();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    browseScripts();
});
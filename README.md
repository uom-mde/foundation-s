# Foundation S

University of Manchester branded Omeka S theme based on ZURB Foundation Sites. The [Annona IIIF storyboard feature is enabled](https://github.com/NCSU-Libraries/annona), and the theme includes a language selector, optimised for two languages. The menu has been taken from the [Omeka team's Freedom theme](https://omeka.org/s/themes/freedom/)Elements of code for the language slector have been taken from from AREPR's [Multilingual theme](https://github.com/arepr/omeka-s-theme-multilingual). It currently comes with a default stylesheet for prototyping as well as 3 other style options. 

## Installation

For basic out-of-the-box use of the theme, follow the [Omeka S User Manual instructions for installing themes](https://omeka.org/s/docs/user-manual/sites/site_theme/#installing-themes). 

For more advanced use, such as customizing the theme with Sass, you'll need to install the tools with [NodeJS](https://nodejs.org/en/) (0.12 or greater). Navigate to your theme directory and run `npm install`.

## Theme Configuration

* **Stylesheet**: The theme provides 4 style options.
  * **Default** uses ZURB Foundation's default styles for prototyping, which are all viewable in their documentation under the [Kitchen Sink](https://get.foundation/sites/docs/kitchen-sink.html).
  * **Revolution** aims to capture the feel of old documents and juxtaposes it with a bright red accent. It includes a textured paper background image.
  * **Sea Foam** offers a clean, friendly look with a teal palette.
  * **Inkwell** features a high contrast serif family for its typography, as well as sunny yellow accents.
* **Navigation layouts**: Global navigation can display as a **horizontal top bar with optional dropdown menus** or a **left vertical column**.
* **Show top navigation child pages**: Toggle display of child pages within the main navigation.
* **Top navigation depth**: If the main navigation is set to display child pages, this setting controls how many navigation levels to display. Setting this to '0' shows all levels.
* **Logo**: Upload an image asset to use as a logo in place of a text site title.
* **Banner**: Upload an image asset to use a banner that sits above the main content area of every view.
* **Banner width**: The maximum banner image width in pixels.
* **Banner height**: The maximum banner image height in pixels.
* **Banner height for mobile devices**: The maximum banner image height in pixels at narrower viewport widths..
* **Banner position**: Where to anchor the banner image within its container: centered, stuck to the top, or stuck to the bottom.
* **Footer content**: Control what appears in the footer. This field takes HTML markup.
* **Layout for browse pages**: Select how to display items within their "browse" views.
  * **Grid**: Items are organized into rows and columns. This is recommended for items that prominently feature images.
  * **List**: Items are stacked into a single column.
  * **Toggle (default: grid)**: Site visitors can choose to display the browse views as grids or lists, and grids are the default.
  * **Toggle (default: list)**: Site visitors can choose to display the browse views as grids or lists, and lists are the default.
* **Metadata layout for show pages**: Resource metadata can show display as **stacked** with properties as headings above their values, or **inline** with properties as headings inline with their values.
* **Media display for show pages**: Options for presenting media on item and media show views. 'Within metadata' shows media in the same column as the metadata. 'Next to metadata' gives media their own column alongside the metadata. 'Full-width media viewer above metadata' enables a gallery view with zoom and pan abilities. This ignores the 'Embed media' site setting.
* **Truncate body property**: Controls the size of the body property of resources in a browseable list. It can be set to show the full value, truncate after 4 lines and fade out, or truncate after 4 lines and clip with an ellipsis.

## Customizing the Theme

For those dipping their toes into customizing sites with CSS, the [CSS Editor](https://omeka.org/s/modules/CSSEditor/) module allows site administrators to write style overrides.

For advanced CSS and Sass users, Foundation S uses ZURB Foundation Site's toolkit that includes variables and mixins for managing and extending many styles.

### Sass Tasks

Run these commands within the theme's root directory.

* **npm start**: While this task runs, it watches for changes to sass files and recompiles the CSS.
* **gulp css**: This is the one-off task for compiling the current Sass/CSS.
* * **gulp css:watch**: This task watches for changes in the Sass, then compiles the CSS.

### Sass File Structure

Foundation S comes with the Default theme, as well as 3 other customized stylesheets that were built on top of Default. The "Sea Foam" theme has the fewest overrides and is thus the easiest reference for a custom theme model.

**/asset/sass/seafoam.scss**

```
@charset 'utf-8';

@import 'globals-default';
@import 'globals-seafoam';
@import 'settings';

// Sea Foam Settings

$topbar-background: $primary-color;
  
$thumbnail-border: 4px solid $secondary-color;
$thumbnail-shadow: none;
$thumbnail-shadow-hover: 0 0 6px 1px rgba($primary-color, 0.5);

$button-background: $secondary-color;
$button-color: $primary-color;

@import 'foundation-core';
@import 'omeka';

header a {
  color: $white;
}
```

Much of the customizability within the theme lies in managing its settings variables. ZURB Foundation's default global variables from their original `_settings.scss` all sit in `_globals-default.scss`. Many of these variables are used throughout the rest of `_settings.scss`, so it was necessary to separate them out into their own file if the theme writer wants to set their own global variables. Here all the overrides live in `_globals-seafoam.scss`, and so all overridden values will be appropriately updated for use throughout the rest of `_settings.scss`. 

Any non-global setting variable overrides should come after the import for `_settings.scss` and before their usagee in the rule files, `_foundation-core.scss`, and `_omeka.scss`. 

ZURB Foundation's default style rules are all managed in `_foundation-core.scss`. All style rules specific to Omeka S are contained within `_omeka.scss`.

After all those imports come all style rules specific to the theme.

## Page and Block Templates

The Omeka S 4.1 introduced the block templates feature, which allows theme developers to provide their users with alternative versions of page blocks. Foundation includes the following templates for each block:

* Asset
  * **Card**: Uses [Foundation Framework's card container](https://get.foundation/sites/docs/card.html) styles.
  * **Media object**: Uses [Foundation Framework's media object container](https://get.foundation/sites/docs/media-object.html) styles.
* Browse preview
  * **List**: Ignores theme setting for browse view layouts and displays all resources as a single column list.
  * **Grid**: Ignores theme setting for browse view layouts and displays all resources in a grid that maxes out at 4 columns.
  * **Toggle (default: list)**: Ignores theme setting for browse view layouts and lets the user choose their browse style, defaulting to a single column list of resources.
  * **Toggle (default: grid)**: Ignores theme setting for browse view layouts and lets the user choose their browse style, defaulting to a grid of resources maxing out at 4 columns.
* Item with metadata
  * **Large media left**: A 2-column layout with the item media rendered to the left of the metadata.
  * **Large media right**: A 2-column layout with the item media rendered to the right of the metadata.
* List of pages
  * **With container**: Provides a gray box container.
* List of sites
  * **Card**: Uses [Foundation Framework's card container](https://get.foundation/sites/docs/card.html) styles for each site.
* Page title
  * **Accent**: Renders the page title with the theme's primary color as a background color.

---

## Resource Page Configuration

Omeka S 4.0 introduced configurable resource pages. Foundation supports block configuration for items, item sets, and media show pages. Each of those views contains 4 configurable regions:

* **Full-width main**: This is intended to be a primary content area that spans the full width of a page.
* **Main with sidebar**: This is a version of the primary content area that expects to sit alongside one or two sidebars.
* **Right sidebar**: This is a sidebar that sits to the right of "main with sidebar".
* **Left sidebar**: This is a sidebar that sits to the left of "main with sidebar". 

Some examples of how these regions can be used:

![Full-width main, main with sidebar, and right sidebar](asset/img/full-main-right.jpg)
Full-width main, main with sidebar, and right sidebar

![Left sidebar,  main with sidebar, right sidebar](asset/img/left-main-right.jpg)
Left sidebar,  main with sidebar, right sidebar

![Main with sidebar, right sidebar](asset/img/main-right.jpg)
Main with sidebar, right sidebar

## Copyright
Foundation S is Copyright © 2020-present Corporation for Digital Scholarship, Vienna, Virginia, USA http://digitalscholar.org

The Corporation for Digital Scholarship distributes the Omeka source code
under the GNU General Public License, version 3 (GPLv3). The full text
of this license is given in the license file.

The Omeka name is a registered trademark of the Corporation for Digital Scholarship.

Third-party copyright in this distribution is noted where applicable.

All rights not expressly granted are reserved.


# Manchester Digital Exhibitions
This theme has been created for Manchester Digital Exhibitions (MDE). To load the correct stylesheet, select either the 'Seafoam' (UoM purple menu) or 'Inkwell' (white menu) from the site's theme's settings. MDE exhibitions typically use the 'Inkwell' stylesheet.

--

## Home Page
The Home Page in this theme requires the fork of the ['ExtendedSiteDescription'](https://github.com/johndmccrory/ExtendedSiteDescription/tree/uomRevisions) module to work as intended. The 'uomRevisions' branch of the fork includes the necessary revisions. This module allows us to categorise sites and to mark them as featured in each site's settings.

--

## Item Show Page
The Item Show page has been revised to display only the first media for each item.

--

## Presenting Sensitive Material
This theme has three features which support the display of sensitive material:
- Content warning banners for sites which present sensitive material.
- A media embed block which blurs images displayed on pages.
- An option to blur selected media in the Item Show page. 

### Content Warning Banner
This theme incorporates a content warning banner. The banner displays on the first two occasions visitors view sites determined in the theme. The site slugs to target and the message presented is edited in the /view/templates/content-warning-banner.phtml file.

### Media Embed Block - Sensitive Material
This block allows you to blur selected media by default, with visitors toggling its visibility.

### Item Show Page - Blur Media
In an item's metadata, adding content warning text to the dcterms:audience field blurs its display in the Item Show page. 

--

## Page and block templates
The following templates have been added to the base theme:

* Asset
  * **Card**: Uses [Foundation Framework's card container](https://get.foundation/sites/docs/card.html) styles.
  * **Card horizontal**: Uses [Foundation Framework's card container](https://get.foundation/sites/docs/card.html) styles. 
  * **Card horizontal - external link**: Uses [Foundation Framework's card container](https://get.foundation/sites/docs/card.html) styles. Presents the asset image alongside the title and text, and allows links to be added to external pages. URLs are added to the asset's 'Alternative link title' field. Note, when changes are made to the page subsequently and saved, these links need to be added again. 
  * **Asset with caption**: Presents a large image of the asset above a caption.
  * **Media object**: Uses [Foundation Framework's media object container](https://get.foundation/sites/docs/media-object.html) styles.
  * **Multiple assets**: Used to display multiple assets alongside each other.
  * **Hero for portrait images and blurred background**: Hero banner block used for portrait images.
  * **Hero with title and caption**: Hero banner block which presents a page title and a caption below the image. The title is added in the 'Alternative link title' field, the caption in the 'Caption' field. Note, when changes are made to the page subsequently and saved, these links need to be added again. 
  * **Hero with title and caption alongside**: Hero banner block which presents an image alongside the page title and a caption. The title is added in the 'Alternative link title' field, the caption in the 'Caption' field. Note, when changes are made to the page subsequently and saved, these links need to be added again. 
  * **Text around image**: Used in conjunction with an HTML block directly beneath. Wraps the text around the image.
* Browse preview
  * **Masonry**: Presents your browse perview results using the [Masonry](https://masonry.desandro.com) cascading grid layout library.
* HTML
  * **Blockquote**: Place your quotation within blockquote tags using the option in the HTML text editor, and use cite in HTML to add a citation.
  * **Content Warning**: A styled block in which to present a content warning. 
  * **Progress Bar**: Used to display a progress bar above the HTML block, informing visitors of its extent.  
  * **SVG Pan and Zoom**: A styled block in which to present a content warning.  
  * **Dark Text**: A styled block in which to present a content warning.  
  * **Dark Text - Large**: A styled block in which to present a content warning.  
  * **Text**: A styled block in which to present a content warning.  
  * **Text - Large**: A styled block in which to present a content warning.   
* List of sites
  * **Browse**: A block to present all public sites in Omeka S. Thumbnail and title share the top row, with the site description underneath. 
  * **Card**: A card block displaying all public Omeka S sites. 
  * **Card Featured**: A card block to display featured sites.
  * **Card Featured Mosaic**: A card block adding styling to featured sites.
  * **Card Library**: A card block displaying sites marked as 'Library' in the site settings.
  * **Card Library Browse**: A compact card block displaying sites marked as 'Library'. This block only presents the site title and thumbnail, not the additional information.
  * **Card Library Mosaic**: A card block displaying sites marked as 'Library' in the site settings, uses a CSS grid display.
  * **Card Research**: A card block displaying sites marked as 'Research' in the site settings.
  * **Card Research Browse**: A compact card block displaying sites marked as 'Research'. This block only presents the site title and thumbnail, not the additional information.
  * **Card Research Mosaic**: A card block displaying sites marked as 'Mosaic' in the site settings, uses a CSS grid display.
* Media Embed 
  * **Caption alongside media**: The standard block used in MDE exhibitions. Presents the media item alongside the item's title and supporting text. The supporting text is added as the media caption.
  * **Caption alongside media with additional metadata**: In addition to the standard block, this displays additional metadata from the item record- if present. This includes the 'Alternative title', 'Date', 'Location', and 'Reference Number'.
  * **Caption alongside media in a container**: This displays the same information as the 'Caption alongside media with additional metadata' block, in a container. Used for narrow portrait media items.
  * **Caption alongside media - YouTube**: This block is to be used to present YouTube videos. Visitors are given the option to accept cookies if they declined them initially; otherwise, the OneTrust Cookie banner will prevent them from loading.
  * **Caption alongside media- IIIF lazy load**: This block staggers the loading of IIIF images.
  * **Caption alongside media- Annona lazy load**: This block staggers the loading of Annona media.
  * **Text block only**: This block displays only the title and caption of the media.
  * **Media block only**: This block displays only the media, not the caption or the item's title.
  * **Text around media**: When this block is placed above an HTML block, the text wraps around the image.
  * **Toggle caption**: A dedicated block for the CORALA exhibition, which toggles the caption under the media.
  * **Multiple media in a row**: Used to present multiple media items alongside each other.
  * **Toggle blur for sensitive material**: This block blurs the image unless the visitor agrees to display it in full.

--

This fork of the Foundation S theme uses the following third‑party libraries:

---

## Third‑Party Software Acknowledgments

### Annona
The Annona JavaScript library allows us to display W3 Web Annotations in a visual format, particularly using IIIF images. 

- **Library**: Annona (NCSU Libraries)  
- **Authors**: North Carolina State University  
- **License**: MIT  
- **Source**: https://github.com/NCSU-Libraries/annona  
- **Copyright**: © 2021 North Carolina State University  
- **License text**: See [`licenses/license-annona.txt`](licenses/license-annona.txt)

---

### imagesLoaded
This library is loaded in conjunction with the Masonry library.

- **Library**: imagesloaded.pkgd.min.js minified
- **Authors**: David DeSandro 
- **License**: MIT  
- **Source**: https://imagesloaded.desandro.com/
- **Copyright**: © 2026 David DeSandro
- **License text**: See [`licenses/license-imagesLoaded.txt`](licenses/license-imagesLoaded.txt)

---

### jquery.peekABar
This library allows us to run our content warning banners.

- **Library**: @kunalnagarco/jquery-peek-a-bar  
- **Authors**: Kunal Nagar  
- **License**: MIT  
- **Source**: https://github.com/kunalnagarco/jquery.peekABar 
- **Copyright**: © 2024 Kunal Nagar  
- **License text**: See [`licenses/license-jquerypeekABar.txt`](licenses/license-jquerypeekABar.txt)

---

### Masonry
This library is used in the display of the Masonry template for Browse Preview blocks.

- **Library**: Masonry PACKAGED v4.2.2  
- **Authors**: David DeSandro  
- **License**: MIT  
- **Source**: https://masonry.desandro.com  
- **Copyright**: © David DeSandro  
- **License text**: See [`licenses/license-masonry.txt`](licenses/license-masonry.txt)

---

### svg-pan-zoom library
This library is used when presenting large SVG layers, for example in family tree diagrams.

- **Library**: [Masonry PACKAGED v4.2.2](https://github.com/bumbu/svg-pan-zoom/releases/tag/3.6.1)  
- **Authors**: David DeSandro  
- **License**: BSD-2-Clause license  
- **Source**: https://github.com/ariutta/svg-pan-zoom 
- **Copyright**: © 2009-2010 Andrea Leofreddi <a.leofreddi@vleo.net>  
- **License text**: See [`licenses/license-svg-pan-zoom.txt`](licenses/license-svg-pan-zoom.txt)

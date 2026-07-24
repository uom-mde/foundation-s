# Foundation S for Manchester Digital Exhibitions

The Manchester Digital Exhibitions (MDE) Theme is an Omeka S theme developed for use with the University of Manchester's Manchester Digital Exhibitions platform.

The theme is based on the Corporation for Digital Scholarship's Foundation S theme and extends it with additional templates, enhanced media presentation options, IIIF integrations, workflows for presenting sensitive material, site categorisation features, and University of Manchester branding.

## Relationship to Foundation S

This theme is a fork of the Foundation S theme developed by the Corporation for Digital Scholarship.

Foundation S provides:

- ZURB Foundation-based layouts
- Multiple navigation options
- Browse page layouts
- Resource page configuration
- Block template support
- Sass-based styling architecture

This fork extends Foundation S with functionality developed specifically for Manchester Digital Exhibitions.

## Key Features

### User Interface

- University of Manchester branding
- Multiple stylesheet options
- Language selector optimised for bilingual sites
- Responsive navigation based on the Freedom theme
- Flexible banner and logo options

### IIIF and Media Support

- Annona integration
- Lazy-loaded IIIF images
- Lazy-loaded Annona viewers
- SVG pan-and-zoom support
- Alternative media display templates
- Improved handling of portrait and wide-format images

### Site Discovery

- Featured exhibitions
- Research exhibition listings
- Library exhibition listings
- Browse, card and mosaic layouts

### Sensitive Material Workflows

- Content warning banners
- Blurred media blocks
- Item-level content warning controls

### Analytics and Cookies

- Google Analytics integration
- OneTrust cookie management integration

---

# Requirements

## Omeka S

This theme is intended for use with Omeka S 4.x.

## Optional Modules

### ExtendedSiteDescription

The homepage functionality developed for Manchester Digital Exhibitions requires the customised fork of the ExtendedSiteDescription module:

- Repository: [ExtendedSiteDescription](https://github.com/johndmccrory/ExtendedSiteDescription/tree/uomRevisions)

This fork allows sites to be categorised and marked as featured through site settings.

### CSS Editor

The [CSS Editor module](https://omeka.org/s/modules/CSSEditor/) can be used to apply site-specific styling without modifying the theme directly.

---

# Installation

## Standard Installation

Install the theme following the instructions in the Omeka S User Manual:

- [Installing Themes](https://omeka.org/s/docs/user-manual/sites/site_theme/#installing-themes)

## Development Installation

For theme development and Sass compilation, install NodeJS and project dependencies:

```bash
npm install
```

---

# Theme Configuration

## Stylesheets

The theme provides four stylesheet options:

### Default

- Foundation's default styling, suitable for prototyping. Customisations have not been made to this stylesheet.

### Revolution

- A textured-paper design inspired by historic documents with red accent colours. Customisations have not been made to this stylesheet.

### Sea Foam

- Standard University of Manchester styling has been applied to this stylesheet. The background colour of the menu is UoM purple.

### Inkwell

- Standard University of Manchester styling has been applied to this stylesheet. The background colour of the menu is white.

- This is the stylesheet most frequently used on Manchester Digital Exhibitions.

---

## Navigation

Available navigation layouts include:

- Horizontal top navigation
- Horizontal navigation with dropdowns
- Vertical navigation

Additional options:

- Show child pages
- Configure navigation depth

---

## Branding

The theme supports:

- Custom logos
- Site banners
- Banner positioning
- Banner dimensions
- Custom footer content

---

## Browse Page Layouts

Browse views can be displayed as:

- Grid
- List
- Toggle (default grid)
- Toggle (default list)

---

## Resource Display

### Metadata Layouts

- Stacked
- Inline

### Media Display

- Within metadata
- Beside metadata
- Full-width gallery above metadata

### Body Property Display

- Full text
- Truncated with fade
- Truncated with ellipsis

---

# Manchester Digital Exhibitions Extensions

## Home Page

The homepage templates depend upon the customised ExtendedSiteDescription module.

Sites may be categorised and marked as:

- Featured
- Research
- Library

These categories are used throughout the custom site browsing templates.

## Item Show Pages

The Item Show page has been customised to display only the first media item associated with a resource.

## Analytics and Cookies

The theme includes support for:

- Google Analytics
- OneTrust Cookie Management

Configuration should be reviewed before deployment.

---

# Sensitive Material Features

The theme provides several tools for presenting sensitive content responsibly.

## Content Warning Banners

Visitors are shown a content warning banner when accessing designated exhibitions.

Configuration is stored within:

```text
/view/common/content-warning-banner.phtml
```

Target site slugs and warning text can be edited within this template.

## Sensitive Media Block

A dedicated block template allows media to appear blurred by default.

Visitors may choose whether to reveal the content.

## Item-Level Content Warnings

Adding warning text to:

```text
dcterms:audience
```

causes media on the Item Show page to be blurred automatically.

---

# Block Templates

## Asset Templates

| Template | Description | Recommended Use | Notes |
|-----------|-------------|-----------------|-------|
| Card | Uses Foundation Framework card styles to present content in a card format. | Feature panels, links and promotional content. | – |
| Card Horizontal | Uses Foundation Framework card styles with a horizontal layout. | Content requiring a larger image alongside text. | – |
| Card Horizontal – External Link | Displays the asset image alongside a title and text, allowing links to external pages. | Linking to external resources, websites and digitised collections. | Enter the destination URL in the asset's **Alternative Link Title** field. Links must currently be re-added if the block is edited and saved again. |
| Asset with Caption | Presents a large image above a caption. | Highlighting a single image with explanatory text. | – |
| Media Object | Uses Foundation Framework media object styles. | Short pieces of supporting information with accompanying images. | – |
| Multiple Assets | Displays multiple assets alongside each other. | Image comparisons and small galleries. | Particularly useful for before-and-after comparisons. |
| Hero for Portrait Images and Blurred Background | Hero banner template designed for portrait images with a blurred background effect. | Exhibition landing pages with portrait-oriented images. | Best suited to portrait images. |
| Hero with Title and Caption | Displays a hero image with a title and caption overlay. | Section introductions and exhibition chapter pages. | Enter the title in the **Alternative Link Title** field and the caption in the **Caption** field. |
| Hero with Title and Caption Alongside | Displays a hero image alongside a title and caption. | Introductory pages where text should remain visible alongside the image. | Enter the title in the **Alternative Link Title** field and the caption in the **Caption** field. |
| Text Around Image | Used with a subsequent HTML block to wrap text around an image. | Magazine-style exhibition layouts. | Must be immediately followed by an HTML block. |

## Browse Preview Templates

| Template | Description | Recommended Use | Notes |
|-----------|-------------|-----------------|-------|
| List | Displays resources as a single-column list regardless of theme settings. | Text-heavy resources. | Ignores site browse settings. |
| Grid | Displays resources in a grid layout with up to four columns. | Image-led collections. | Ignores site browse settings. |
| Toggle (List) | Allows visitors to switch between grid and list views, defaulting to list view. | Mixed collections where accessibility and flexibility are important. | Default view is list. |
| Toggle (Grid) | Allows visitors to switch between grid and list views, defaulting to grid view. | Visual collections and image-rich sites. | Default view is grid. |
| Masonry | Displays resources using the Masonry cascading grid layout. | Collections containing images with varying dimensions. | Requires Masonry JavaScript library. |

## HTML Templates

| Template | Description | Recommended Use | Notes |
|-----------|-------------|-----------------|-------|
| Blockquote | Styles quoted text. Citations can be added using the HTML `cite` element. | Oral histories, archival quotations and testimony. | Use semantic HTML blockquote and cite elements. |
| Content Warning | Displays a styled content warning message. | Sensitive or potentially distressing content. | Often used in conjunction with blurred media templates. |
| Progress Bar | Displays a progress indicator above the HTML content. | Timelines, journeys and multi-part narratives. | Width controlled by template settings. |
| SVG Pan and Zoom | Provides styling and controls for SVG content with zooming and panning functionality. | Family trees, maps and large diagrams. | Requires SVG source files. |
| Dark Text | Displays content using the dark text styling option. | High-contrast text sections. | – |
| Dark Text – Large | Large-format variation of the Dark Text template. | Pull quotes and introductory text. | – |
| Text | Displays content using the standard text style. | General exhibition content. | – |
| Text – Large | Large-format variation of the standard text template. | Introductions and key interpretive text. | – |

## Media Embed Templates

| Template | Description | Recommended Use | Notes |
|-----------|-------------|-----------------|-------|
| Caption Alongside Media | Standard MDE media presentation. Displays media alongside its title and supporting text. | Default template for most exhibition pages. | Recommended default option. |
| Caption Alongside Media with Additional Metadata | Displays media with title, caption, alternative title, date, location and reference number when available. | Archival and special collections content. | Metadata can be hidden using metadata CSS classes. |
| Caption Alongside Media in a Container | Container-based variation of the metadata template. | Portrait images and narrow objects. | Prevents excessive whitespace around portrait media. |
| Caption Alongside Media – YouTube | Displays YouTube videos alongside supporting content. | Embedded video content. | Visitors may need to consent to cookies before playback is available. |
| Caption Alongside Media – IIIF Lazy Load | Delays loading of IIIF images until required. | Image-heavy exhibitions. | Improves page performance. |
| Caption Alongside Media – Annona Lazy Load | Delays loading of Annona viewers until required. | Pages containing multiple annotated images. | Improves page performance. |
| Text Block Only | Displays only the title and supporting text. | Narrative sections without media. | Useful for alternating layouts. |
| Media Block Only | Displays media without title or caption. | Decorative media and visual transitions. | – |
| Text Around Media | Wraps subsequent text around media. | Editorial-style layouts. | Must be placed immediately before an HTML block. |
| Toggle Caption | Allows visitors to show or hide captions beneath media. | Long captions or optional supporting information. | Developed originally for the CORALA exhibition. |
| Multiple Media in a Row | Displays multiple media items side-by-side. | Image comparisons and gallery displays. | Combine with `grid-columns-2` to force two columns. |
| Toggle Blur for Sensitive Material | Blurs media until visitors choose to reveal it. | Sensitive historical material and challenging content. | Visitor-controlled reveal mechanism. |

## List of Sites Templates

| Template | Description | Recommended Use | Notes |
|-----------|-------------|-----------------|-------|
| Browse | Displays all public Omeka S sites with thumbnail, title and description. | Site directories and exhibition indexes. | Standard browsing experience. |
| Card | Displays public sites as cards. | General-purpose site listings. | – |
| Card Featured | Displays sites marked as Featured. | Homepage highlights. | Requires Featured status. |
| Card Featured Mosaic | Mosaic-style display of Featured sites. | Visual homepages and landing pages. | Image-led layout. |
| Card Library | Displays sites categorised as Library. | Library exhibition listings. | Requires Library categorisation. |
| Card Library Browse | Compact browse view for Library sites showing only titles and thumbnails. | Large site directories. | Reduced metadata display. |
| Card Library Mosaic | Mosaic-style display of Library sites. | Visual library collections. | Uses CSS Grid layout. |
| Card Research | Displays sites categorised as Research. | Research exhibition listings. | Requires Research categorisation. |
| Card Research Browse | Compact browse view for Research sites showing only titles and thumbnails. | Large research directories. | Reduced metadata display. |
| Card Research Mosaic | Mosaic-style display of Research sites. | Visually rich research showcases. | Uses CSS Grid layout. |

---

# CSS Classes

The following utility classes can be applied to Media Embed blocks.

| CSS Class | Purpose |
|-----------|---------|
| `dark-background` | Adds a dark background to your block. |
| `fill-button` | Fills the Learn More button. |
| `grid-container` | Restricts block width to 1140px. |
| `media-right` | Places media to the right of the text. |
| `full-width` | Extends blocks to full width. |
| `grid-columns-2` | Displays two columns for Multiple Media templates. |
| `no-button` | Hides the Learn More button. |
| `no-margin-top` | Removes the default top margin. |
| `no-max-height` | Removes image height restrictions. |
| `no-right-click` | Disables right-click functionality on media. |
| `no-separator` | Removes the separator between title and caption. |
| `portrait` | Narrows media width for portrait images. |
| `white-background` | Forces a white background. |
| `white-text` | Displays text in white. |
| `wide` | Increases maximum image width. |
| `width-80` | Restricts block width to 80% of viewport width. |

## Metadata Classes

| CSS Class | Purpose |
|-----------|---------|
| `no-location` | Hides the item's location. |
| `no-date` | Hides the item's date. |
| `no-alternative` | Hides the item's alternative title. |
| `no-identifier` | Hides the item's reference number. |

---

# Resource Page Configuration

Foundation S supports configurable resource pages.

Available regions include:

- Full-width Main
- Main with Sidebar
- Left Sidebar
- Right Sidebar

These regions may be combined to create different layouts for:

- Items
- Item Sets
- Media

---

# Development

## Sass Tasks

Run these commands from the theme root:

```bash
npm start
```

Watch for Sass changes and automatically compile CSS.

```bash
gulp css
```

Compile CSS once.

```bash
gulp css:watch
```

Watch Sass files and compile automatically.

## Sass Structure

The theme's styling is organised around:

```text
_globals-default.scss
_globals-theme.scss
_settings.scss
_foundation-core.scss
_omeka.scss
```

Theme-specific overrides should generally occur after loading `_settings.scss` and before importing the final rule files.

---

# Third-Party Software Acknowledgements

This theme incorporates the following third-party software.

## Annona

- Author: North Carolina State University
- License: MIT
- Source: https://github.com/NCSU-Libraries/annona

## imagesLoaded

- Author: David DeSandro
- License: MIT
- Source: https://imagesloaded.desandro.com/

## jquery.peekABar

- Author: Kunal Nagar
- License: MIT
- Source: https://github.com/kunalnagarco/jquery.peekABar

## Masonry

- Author: David DeSandro
- License: MIT
- Source: https://masonry.desandro.com/

## svg-pan-zoom

- Author: Andrea Leofreddi and contributors
- License: BSD-2-Clause
- Source: https://github.com/ariutta/svg-pan-zoom

Copies of all applicable licences are provided in the `/licenses` directory.

---

# Credits

## Manchester Digital Exhibitions

Developed for:

- University of Manchester Library
- Manchester Digital Exhibitions

## Foundation S

This project builds upon Foundation S, developed by the Corporation for Digital Scholarship.

- Website: https://digitalscholar.org
- Omeka S: https://omeka.org/s/

---

# Copyright and License

## Manchester Digital Exhibitions Theme

Copyright © University of Manchester.

## Foundation S

Copyright © Corporation for Digital Scholarship.

Foundation S is distributed under the GNU General Public License Version 3 (GPLv3).

## Third-Party Components

Third-party libraries included with this project remain the property of their respective authors and are licensed under their own terms.

See:

```text
/licenses
```

for complete licence information.
## BRC Visualise Drupal 8/9 module
This Drupal module:

- Packages the BRC atlas and charting visualisation Javascript libraries.
- Provides a custom field type - *BRC visualisation libraries* - for loading the charting/atlas and custom Javascript libraries on content of any type.
- Provides a custom content type - *BRC visualisation* - for flexibly implementing visualisations through Javascript code.

It is a relatively lightweight module because the heavy lifting is all done on the client-side via Javascript libraries. On its own, this module does not provide 'out of the box' visualisations. Custom Javscript code must be created to access data sources and create visualisations and/or GUI elements. (See *Custom Javascript libraries* below.)

### BRC atlas and charting visualisation Javascript libraries
The BRC atlas library (https://github.com/BiologicalRecordsCentre/brc-atlas) and BRC charting library (https://github.com/BiologicalRecordsCentre/brc-charts) are packaged in separate Drupal library assests (together with their dependencies).

The module also looks for any javascript files placed in subfolders of a folder called *brcvis* which in the Drupal *libraries* folder and, if it finds any, dynamically adds these as further Drupal library assests named after the subfolder in which they are found. They are only actually loaded for a page if the name of the subfolder is specified in *BRC visualisation libraries* field on a page (see below).

### BRC visualisation libraries field type
A field of the custom type *BRC visualisation libraries* can be added to any content type. From it, a page creator can specify which custom libraries to add to the page. The BRC libraries are specified with checkboxes and the custom libraies are specified via a comma separated list of names. (The names correspond to the subfolder names in the *libraries/brcvis* folder).

### BRC Visualisation content type
The content type can be used to create add hoc visualisations. The content type includes the fields described below. This content type always creates an HTML *div* tag on the page (below the body field) with the id **brc-vis-content**. Custom Javascript libraries can inject DOM elements into this div.

#### Body field
This is can be used to specify ad hoc page content.

#### BRC visualisation libraries field
Use this field to indicate which Javascript libraries to include in the page.

#### Indicia report field
If data need to be acquired via one or more Indicia reports, this field can be used to specify the path one or more Indicia XML reports on the associated Indicia warehouse. Do not include the '.xml' extension. 

#### Indicia ES query field
This is a checkbox which must be checked if custom Javascript code accessess data via the Indicia Elastisearch API.

#### Config options for JS code field
You can use this field the specify configuration options to make available to Javascript functions. For each option, the first word is the name of the option, and the remaining content is its value. The options, if any, you are required to specify here depend upon the custom Javascript libraries used to build the visualisation.

### BRC atlas library features
On pages where the BRC atlas library is included, creators can generate a map in body text by simply including a div tag with the class `atlasdrupal` and some `data-` attributes that direct the BRC atlas JS library to generate a map. (This is a featuer of the BRC atlas Javascript library.)

Example:
```javascript
<div 
    class="brcatlas" 
    data-csv="/sites/default/bsbi_data/richness-2010-2019.csv" 
    data-height="500" data-legend="true" data-legend-lines="less than 250; circle; #C6FF10 | 250-499; circle; #C1E311 | 500-749; circle; #BCC812 | 750-999; circle; #B7AD13 | 1000-1249; circle; #B29215 | 1250-1499; circle; #AD7716 | 1500-1749; circle; #A85C17 | 1750-2000; circle; #A44119" 
    data-legend-opacity="0.9" 
    data-legend-scale="0.8" 
    data-legend-title="Richness of taxa by hectad" data-legend-x="10" 
    data-trans="BI4" 
    id="map1" 
    style="display:inline-block; float:left; margin-right:1em">
</div>
```

### Module dependencies and configuration
If a custom JS library is using Indica XML reports or Indicia Elasticsearch API to retrieve data for the visualisation, the Indicia *client_helpers* PHP library must be available to the module. If the iForm module is on the website, then the module will use the client_helpers
library included there. Otherwise it will look for a client_helpers library within this module. But if a custom library is not using either of these Indicia data sources, it is not necessary for the Indicia *client_helpers* PHP library to be available on the website.

If an Indicia XML report is used to provide a datasource, then the Indicia Warehouse URL, website ID and secret can be specified under this module's configuration found at */admin/config/brc_vis/settings*. However if the Indicia iForm module is installed, the Indicia Warehouse URL, website ID and secret must be configured there.

If Indicia Elasticsearch is used to provide a datasource, then connection credentials must be supplied via the Indicia iForm module configuration page rather than the configuration page for this module (*/admin/config/iform/settings*). This is because the Indicia Elastisearch API looks for configuraton in that module.

### Custom Javascript libraries
Visualisations and other GUI elements are created by additional custom libraries. These libraries could create a very specific visualisation or they could provide a generalised facility enabling page creators to create customised visualisations by supplying configuration options via  *config options for JS code** fields.

If you are creating a new custom library and you are interested to see how this might be done, you can look at some of the libraries created to be used with this module in this repo: https://github.com/BiologicalRecordsCentre/brc-vis-custom
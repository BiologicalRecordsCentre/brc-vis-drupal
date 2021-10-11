## BRC Visualise Drupal 8/9 module
This Drupal module:

- Packages the BRC atlas and charting visualisation Javascript libraries.
- Provides a custom field type - *BRC visualisation libraries* - for loading the charting/atlas and custom Javascript libraries on content of any type.
- Provides a custom content type - *BRC visualisation* - for flexibly implementing visualisations through Javascript code.

### BRC atlas and charting visualisation Javascript libraries
The BRC atlas library (https://github.com/BiologicalRecordsCentre/brc-atlas) and BRC charting library (https://github.com/BiologicalRecordsCentre/brc-charts) are packaged in separate Drupal library assests (together with their dependencies).

The module also looks for any javascript files placed in subfolders of a folder called *brcvis* which is placed in the Drupal *libraries* folder and, if it finds any, dynamically adds these as further Drupal library assests named after the subfolder in which they are found.

### BRC visualisation libraries field type
A field of the custom type *BRC visualisation libraries* can be added to any content type. From it, a page creator can specify which custom libraries to add to the page. The BRC libraries are specified with checkboxes and the custom libraies are specified via a comma separated list of names. (The names correspond to the subfolder names in the *libraries/brcvis* folder).

### BRC Visualisation content type
The content type can be used to create add hoc visualisations. The content type includes the fields described below.

#### Body field
This is the used to specify page content. Any sort of text content can be specified, but the main use is to place an HTML tag into which visualisations are injected by Javascript code that you provide in custom libraries. This requires editing the page HTML. First switch to the Full HTML text format. Then click the *Source* button to edit the HTML source. Manually enter a tag when you want a visualisation to appear and give it the the class "brcvis". You must also add two more attributes: data-report and data-fn. The first one, 'data-report', should be set to the name of a report which you specify in the Indicia reports section (see below). Set it to the name of the report file without the '.xml' extension. Note it is the file name, not the full path. The second one, 'data-fn', should be set to the name of a function in a linked Javascript library that will be used to generate the visualisation. An example is: 
```javascript
<div class="brcvis" data-fn="pomsSelectFlower" data-report="poms-donuts-1"></div>
```
In this example, the function *pomsSelectFlowe* would need to be provided via a custom Javascript library.

#### BRC visualisation libraries field
Use this field to indicate which Javascript libraries to include in the page.

#### Indicia report field
If data need to be acquired via one or more Indicia reports, this field can be used to specify the path one or more Indicia XML reports on the associated Indicia warehouse. Do not include the '.xml' extension.

#### Config options for JS code field
Use this field the specify configuration options to make available to Javascript functions. For each named option, the first word is the name of option, and the remaining content is its value. The options you are required to specify here depend upon the data access/configuration Javascript library that is provided.

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

### Module dependencies
If you are using Indica XML reports or Indicia Elasticsearch API to retried data for the visualisation, you must ensure that the Indicia *client_helpers* library is available to the module. If the iForm module is on the website, then the module will use the client_helpers
library included there. Otherwise it will look for a client_helpers library within this module.
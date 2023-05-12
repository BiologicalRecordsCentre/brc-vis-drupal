## BRC Visualise Drupal 8/9 module
This Drupal module:

- Packages the BRC atlas and charting visualisation Javascript libraries.
- Provides a custom field type - *BRC visualisation libraries* - for loading the charting/atlas and custom Javascript libraries on content of any type.
- Provides a custom content type - *BRC visualisation* - for flexibly implementing visualisations through Javascript code.
- Provides a custom *BRC chart block* - for use with the Drupal layout builder - for flexibly implementing visualisations through Javascript code.
- Provides a custom *BRC taxon selector block* - for use with the Drupal layout builder - to provide an autocomplete taxon selection control that links to the Indica taxon search REST API.

It is a relatively lightweight module because most of the heavy lifting is done on the client-side via Javascript libraries. On its own, this module does not provide 'out of the box' visualisations. Custom Javscript code must be created to access data sources and create visualisations and/or GUI elements. (See *Custom Javascript libraries* below.)

### BRC atlas and charting visualisation Javascript libraries
The BRC atlas library (https://github.com/BiologicalRecordsCentre/brc-atlas) and BRC charting library (https://github.com/BiologicalRecordsCentre/brc-charts) are packaged in separate Drupal library assests (together with their dependencies).

The module also looks for any javascript files placed in subfolders of a folder called *brcvis* which in the Drupal *libraries* folder and, if it finds any, dynamically adds these as further Drupal library assests named after the subfolder in which they are found. They are only actually loaded for a page if the name of the subfolder is specified in *BRC visualisation libraries* field on a page or block (see below).

### BRC visualisation libraries field type
A field of the custom type *BRC visualisation libraries* can be added to any content type. From it, a page creator can specify which custom libraries to add to the page. The BRC libraries are specified with checkboxes and the custom libraries are specified via a comma separated list of names. (The names correspond to the subfolder names in the *libraries/brcvis* folder).

The *BRC visualisation libraries* field is also included on the *BRC visualisation* content type and the *BRC chart block*.

The field consists of three inputs: a checkbox each for the BRC atlas and BRC charts libraries and a text field in which you can specify the names of custom libraries to load (see above). To load more than one custom library, separate library (folder) names with a comma.

### BRC Visualisation content type
The content type can be used to create full page visualisations. The content type includes the fields described below. This content type always creates an HTML *div* tag on the page (below the body field) with the id **brc-vis-content**. Custom Javascript libraries can inject DOM elements into this div.

#### Body field
This is can be used to specify ad hoc page content.

#### BRC visualisation libraries field
Use this field to indicate which Javascript libraries to include in the page. Check either or both (or neither) of the BRC libraries to load and specify which, if any, custom libraries to load (see info on the *BRC visualisation libraries field type* for more details).

#### Indicia report field
If data need to be acquired via one or more Indicia reports, this field can be used to specify the path one or more Indicia XML reports on the associated Indicia warehouse. Do not include the '.xml' extension. The results of the XML reports will be available to custom JS code from the JS object `drupalSettings.brc_vis.data`. The value of this is a string containing a single JSON object (JSON encode the string to get the object) with keys corresponding to the names of any XML reports run. The report results are the corresponding values.

#### Indicia ES query field
This is a checkbox which must be checked if custom Javascript code accessess data via the Indicia Elastisearch API.

#### Config options for JS code field
You can use this field the specify configuration options to make available to custom Javascript functions. For each option, the first word is the name of the option, and the remaining content is its value. The options, if any, you are required to specify here depend upon the custom Javascript libraries used to build the visualisation.

There is one option that you need to specify here:
- **fn** is an option which references a function specified by a custom JS library. The value of this option must be a property name of the global JS object `drupalSettings.brc_vis.fns` which references a function to execute. The JS custom library is responsible for creating the function and adding it to the object.

### BRC chart block
The BRC chart block has all the features of the BRC visualisation content type, with the added advantage that, when used with the Drupal layout builder, blocks can be combined flexibly and responsively to build up multi-faceted visualisations. Because of their flexibility, blocks will normally be used in preference to the BRC visualisation content type. Since the BRC chart block works in a very similar way to the BRC visualisation content type, many of the configuration options are similar, but there are one or two extra.

#### ID for chart div
In contrast to the main div of the BRC visualisation content type, which is given a fixed id of *brc-vis-content*, blocks need more flexibility since more than one can be used in a single layout. The block ID is used by the custom JS libraries as a target to insert visualisations, so the ID you provide must be unique.

#### BRC charts lib, BRC Atlas lib and Custom JS libraries
Use these checkboxes and the text field to indicate which JS libraries are required by this block (see info on the *BRC visualisation libraries field type* for more details).

#### Indicia XML reports
If data need to be acquired via one or more Indicia reports, this field can be used to specify the path of one or more Indicia XML reports on the associated Indicia warehouse. Put each report path on a separate line. Do not include the '.xml' extension. The results of the XML reports will be available to custom JS code from the JS object `drupalSettings.brc_vis.data`. The value of this is a string containing a single JSON object (JSON encode the string to get the object) with keys corresponding to the names of any XML reports run. The report results are the corresponding values.

#### Requires Indicia Elasticsearch query
This is a checkbox which must be checked if custom Javascript code accesses data via the Indicia Elastisearch API.

#### Custom JS configuration options
You can use this field to specify configuration options for custom Javascript functions. For each option, the first word is the name of the option, and the remaining content is its value. Specify each of the options on a new line.

The options, if any, you are required to specify here depend upon the custom Javascript libraries used to build the visualisation.

There are, however, one or two options that you will frequently specify here.
- **fn** is an option which references a function specified by a custom JS library. The value of this option must be a property name of the global JS object `drupalSettings.brc_vis.fns` which references a function to execute. The JS custom library is responsible for creating the function and adding it to the object.
- **taxonSelControl** is used if the visualisation in this block is to react to the selection of a taxon in a BRC taxon selector block. The option should be specified with its value set to the identifier of the taxon selection control (see below).

### BRC taxon selector block
The taxon selection block provides an autocompletion control for selecting a taxon known to an Indicia warehouse. The control consists of a text area where a user starts typing the name of a taxon and an action button. As the user types the name of a taxon, REST API calls to the warehouse modify a list of taxa that appears below. When the user sees the taxon they want, they select it from the list. Then to get any associated charts to respond to the selection, the action button is clicked.

Several website conditions must be met in order for this control to work:
- The website must be configured to use an Indicia warehouse by specfying the Indicia Warehouse URL, website ID and secret under this module's configuration found at */admin/config/brc_vis/settings*. However if the Indicia iForm module is installed, the Indicia Warehouse URL, website ID and secret can be configured there instead.
- The Drupal Indicia API module (https://github.com/Indicia-Team/drupal-8-module-indicia-api) must be installed and enabled on the website.
- The Simple OAuth module (https://www.drupal.org/project/simple_oauth) must be installed and configured on the website. (A separate section below has further information on doing that.)

The configuration options for the taxon selector block are described below.

#### ID for taxon selector
Enter a unique identifier for this taxon selection control. When the action button is clicked then any custom functions that are configured to respond to a taxon selection will be sent these three arguments:
- the ID of the taxon selector control
- the TVK of the selected taxon
- the name of the selected taxon

See the section on custom JS library code to see how to configure a custom JS function to respond to a taxon selection control.

#### Drupal user for JWT
This should be set to the name of a user on the Drupal website that is also registered on the Indicia warehouse. This is used in authentication for the taxon search REST API.

#### Drupal user password for JWT
This should be set to the password of the user (as described above). This is used in authentication for the taxon search REST API.

#### Oauth client ID for JWT authentication
This should be set to the ID of a *client* configured for the Simple OAuth module. This is used in authentication for the taxon search REST API. (There is a section further on with some information on configuring the Simple OAuth module.)

#### Oauth secret for JWT authentication
This should be set to the *secret* associated with the above client as configured for the Simple OAuth module. This is used in authentication for the taxon search REST API. (There is a section further on with some information on configuring the Simple OAuth module.)

#### Max width of taxon selection control
By default, the taxon selection control will expand to the full width of its parent `div` tag. You can use this option to limit the width of the control. Specify a numeric value (in pixels, but *don't* use a 'px' suffix).

#### Text to appear on the action button
By default the text that appears on the action button is *Search*, but you can use this option to override that.

#### Text to appear as the placeholder in the search box
By default the placeholder text that appears in the search control is *Start typing the name of a species*, but you can use this option to override that.

#### Indicia taxon search API parameters
You can use this option to modify the behaviour of the Indicia taxon search API. For a full list of options, see the documentation here: http://warehouse1.indicia.org.uk/index.php/services/rest (look for the section with the heading *Taxa* and click the *More info* button). Any of the options listed there can be used to modify the behaviour of the taxon search. Specify each option on a new line and separate the option and the value by a space, e.g:
```
include data
taxon_list_id 15
```

### Methods on the taxon search control
When a taxon selector control is referenced from client custom code, the following data attributes reference methods that can be used to alter the behaviour of the control from the client code.
- **data-enabled-fn**: This data attribute references a method which can be used to enable/disable the action button of the control. The returned function takes a single boolean argument which sets the state of the action button. The value can be overridden by the control where appropriate.
- **data-enabled-input-fn**: This data attribute references a method which can be used enable/disable the autocomplete part of the control. The returned function takes a single boolean argument which sets the autocomplete control.
- **data-param-override-fn**: This data attribute references a method which can be used to change the taxon search REST API URL. The supplied URL parameters are added to those defined in the block configuration - overriding them if a match is found. The returned function takes a single object parameter of the form: `{param_name1: value1, param_name2: value2}`

### BRC atlas library features
On pages where the BRC atlas library is included, creators can generate a map in body text by simply including a `div` tag with the class `atlasdrupal` and some `data-` attributes that direct the BRC atlas JS library to generate a map. (This is a feature of the BRC atlas Javascript library.)

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
If a custom JS library is using Indica XML reports or Indicia Elasticsearch to retrieve data for the visualisation, the Indicia *client_helpers* PHP library must be available to the module. If the iForm module is on the website, then the module will use the client_helpers
library included there. Otherwise it will look for a client_helpers library within this module. But if a custom library is not using either of these Indicia data sources, it is not necessary for the Indicia *client_helpers* PHP library to be available on the website.

If an Indicia XML report is used to provide a datasource, then the Indicia Warehouse URL, website ID and secret can be specified under this module's configuration found at */admin/config/brc_vis/settings*. However if the Indicia iForm module is installed, the Indicia Warehouse URL, website ID and secret must be configured there.

If Indicia Elasticsearch is used to provide a datasource, then connection credentials must be supplied via the Indicia iForm module configuration page rather than the configuration page for this module (*/admin/config/iform/settings*). This is because the Indicia Elastisearch API looks for configuraton in that module.

If a BRC taxon selector block is used, then the Drupal Indicia API module and the Simple OAuth module must be installed and configured on the website. (See the section on the BRC taxon selector control and the section on configuring the Simple Oauth module for more details).

### Configuring the Simple Oauth module
In general, follow the guidance given with the Simple OAuth module. These notes are to supplement that information.
- An SSH key pair can be generated using whatever tool is available to you and then placed in an accessible folder on the web server (which should be outside the website's root folder), but you might find it easier to use the module's *Generate keys* button to generate them. If you do the latter, you still need to specify a suitable location for them.
- The public key needs to be copied into the Indicia warehouse configuration for your website. If you cannot do this yourself, you will need to contact BRC to get someone to do it for you.
- On the 'clients' tab, click the *Add Consumer* button to create a 'client' with the necessary secret. The secret you specify is the *client_secret* you will need when you configure your BRC taxon selector control.
- You should be able to leave the *User* filed blank, or you can set it to *admin*.
- You can leave the two checkboxes (*Is confidential* and *Is this consumer 3rd party?*) checked.
- You can leave the *Redirect URI* field blank.
- If you find that the *Save* button is not enabled, it may be because you have not defined any additional roles on your website. If you define a dummy one, its name will appear under *Scopes* and the *Save* button will be enabled (there's no need to check this dummy role or any others).
- Once you click *Save* the *client_id* that you need to specify in your BRC taxon selector configuration will be seen under the *UUID* column in the table of clients.

### Custom Javascript libraries
Visualisations and other GUI elements are created by additional custom libraries. These libraries could create a very specific visualisation or they could provide a generalised facility enabling page creators to create customised visualisations by supplying JS configuration options on the block on content type.

Here follow some notes that include useful pointers and coding patterns for developers of custom libraries.

#### General coding considerations
A page of content type BRC visualisation will generate and empty `div` tag with the ID *brc-vis-content*. Blocks of type *BRC chart block* will generate empty `div` tags with the ID specified in their configuration.

JS code that targets a page of type BRC visualisation should inject its visualisation in the `div` with id *brc-vis-content*. JS code that targets a block will get the ID of the `div` to target as an argument sent to the function it specifies in the `fn` JS option. Consider a block with the following options.

*ID for chart div*<br/>
```brc-hectad-overview```<br/>
*BRC atlas lib*<br/>
`[checked]`<br/>
*Custom JS libraries*<br/>
```hectad-maps```<br/>
*Custom JS configuration options*<br/>
`fn hectadOverview`<br/>
`colour1 red`<br/>
`colour2 #aabb88`

The the value of `hectad-maps` for *Custom JS libraries* means that there should be a folder called *hectad-maps* in the `<website root>libraries/brcvis` folder which should contain one or more JS files (and optionally CSS files). One of the JS files should contain code similar to the following:

```Javascript
drupalSettings.brc_vis.fns.hectadOverview = function(id, config) {
    [...]
}
```
Once the page is loaded, the module will call this function with the first argument, `id`, set to the value `'brc-hectad-overview'`. That enables the function to inject a visualisation into the block, e.g.

```Javascript
drupalSettings.brc_vis.fns.hectadOverview = function(id, config) {
    [...]
    var html = 'some-visualisation-html'
    document.getElementById(id).innerHTML = html
    [...]
}
```
Since the *BRC altas lib* configuration option has been checked, the BRC atlas library is available to the custom code and might be used to generate a map something like this example (which uses jQuery):

```Javascript
drupalSettings.brc_vis.fns.hectadOverview = function(id, config) {
    [...]
    $('<div id="' + id + '-map">').appendTo($('#'+id)))
    var brcmap = brcatlas.svgMap({
      selector: "#" + id + "-map",
      mapTypesKey: 'hectad',
      transOptsControl: false,
      mapTypesSel: {
        'hectad': getHectads
      },
      transOptsKey: 'BI4',
      expand: true
    })

    function getHectads() {
        [data access code]
    }
    [...]
}
```

The second argument passed to the function is an object with the values of all the config options which in this case would be:

```Javascript
{
    fn: 'hectadOverview',
    colour1: 'red',
    colour2: '#aabb88',
}
```
These options can be used by the JS code to tailor the visualisation which allows a degree of control over its appearance from the block configuration.

For the content type BRC visualisation, no function is called by the module. The target `div` id is already known (*brc-vis-content*) so the JS code can just go ahead and use it (most likely kicking off by checking that the document is loaded). For the content type, the config options can be accessed from `drupalSettings.brc_vis.config`. (As well as being passed to a block function as an argument, the config object can also be accessed from `drupalSettings.brc_vis.config['<blockid>']`.)

#### Working with the BRC taxon selector control
When a BRC chart block is required to respond to the action button on a BRC taxon selector control, it must specify the ID of the taxon selector control for the JS config option `taxonSelControl`. This is to deal with situations where more than one taxon selector control block is present on one page layout - the JS code responding to an action button click needs to make sure that it only responds to the selector control that it is associated with.

When an action button is clicked, any custom functions that are configured to respond to a taxon selection will be sent these three arguments:
- the ID of the taxon selector control
- the TVK of the selected taxon
- the name of the selected taxon

Each function can then compare the passed taxon selector id value with the value stored in its block's configuration.

To register a function to be executed when a taxon selector control's action button is clicked, a custom function must execute code like this:

```Javascript
drupalSettings.brc_vis.fns.addTaxonSelectedFn(function (usedTaxonSelId, tvk, taxon) {
    var linkedTaxonSelId = config.taxonSelControl
    if (usedTaxonSelId === linkedTaxonSelId) {
        [...]
    }
}
```

The function `drupalSettings.brc_vis.fns.addTaxonSelectedFn` is supplied by the module and registers a function to be called by when an action button is used.

#### Accessing data from Indicia XML reports

The module passes the results of Indicia XML reports into a JS object. The object has this structure:
```Javascript
{
    <reportname1>: <reportname1-results-object>,
    <reportname2>: <reportname2-results-object>
}
```

If the reports were named in the config of a page of content type BRC visualisation, the object is assigned to `drupalSettings.brc_vis.data`. If the reports were named in the config of a block, the object is assigned to `drupalSettings.brc_vis.data['<block-id>']`.

#### Using Indicia Elasticsearch datasources

Working with Elasticsearch datasources is more involved in the custom code because the Elasticsearch queries are all performed from Javascript. Most of the heavy lifting is done by Indicia ES code from the Indcia client_helpers library, but there is still much to consider in the custom code.

The first step is to configure and add an Indicia ES datasource to the JS array `indiciaData.esSources`. For example:

```Javascript
indiciaData.esSources.push({
    size: 0,
    id: "source-" + id,
    mode: "compositeAggregation",
    uniqueField: "location.grid_square.10km.centre",
    fields: [
        "location.grid_square.10km.centre"
    ],
    filterBoolClauses: {
        "must":[
            {"query_type": "match_phrase","field": "taxon.taxa_taxon_list_id","value":taxon}
        ]
    },
    proxyCacheTimeout: drupalSettings.brc_vis.indiciaUserId ? 60 : 7200
})
```

Next set up a `div` for the Indicia ES custom script. This is how we specify a callback function that will receive the results of the ES query once it has completed. Here's a jQuery example:
```Javascript
var $cs = $('<div id="' + id + '-cs"></div>').appendTo($('#' + id))

$cs.addClass('idc-output')
$cs.addClass('idc-output-customScript')
var source = {}
source["source-" + id] = ''
$cs.idcCustomScript({
    id: 'custom-script-' + id,
    source: source,
    functionName: id,
})
```

If the above code is being called in response to some action, e.g. a taxon select control, then all but the first line should occur in a block of code that is executed in response to that action. The first line should be outside that block.

In the example above, when the ES query has completed, it will call the function indicated by the property `functionName`. The example uses the chart block id to identify the function. The function itself must be stored in the `indiciaFns` array, for example like this:
```Javascript
indiciaFns[id]  = function (el, sourceSettings, response) {
    $cs.removeClass('idc-output')
    $cs.removeClass('idc-output-customScript')
    [...]
}
```
The resuls object of the ES query will be in the response parameter. The first two lines of the callback function above are important because if the two 'idc' classes were left in place, when the module later runs the code show below in response to an action that *does not* initiate the custom code above, the `indiciaFns.hookupDataSources()` will fail.

To trigger the ES query, the following code is executed:
```Javascript
indiciaFns.initDataSources()
indiciaFns.hookupDataSources()
indiciaFns.populateDataSources()
```
Custom code for a page of content type BRC visualisation can itself perform this step.

But for blocks, it is more complicated. The above code should only be called a single time, once *all* datasources - perhaps from many different bocks, are initialised. So, for blocks, the module takes care of calling this code. It does it in two places. The first place is after the page has first loaded *and after all the block initialisation funcions have been called* and the block functions  have set up any required datasources and callbacks as described above.

The second place is after all functions associated with taxon selector action has been run. Again, this code is the place to set up datasources and callbacks associated with a taxon selection.

(In both situations, the module only runs this code if `indiciaFns` has been initialised.)

#### Visualisation libraries
The BRC atlas and BRC charts libraries are easily accessed because they are packaged with the module and included for a page or block by checking the necessary boxes in the page/block config. However any third party visualisation (or other) library can easily be included with custom libraries simply by placing the JS (and CSS if required) in the custom code folder.

#### Example code
If you are creating a new custom library, you can also look at some of the libraries created to be used with this module in this repo: https://github.com/BiologicalRecordsCentre/brc-vis-custom. Many situations you will encounter are covered in the *test* custom library.
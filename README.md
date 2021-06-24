### BRC Visualise Drupal 8 module
This Drupal 8 module packages the BRC Atlas and Charting visualisation Javascript libraries (https://github.com/BiologicalRecordsCentre/brc-atlas and https://github.com/BiologicalRecordsCentre/brc-charts) and those libraries' dependencies (Leaflet and D3), making them available in Drupal library asset.

The module loads this asset on any page, of any content type, where the alias for the page includes the following string '-brcvis-'.

The module adds some code that allows content creators to generate a map in body text by simply including a div tag with the class `atlasdrupal` and some `data-` attributes that direct the BRC Atlas JS library to generate a map.

TODO: comprehensive instructions and examples.


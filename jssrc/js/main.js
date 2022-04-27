// The following two imports required for babel 7.4 onwards
// to deal with async/await.
import "core-js/stable"
import "regenerator-runtime/runtime"

import { taxonSelect } from "./taxon-select"
const $ = jQuery // eslint-disable-line no-undef
const ds = drupalSettings // eslint-disable-line no-undef

// If no BRC Vis content type or blocks are used on page (e.g. module
// is just being used to deliver mapping/charting libs) then skip
// everything on this page.
const skip = !drupalSettings.brc_vis

export function main() {
  $(document).ready(function () {
    if (!skip) {
      // Set up any taxon selection controls.
      taxonSelect()
      // Set up functions for chart blocks and init data sources
      // that are ready to go.
      chartBlocks()
    }
  })
}

function chartBlocks() {
  if (ds.brc_vis && ds.brc_vis.blocks) {
    // For each BRC visualisation block defined on
    // the layout, get its named function from the 
    // block config and call it, passing in the id
    // of the block div and the config object.
    // The named function will probably be from a
    // custom library.
    Object.keys(ds.brc_vis.config).forEach(function(divId){

      const config = ds.brc_vis.config[divId]

      const fn = config['fn'] ? config['fn'] : null
      if (fn && ds.brc_vis.fns[fn]) {
        ds.brc_vis.fns[fn](divId, config)
      }
    })
    // The the initialisation funcions have set up ES data sources,
    // these will now be initialised, hooked up and populated.
    // (For functions that generate chart/map without the need
    // for further input such as a taxon selection control.)
    if (indiciaFns) {
      indiciaFns.initDataSources()
      indiciaFns.hookupDataSources()
      indiciaFns.populateDataSources()
    }
  }
}

if (!skip) {
  ds.brc_vis.fns.taxonSelected = function(taxonSelId, tvk, taxon, group, groupid) {
    // Execute each of the functions passed into addTaxonSelectedFn
    // when a taxon is selected. Pass the id of the taxon 
    // selection control and the identifiers of the selected taxon as
    // arguments. If any of the functions sets up ES data sources,
    // these will be initialised, hooked up and populated after
    // all functions executed.  
    if (indiciaData) {
      indiciaData.esSources = [] // eslint-disable-line no-undef
    }
    ds.brc_vis.data.taxonChangedFns.forEach(function(fn) {
      fn(taxonSelId, tvk, taxon, group, groupid)
    })
    if (indiciaFns) {
      indiciaFns.initDataSources()
      indiciaFns.hookupDataSources()
      indiciaFns.populateDataSources()
    }
  }

  ds.brc_vis.fns.addTaxonSelectedFn = function (fn) {
    // This function is used by library functions to add callback
    // functions that respond to a taxon selection control.
    // The functions passed into this function can take
    // five arguments - the id of a selection control,
    // the selected taxon (tvk), the selected taxon name,
    // the selected group name and the selected group id. 
    // The functions are added
    // to an array of functions to be called when taxon
    // selection controls are fired. The functions themselves
    // can check that the taxon selection control is the one
    // they want to respond to.
    if (!ds.brc_vis.data.taxonChangedFns) {
      ds.brc_vis.data.taxonChangedFns = []
    }
    ds.brc_vis.data.taxonChangedFns.push(fn)
  }

  ds.brc_vis.fns.getConfigOpt = function (config, opt, defaultVal) {
    // Utility function that can be called by libraries to get
    // config option value.
    return config[opt] ? config[opt] : defaultVal
  }

  ds.brc_vis.fns.parseChartConfig = function(config) {
    // Utility function that can be called by libraries to get
    // the parsed value of the special chart-config option.
    const passedChartConfigStr = ds.brc_vis.fns.getConfigOpt(config, 'chart-config', '{}')
    let passedChartConfig
    try {
      passedChartConfig = JSON.parse(passedChartConfigStr)
    } catch (error){
      console.error("JSON.parse failed on: ", passedChartConfigStr, error)
      passedChartConfig = {}
    }
    return passedChartConfig
  }

  ds.brc_vis.fns.topDivConfig = function(config) {
    // Utility function that can be called by libraries to get
    // get a jQuery div object with style from special top-div-style option.
    const topDivStyle = ds.brc_vis.fns.getConfigOpt(config, 'top-div-style', '')
    if (topDivStyle) {
      var $div = $('<div style="' + topDivStyle + '"></div>')
    } else {
      var $div = $('<div></div>')
    }
    // Add the position relative css
    // Enables child elements to be centred in the div
    // (e.g. busy indicator)
    $div.css('position', 'relative')
    return $div
  }
}
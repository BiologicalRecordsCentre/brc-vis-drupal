import "core-js/stable"
import "regenerator-runtime/runtime"
import { taxonSelect } from "./taxon-select"
const $ = jQuery // eslint-disable-line no-undef
const ds = drupalSettings // eslint-disable-line no-undef


export function main() {

  $(document).ready(function () {

    // Set up any taxon selection controls
    taxonSelect()

    // Set up functions for chart blocks and init data sources
    chartBlocks()
  })
}

function chartBlocks() {
  if (ds.brc_vis && ds.brc_vis.block) {
    Object.keys(ds.brc_vis.block).forEach(function(divId){

      const config = ds.brc_vis.block[divId]['config']
      const fn = config['fn'] ? config['fn'] : null
      const fns = ds.brc_vis.fns
      if (fn && fns[fn]) {
        fns[fn](divId, config)
      }
    })
    //if ($('.idc-output').length === 0 && indiciaFns) {
    if (indiciaFns) {
      indiciaFns.initDataSources()
      indiciaFns.hookupDataSources()
      indiciaFns.populateDataSources()
    }
    //}
  }
}

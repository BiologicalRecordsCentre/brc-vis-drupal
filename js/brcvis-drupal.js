(function ($, Drupal, drupalSettings) {

  $(document).ready(function () {

    Object.keys(drupalSettings.brc_vis.block).forEach(function(divId){

      var config = drupalSettings.brc_vis.block[divId]['config']
      var fn = config['fn'] ? config['fn'] : null
      var fns = drupalSettings.brc_vis.fns
      if (fn && fns[fn]) {
        fns[fn](divId, config)
      }
    })
    if ($('.idc-output').length === 0 && indiciaFns) {
      indiciaFns.initDataSources()
      indiciaFns.hookupDataSources()
      indiciaFns.populateDataSources()
    }

  })
})(jQuery, Drupal, drupalSettings);
(function ($, Drupal, drupalSettings) {

  //window.brcvisDataProcessing = {}
  //window.brcvisDataProcessing.fns = {}

  $(document).ready(function () {

    // brcvisDataProcessing.processReportData = function (report, fn) {

    //   if (window.drupalSettings.brc_vis.data) {
    //     var repdataAll = JSON.parse(window.drupalSettings.brc_vis.data)
    //     var repdata = repdataAll[report]
    //     var fn = window.brcvisDataProcessing.fns[fn]
    //     var selector = '[data-report="' + report + '"]'
    
    //     if(fn && repdata) {
    //       fn(repdata, selector)
    //     }
    //   }
    // }

    // // Process elements with class 'brcvis'
    // d3.selectAll('.brcvis').each(function(){
    //   var report = d3.select(this).attr('data-report')
    //   var fn = d3.select(this).attr('data-fn')
    //   console.log('tag with report & function ', report), fn
    //   brcvisDataProcessing.processReportData(report, fn)
    // });
  })
})(jQuery, Drupal, drupalSettings);
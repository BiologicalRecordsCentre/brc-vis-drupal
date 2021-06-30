(function() {
  var fns = window.brcvisDataProcessing.fns
  fns.websites_list = function(repdata, selector){

    console.log('websites_list data', repdata)

    var data = [
      {
        name: 'One',
        number: 0
      },
      {
        name: 'Two',
        number: 0
      },
      {
        name: 'Three',
        number: 0
      },
      {
        name: 'Four',
        number: 0
      },
      {
        name: 'Five or more',
        number: 0
      }
    ]

    repdata.forEach(function(w){ 
      var length = w.title.split(' ').length
      var nameLength = length <= 5 ? length : 5
      data[nameLength-1].number++
    })

    brccharts.pie({
      selector: selector,
      innerRadius: 100,
      radius: 200,
      title: 'Test doughnut chart',
      data: data
    })
  }

  fns.surveys_list = function (repdata, selector){

    console.log('surveys_list data', repdata)
  }

  console.log('new poms data access library loaded!')
})()

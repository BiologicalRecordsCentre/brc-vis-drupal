const $ = jQuery // eslint-disable-line no-undef

export function taxonSelect () {
  // Set up any taxon selection controls
  $('.brc_vis_taxon_selector').each(function(){

    const id = $(this).attr('id')
    const jwt = $(this).attr('data-jwt')
    const params = $(this).attr('data-params')
    const maxWidth = $(this).attr('data-max-width')

    // Hidden input for selected tvk and taxon
    // other functions can put on change event handlers on these
    const $tvkHidden = $('<input>').appendTo($(this))
    $tvkHidden.attr('class', 'tvk-selected')
    $tvkHidden.attr('type', 'hidden')
    const $taxonHidden = $('<input>').appendTo($(this))
    $taxonHidden.attr('class', 'taxon-selected')
    $taxonHidden.attr('type', 'hidden')

    // Datalist
    const $datalist = $('<datalist>').appendTo($(this))
    $datalist.attr('id', id + '-datalist')

    $('#' + id + '-datalist options').mouseover(function() {
      console.log('hover')
    })

    // Flex layout for input and button
    const $d0 = $('<div>').appendTo($(this))
    $d0.css('display', 'flex')
    $d0.css('width', '100%')
    if (Number(maxWidth)) {
      $d0.css('max-width', Number(maxWidth) + 'px')
    }
    const $d1 = $('<div>').appendTo($d0)
    $d1.css('flex', '20')
    const $d2 = $('<div>').appendTo($d0)
    $d2.css('flex', '1')

    // Text input
    const $input = $('<input>').appendTo($d1)
    $input.attr('type', 'text')
    $input.attr('id', id + '-text')
    $input.attr('name', id + '-text')
    $input.attr('list', id + '-datalist')
    $input.attr('placeholder', 'Start typing species name')
    $input.attr('autocomplete', 'off')
    $input.css('width', '100%')

    // Action button
    let selTvk = ''
    let selText = ''
    const $button = $('<button>Search</button>').appendTo($d2)
    $button.css('margin-left', '0.5em')
    $button.prop('disabled', true)
    $button.on('click', function() {
      console.log("action!", selTvk, selText)
      $tvkHidden.val(selTvk).trigger('change')
      $taxonHidden.val(selText).trigger('change')
    })

    // Event handler
    $input.on('input', function(){

      selText = $input.val()
      // Does text represent an item in the current list
      $datalist.find("option").each(function(){
        if($(this).attr('value') === selText) {
          selTvk = $(this).attr('data-value')
        }
      })
      if (selTvk) {
        $button.prop('disabled', false)
      } else {
        $button.prop('disabled', true)
      }
      
      const url = 'https://warehouse1.indicia.org.uk/index.php/services/rest/taxa/search' + params + 'searchQuery=' + selText
      fetch(url, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + jwt
        }
      }).then(function(response) {
        return response.json()
      }).then (function(json){

        // Replacing the options all at once (rather than using
        // second commented out method), appears to cause fewer visual
        // flickers etc on Chrome. (Firefox looks much better for both.)

        const opts = json.data.map(function(t) {
          console.log(t)
          return '<option value="' + t.taxon + '"data-value="' + t.preferred_taxa_taxon_list_id +'">' + t.taxon_group + '</option>'
        })
        $datalist.html(opts.join(''))

        //const dlsel = '#' + id + '-datalist'
        //$(dlsel).empty()
        // json.data.forEach(function(t) {
        //   $('<option/>').html(t.taxon).appendTo(dlsel)
        // })
      })
    })
  })
}

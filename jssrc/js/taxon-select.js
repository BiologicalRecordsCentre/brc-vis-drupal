const $ = jQuery // eslint-disable-line no-undef
const ds = drupalSettings // eslint-disable-line no-undef
const fns = drupalSettings.brc_vis.fns // eslint-disable-line no-undef

export function taxonSelect () {

  // Set up any taxon selection controls
  $('.brc_vis_taxon_selector').each(function(){

    const id = $(this).attr('id')
    const jwt = $(this).attr('data-jwt')
    const params = $(this).attr('data-params')
    const maxWidth = $(this).attr('data-max-width')
    const buttonText = $(this).attr('data-button-text')
    const placeholder = $(this).attr('data-placeholder')

    // Hidden input for selected tvk and taxon
    // other functions can put on change event handlers on these
    const $tvkHidden = $('<input>').appendTo($(this))
    $tvkHidden.attr('id', `${id}-tvk-selected`)
    $tvkHidden.attr('class', 'tvk-selected')
    $tvkHidden.attr('type', 'hidden')
    const $taxonHidden = $('<input>').appendTo($(this))
    $taxonHidden.attr('id', `${id}-taxon-selected`)
    $taxonHidden.attr('class', 'taxon-selected')
    $taxonHidden.attr('type', 'hidden')

    // Flex layout for input and button
    const $d0 = $('<div>').appendTo($(this))
    $d0.css('display', 'flex')
    $d0.css('width', '100%')
    $d0.css('margin', '0.3em 0')
    if (Number(maxWidth)) {
      $d0.css('max-width', Number(maxWidth) + 'px')
    }
    const $d1 = $('<div>').appendTo($d0)
    $d1.css('flex', '20')
    const $d2 = $('<div>').appendTo($d0)
    $d2.css('flex', '1')

    // Action button
    let selTvk = ''
    let selText = ''
    const $button = $(`<button>${buttonText}</button>`).appendTo($d2)
    $button.css('margin-left', '0.5em')
    $button.prop('disabled', true)
    $button.on('click', function() {
      //console.log("action!", selTvk, selText)
      fns.taxonSelected(id, $tvkHidden.val(), $taxonHidden.val())
    })

    // Autocomplete
    const $wrapper = $('<div>').appendTo($d1)
    $wrapper.attr('class', 'autoComplete_wrapper')
    const $input = $('<input>').appendTo($wrapper)
    $input.attr('id', `${id}-input`)
    $input.attr('type', 'text')
    $input.attr('tabindex', '1')

    let searchString
    const autoCompleteJS = new autoComplete({
      selector: `#${id}-input`,
      placeHolder: placeholder,
      debounce: 300,
      submit: true,
      data: {
        src: async (query) => {
          searchString=query.toLowerCase()
          try {
            // Enable disable search button
            if (query === $taxonHidden.val()) {
              $button.prop('disabled', false)
            } else {
              $button.prop('disabled', true)
            }

            // Fetch Data from external Source
            const url = `${ds.brc_vis.warehouse}index.php/services/rest/taxa/search${params}searchQuery=${query}`
            const source = await fetch(url, {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${jwt}`
              }
            })
            // Data is array of `Objects` | `Strings`
            const data = await source.json()
      
            // Remove duplicates, e.g there are two Anthus pratensis with different authorities
            const json = data.data.filter((value, index, self) =>
              index === self.findIndex((t) => (
                t.default_common_name === value.default_common_name && t.taxon === value.taxon && t.preferred_taxon === value.preferred_taxon
              ))
            )
            return json
          } catch (error) {
            return error
          }
        },
        // Data 'Object' key to be searched
        keys: ["searchterm"]
      },
      resultsList: {
        element: (list, data) => {
          if (!data.results.length) {
              // Create "No Results" message element
              const message = document.createElement("div")
              // Add class to the created element
              message.setAttribute("class", "no_result")
              // Add message text content
              message.innerHTML = `<span>Found No Results for "${data.query}"</span>`
              // Append message element to the results list
              list.prepend(message)
          }
        },
        noResults: true,
        maxResults: 50,
      },
      resultItem: {
        element: (item, data) => {

          const id = Number($(item).attr('id').substr(20))+1
          $(item).addClass(id%2 ? 'item-odd' : 'item-even')

          const t = data.value
          let line1, line2, line3

          // Specify the lines
          if (t.language_iso !== 'lat') {
            line1 = boldenSearch(t.taxon)
            if (t.taxon !== t.preferred_taxon) {
              line2 = `[<i>${boldenSearch(t.preferred_taxon)}</i>]`
            } else {
              line2 = ''
            }
          } else {
            line1 = `<i>${boldenSearch(t.taxon)}</i>`
            if (t.taxon !== t.preferred_taxon) {
              line2 = `[syn. of <i>${boldenSearch(t.preferred_taxon)}</i>]`
            } else if (t.default_common_name) {
              line2 = boldenSearch(t.default_common_name)
            } else {
              line2 = ''
            }
          }
          line3 = `<b>${t.taxon_group}</b>`

          // Highlight the search text 
          function boldenSearch (taxon) {

            const taxonlc = taxon.toLowerCase()
            const iStart = taxonlc.indexOf(searchString)
            let p1, p2, p3
            if (iStart > -1) {
              if (iStart === 0) {
                p1 = ''
              } else {
                p1 = taxon.substr(0, iStart)
              }
              p2 = `<b>${taxon.substr(iStart, searchString.length)}</b>`
              if (iStart + searchString.length === taxon.length) {
                p3 = ''
              } else {
                p3 = taxon.substr(iStart + searchString.length)
              }
              return `${p1}${p2}${p3}`
            } else {
              return taxon
            }
          }
          item.innerHTML = `<div>${line1}</div><div>${line2}</div><div>${line3}</div>`
        }
      },
      events: {
        input: {
          focus: () => {
            if (autoCompleteJS.input.value.length) autoCompleteJS.start()
          },
          selection: (event) => {
            const pttlid = event.detail.selection.value.preferred_taxa_taxon_list_id
            const match = event.detail.selection.value.taxon
            //console.log(pttlid)
            autoCompleteJS.input.value = match
            $tvkHidden.val(pttlid)
            $taxonHidden.val(match)
            $button.prop('disabled', false)
          }
        }
      }
    })
  })
}

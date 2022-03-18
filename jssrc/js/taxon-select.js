const $ = jQuery // eslint-disable-line no-undef
const ds = drupalSettings // eslint-disable-line no-undef
const fns = drupalSettings.brc_vis.fns // eslint-disable-line no-undef
import * as groups from './taxon_groups.json' 

export function taxonSelect () {

  // Set up any taxon selection controls
  $('.brc_vis_taxon_selector').each(function(){

    const id = $(this).attr('id')
    const jwt = $(this).attr('data-jwt')
    const params = $(this).attr('data-params')
    const maxWidth = $(this).attr('data-max-width')
    const buttonText = $(this).attr('data-button-text')
    const placeholder = $(this).attr('data-placeholder')
    const placeholder2 = $(this).attr('data-placeholder2')
    const type = $(this).attr('data-type')
    const toggle = type === 'taxon group' || type === 'group taxon'

    // console.log("selectors", id, placeholder2, type)

    // Hidden input for selected tvk, taxon and group
    // other functions can put on change event handlers on these
    const $tvkHidden = $('<input>').appendTo($(this))
    $tvkHidden.attr('id', `${id}-tvk-selected`)
    $tvkHidden.attr('class', 'tvk-selected')
    $tvkHidden.attr('type', 'hidden')
    const $taxonHidden = $('<input>').appendTo($(this))
    $taxonHidden.attr('id', `${id}-taxon-selected`)
    $taxonHidden.attr('class', 'taxon-selected')
    $taxonHidden.attr('type', 'hidden')
    const $groupHidden = $('<input>').appendTo($(this))
    $groupHidden.attr('id', `${id}-group-selected`)
    $groupHidden.attr('class', 'group-selected')
    $groupHidden.attr('type', 'hidden')

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
    let $d2, $d3
    if (toggle) {
      $d2 = $('<div>').appendTo($d0)
      $d2.css('flex', '1')
    }
    if (toggle) {
      $d3 = $('<div>').appendTo($d0)
      $d3.css('flex', '1')
    }
    const $d4 = $('<div>').appendTo($d0)
    $d4.css('flex', '1')

    // Taxon selection type toggle
    if (toggle) {
      const $toggleTaxon = $('<button>').appendTo($d2)
      $toggleTaxon.attr('id', `${id}-toggle-taxon`)
      $toggleTaxon.attr('class', `${id}-toggle-button`)
      $toggleTaxon.css('border-radius', '3px 0 0 3px')
      $toggleTaxon.css('border-width', '1px 0 1px 1px')
      $toggleTaxon.css('padding', '2px')
      $toggleTaxon.css('margin-left', '0.5em')
      $toggleTaxon.text('Sp.')
      $toggleTaxon.click(function () {toggleAction('taxon')})
      const $toggleGroup = $('<button>').appendTo($d3)
      $toggleGroup.attr('id', `${id}-toggle-group`)
      $toggleGroup.attr('class', `${id}-toggle-button`)
      $toggleGroup.css('border-radius', '0 3px 3px 0')
      $toggleGroup.css('border-width', '1px')
      $toggleGroup.css('padding', '2px')
      $toggleGroup.text('Grp')
      $toggleGroup.click(function () {toggleAction('group')})
    }

    // Action button
    let selTvk = ''
    let selText = ''
    const $button = $(`<button>${buttonText}</button>`).appendTo($d4)
    $button.css('margin-left', '0.5em')
    //$button.prop('disabled', true)
    enableButton($button, false)
    $button.on('click', function() {
      //console.log("action!", selTvk, selText)
      fns.taxonSelected(id, $tvkHidden.val(), $taxonHidden.val(), $groupHidden.val())
    })

    // Add a method to enable/disable the control (action button)
    // Must work in concert with enableButton internal function.
    $(this).prop('data-enabled', false)
    $(this).prop('data-enabled-fn', function() {
      return function(enabled) {
        enableButton($button, enabled, true)
      }
    })

    //console.log('select control',  id, 'type is', type)
    
    // Autocomplete taxon
    const $wrapper = $('<div>').appendTo($d1)
    $wrapper.attr('class', 'autoComplete_wrapper')
    const $input = $('<input>').appendTo($wrapper)
    $input.attr('id', `${id}-input`)
    $input.attr('type', 'text')
    $input.attr('tabindex', '1')
    $input.css('display', type.substr(0,5) === 'taxon' ? '' : 'none')

    // Autocomplete taxon group
    const $wrapper2 = $('<div>').appendTo($d1)
    $wrapper2.attr('class', 'autoComplete_wrapper')
    const $input2 = $('<input>').appendTo($wrapper2)
    $input2.attr('id', `${id}-input-2`)
    $input2.attr('type', 'text')
    $input2.attr('tabindex', '1')
    $input2.css('display', type.substr(0,5) === 'group' ? '' : 'none')

    // For hidden list
    const $hiddenListParent = $('<div>').appendTo($d1)
    $hiddenListParent.css('display', 'none')
    const $hiddenList = $('<div>').appendTo($hiddenListParent)
    $hiddenList.attr('id', `${id}-hidden-list`)

    let searchString

    // Taxon group search autocomplete
    const autoCompleteGroup = new autoComplete({
      selector: `#${id}-input-2`,
      placeHolder: placeholder2,
      debounce: 300,
      submit: true,
      data: {
        src: async (query) => {
          searchString=query.toLowerCase()
          return groups.default
        },
        // Data 'Object' key to be searched
        keys: ["title"]
      },
      resultsList: {
        element: (list, data) => {
          if (!data.results.length) {
            if (!data.results.length) list.prepend(noResults(data.query))
          }
        },
        noResults: true,
        maxResults: 50,
      },
      resultItem: {
        element: (item, data) => {
          const id = Number($(item).attr('id').substr(20))+1
          $(item).addClass(id%2 ? 'item-odd' : 'item-even')
          $(item).html(boldenSearch(data.value.title, searchString))
        }
      },
      events: {
        input: {
          focus: () => {
            if (autoCompleteGroup.input.value.length) autoCompleteGroup.start()
          },
          selection: (event) => {
            const group = event.detail.selection.value.title
            autoCompleteGroup.input.value = group
            $tvkHidden.val('')
            $taxonHidden.val('')
            $groupHidden.val(group)
            //$button.prop('disabled', false)
            enableButton($button, true)
          }
        }
      }
    })

    // Taxon search autocomplete
    let autoCompleteTaxon

    if (jwt) {
      autoCompleteTaxon = new autoComplete({
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
                //$button.prop('disabled', false)
                enableButton($button, true)
              } else {
                //$button.prop('disabled', true)
                enableButton($button, false)
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
            if (!data.results.length) list.prepend(noResults(data.query))
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
              line1 = `<i>${boldenSearch(t.taxon, searchString)}</i>`
              if (t.taxon !== t.preferred_taxon) {
                line2 = `[syn. of <i>${boldenSearch(t.preferred_taxon, searchString)}</i>]`
              } else if (t.default_common_name) {
                line2 = boldenSearch(t.default_common_name, searchString)
              } else {
                line2 = ''
              }
            }
            line3 = `<b>${t.taxon_group}</b>`

            $(item).html(`<div>${line1}</div><div>${line2}</div><div>${line3}</div>`)
          }
        },
        events: {
          input: {
            focus: () => {
              if (autoCompleteTaxon.input.value.length) autoCompleteTaxon.start()
            },
            selection: (event) => {
              const pttlid = event.detail.selection.value.preferred_taxa_taxon_list_id
              const match = event.detail.selection.value.taxon
              //console.log(pttlid)
              autoCompleteTaxon.input.value = match
              $tvkHidden.val(pttlid)
              $taxonHidden.val(match)
              $groupHidden.val('')
              //$button.prop('disabled', false)
              enableButton($button, true)
            }
          }
        }
      })
    } else {
      // No jwt token so create a simple taxon search box
      autoCompleteTaxon = new autoComplete({
        selector: `#${id}-input`,
        placeHolder: placeholder,
        data: {
          src: async (query) => {
            return [query]
          },
        },
        resultsList: {
          destination: `#${id}-hidden-list`,
        },
        events: {
          input: {
            keyup: () => {
              $taxonHidden.val($(`#${id}-input`).val())
              $tvkHidden.val('')
              $groupHidden.val('')
              enableButton($button, true)
            }
          }
         
        }
      })
    }
    
    // Disable browswer autocomplete
    $(`#${id}-input`).attr('autocomplete', 'off')
    $(`#${id}-input-2`).attr('autocomplete', 'off')
    
    // Initialise toggle
    toggleAction(type)

    function toggleAction(inType) {

      // First time type passed (for init), type could be compound, so adjust
      const type = inType.substr(0,5)
    
      $(`.${id}-toggle-button`).css('font-weight', '')
      $(`#${id}-toggle-${type}`).css('font-weight', 'bold')
      
      if (type.substr(0,5) === 'taxon') {
        $(`#${id}-input-2`).hide()
        $(`#${id}-input-2`).text('')
        $(`#${id}-input`).show()
      } else {
        $(`#${id}-input`).hide()
        $(`#${id}-input`).text('')
        $(`#${id}-input-2`).show()
      }

      autoCompleteTaxon.input.value = ''
      autoCompleteGroup.input.value = ''
      $tvkHidden.val('')
      $taxonHidden.val('')
      $groupHidden.val('')
      //$button.prop('disabled', true)
      enableButton($button, false)
    }

    function enableButton($button, enabled, external) {

      // Store button state so for use in enabled property method
      if (!external) $button.prop('data-enabled', enabled)
    
      if (enabled && $button.prop('data-enabled')) {
        $button.prop('disabled', false)
        $button.css('color', 'black')
      } else {
        $button.prop('disabled', true)
        $button.css('color', 'silver')
      }
    }
  })

  function boldenSearch (taxon, searchString) {

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
  
  function noResults(searchString) {
    const message = document.createElement("div")
    message.setAttribute("class", "no_result")
    message.innerHTML = `<span>Found No Results for "${searchString}"</span>`
    return message
  }
}

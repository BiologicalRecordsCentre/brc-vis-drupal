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
    const $groupidHidden = $('<input>').appendTo($(this))
    $groupidHidden.attr('id', `${id}-groupid-selected`)
    $groupidHidden.attr('class', 'groupid-selected')
    $groupidHidden.attr('type', 'hidden')

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
    const $button = $('<button>').text(buttonText).appendTo($d4)
    $button.css('margin-left', '0.5em')
    //$button.prop('disabled', true)
    enableButton($button, false)
    $button.on('click', function() {
      //console.log('click', id, $tvkHidden.val(), $taxonHidden.val(), $groupHidden.val(), $groupidHidden.val())
      fns.taxonSelected(id, $tvkHidden.val(), $taxonHidden.val(), $groupHidden.val(), $groupidHidden.val())
    })

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
          // Enable disable search button
          if (query === $groupHidden.val()) {
            enableButton($button, true)
          } else {
            enableButton($button, false)
          }
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
          $(item).empty()
          appendHighlightedText(item, data.value.title, searchString)
        }
      },
      events: {
        input: {
          focus: () => {
            if (autoCompleteGroup.input.value.length) autoCompleteGroup.start()
          },
          selection: (event) => {

            //console.log(event.detail.selection)
            const group = event.detail.selection.value.title
            autoCompleteGroup.input.value = group
            $tvkHidden.val('')
            $taxonHidden.val('')
            $groupHidden.val(group)
            $groupidHidden.val(event.detail.selection.value.id)
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
            // Enable disable search button
            if (query === $taxonHidden.val()) {
              enableButton($button, true)
            } else {
              enableButton($button, false)
            }
            // Apply override parameters
            // Split existing params into an array of
            // objects of the form {param_name, value}
            let existing = {}
            params.split('&').filter(p => p !== '').forEach(p => {
              const a = p.split('=')
              existing[a[0]] = a[1]
            })
            // Merge objects, overriding existing params with overrides
            const paramObj = {...existing, ...paramOverride}
            let mergedParams = ''
            for (const param in paramObj) {
              mergedParams += `${param}=${paramObj[param]}&`
            }
            //console.log('mergedParams', id, mergedParams)
            try {
              // Fetch Data from external Source
              const url = `${ds.brc_vis.warehouse}index.php/services/rest/taxa/search?${mergedParams}searchQuery=${query}`
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
              console.log('error', error)
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
            const line1 = document.createElement('div')
            const line2 = document.createElement('div')
            const line3 = document.createElement('div')

            // Specify the lines
            if (t.language_iso !== 'lat') {
              appendHighlightedText(line1, t.taxon)
              if (t.taxon !== t.preferred_taxon) {
                line2.appendChild(document.createTextNode('['))
                const preferredTaxon = document.createElement('i')
                appendHighlightedText(preferredTaxon, t.preferred_taxon)
                line2.appendChild(preferredTaxon)
                line2.appendChild(document.createTextNode(']'))
              }
            } else {
              const taxon = document.createElement('i')
              appendHighlightedText(taxon, t.taxon, searchString)
              line1.appendChild(taxon)
              if (t.taxon !== t.preferred_taxon) {
                line2.appendChild(document.createTextNode('[syn. of '))
                const preferredTaxon = document.createElement('i')
                appendHighlightedText(preferredTaxon, t.preferred_taxon, searchString)
                line2.appendChild(preferredTaxon)
                line2.appendChild(document.createTextNode(']'))
              } else if (t.default_common_name) {
                appendHighlightedText(line2, t.default_common_name, searchString)
              }
            }
            const taxonGroup = document.createElement('b')
            taxonGroup.textContent = t.taxon_group == null ? '' : String(t.taxon_group)
            line3.appendChild(taxonGroup)

            $(item).empty().append(line1, line2, line3)
          }
        },
        events: {
          input: {
            focus: () => {
              if (autoCompleteTaxon.input.value.length) autoCompleteTaxon.start()
            },
            selection: (event) => {
              const pttlid = event.detail.selection.value.external_key
              const match = event.detail.selection.value.taxon
              console.log(event.detail.selection.value)
              autoCompleteTaxon.input.value = match
              $tvkHidden.val(pttlid)
              $taxonHidden.val(match)
              $groupHidden.val('')
              $groupidHidden.val('')
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
              $groupidHidden.val('')
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

    // Add a method to enable/disable the control (action button)
    // Must work in concert with enableButton internal function.
    $(this).prop('data-enabled', false)
    $(this).prop('data-enabled-fn', function() {
      return function(enabled) {
        enableButton($button, enabled, true)
      }
    })

    // Add a method to enable/disable input control.
    $(this).prop('data-enabled-input', true)
    $(this).prop('data-enabled-input-fn', function() {
      return function(enabled) {
        //enableButton($(`#${id}-input`), enabled, true)
        $(this).prop('data-enabled-input', enabled)
        $input.prop('disabled', enabled === false)
        $input2.prop('disabled', enabled === false)
        $input.css('border-color', enabled ? 'black' : 'silver')
        $input2.css('border-color', enabled ? 'black' : 'silver')
      }
    })

    // Add a method to alter the search API URL parameters
    let paramOverride = {}
    $(this).prop('data-param-override-fn', function() {
      return function(paramsNew) {
        // The params argument is an object {param_name1: value1, param_name2: value2}
        paramOverride = {...paramOverride, ...paramsNew}
      }
    })

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
      $groupidHidden.val('')
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

  function appendHighlightedText(element, value, searchString) {
    const text = value == null ? '' : String(value)
    const search = searchString == null ? '' : String(searchString)
    const start = search ? text.toLowerCase().indexOf(search.toLowerCase()) : -1
    if (start === -1) {
      element.appendChild(document.createTextNode(text))
      return
    }

    element.appendChild(document.createTextNode(text.substr(0, start)))
    const match = document.createElement('b')
    match.textContent = text.substr(start, search.length)
    element.appendChild(match)
    element.appendChild(document.createTextNode(text.substr(start + search.length)))
  }
  
  function noResults(searchString) {
    const message = document.createElement("div")
    message.setAttribute("class", "no_result")
    message.textContent = `Found No Results for "${searchString}"`
    return message
  }
}

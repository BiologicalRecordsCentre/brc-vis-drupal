<?php

namespace Drupal\brc_vis\Plugin\Field\FieldWidget;

use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Field\WidgetInterface;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Form\FormStateInterface;

/**
 * Field widget "brc_vis_libs_default".
 *
 * @FieldWidget(
 *   id = "brc_vis_libs_default",
 *   label = @Translation("Default widget"),
 *   field_types = {
 *     "brc_vis_libs",
 *   }
 * )
 */
class BrcVisLibsWidget extends WidgetBase implements WidgetInterface {

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {

    // Load brc_vis.inc file for reading library data.
    module_load_include('inc', 'brc_vis');

    // $item is where the current saved values are stored.
    $item =& $items[$delta];

    // $element is already populated with #title, #description, #delta,
    // #required, #field_parents, etc.

    $element['libraries'] = array(
      '#title' => t('Core BRC visualisation libraries'),
      '#type' => 'fieldset',
      '#process' => array(__CLASS__ . '::processLibrariesFieldset'),
    );

    // Array keys in $element correspond roughly
    // to array keys in $item, which correspond
    // roughly to columns in the database table.
    $element['brc_vis_lib_custom'] = array(
      '#title' => t('Custom BRC visualisation libraries'),
      '#type' => 'textfield',
      // Use #default_value to pre-populate the element
      // with the current saved value.
      '#default_value' => isset($item->brc_vis_lib_custom) ? $item->brc_vis_lib_custom : '',
    );

    // Create a checkbox item for each library.
    foreach (brc_vis_get_libraries() as $library_key => $library_name) {
      $element['libraries'][$library_key] = array(
        '#title' => t($library_name),
        '#type' => 'checkbox',
        '#default_value' => isset($item->$library_key) ? $item->$library_key : '',
      );
    }
    return $element;
  }

  /**
   * Form widget process callback.
   */
  public static function processLibrariesFieldset($element, FormStateInterface $form_state, array $form) {
    $elem_key = array_pop($element['#parents']);
    return $element;
  }
}
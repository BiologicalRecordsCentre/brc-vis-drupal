<?php

namespace Drupal\brc_vis\Plugin\Field\FieldType;

use Drupal\Core\TypedData\DataDefinition;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Field\FieldItemInterface;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\Field\FieldItemBase;

/**
 * Defines the 'brc_vis_libs' entity field type.
 *
 * @FieldType(
 *   id = "brc_vis_libs",
 *   label = @Translation("BRC Visualisation libraries"),
 *   description = @Translation("Booleans indicating which BRC Visualisation JS libraries to load."),
 *   category = @Translation("Custom"),
 *   default_widget = "brc_vis_libs_default",
 *   default_formatter = "brc_vis_libs_default",
 *   cardinality = 1,
 * )
 */
class BrcVisLibs extends FieldItemBase implements FieldItemInterface {
  /**
   * {@inheritdoc}
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {

    module_load_include('inc', 'brc_vis');

    $output = array();

    // Create basic text column for custom lib list (space separated list).
     $output['columns']['brc_vis_lib_custom'] = array(
      'type' => 'varchar',
      'length' => 255,
    );

    // Make a column for every library.
    $library_coll = brc_vis_get_libraries();
    foreach ($library_coll as $library_key => $library_name) {
      $output['columns'][$library_key] = array(
        'type' => 'int',
        'length' => 1,
      );
    }
    return $output;
  }

  /**
   * {@inheritdoc}
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {

    module_load_include('inc', 'brc_vis');

    $properties['brc_vis_lib_custom'] = DataDefinition::create('string')
      ->setLabel(t('Custom libs'))
      ->setRequired(FALSE);

    $library_coll = brc_vis_get_libraries();
    foreach ($library_coll as $library_key => $library_name) {
      $properties[$library_key] = DataDefinition::create('boolean')
        ->setLabel($library_name);
    }
    return $properties;
  }

  /**
   * {@inheritdoc}
   */
  public function isEmpty() {

    $item = $this->getValue();

    $has_stuff = FALSE;

    // Has the user entered custom library names?
    if (isset($item['brc_vis_lib_custom']) && !empty($item['brc_vis_lib_custom'])) {
      $has_stuff = TRUE;
    }

    // See if any of the library checkboxes have been checked off.
    foreach (brc_vis_get_libraries() as $library_key => $library_name) {
      if (isset($item[$library_key]) && $item[$library_key] == 1) {
        $has_stuff = TRUE;
        break;
      }
    }
    return !$has_stuff;
  }

  /**
   * Returns an array of libraries assigned.
   *
   * @return array
   *   An associative array of all libraries.
   */
  public function getBrcLibraries() {

    module_load_include('inc', 'brc_vis');

    $output = array();

    foreach (brc_vis_get_libraries() as $library_key => $library_name) {
      if ($this->$library_key) {
        $output[$library_key] = $library_name;
      }
    }
    return $output;
  }
}

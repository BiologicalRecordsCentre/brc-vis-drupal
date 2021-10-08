<?php
 
namespace Drupal\brc_vis\Plugin\Field\FieldFormatter;
 
use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FieldItemInterface;
use Drupal\Core\Form\FormStateInterface;
 
/**
 * Field formatter "brc_vis_libs_default".
 *
 * @FieldFormatter(
 *   id = "brc_vis_libs_default",
 *   label = @Translation("Default formatter"),
 *   field_types = {
 *     "brc_vis_libs"
 *   }
 * )
 */

class BrcVisLibsFormatter extends FormatterBase {
 
  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    return array(
      '#markup' => '',
    );
  }
}
<?php

namespace Drupal\brc_vis\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Url;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a Block for a BRC Chart or Atlas map.
 *
 * @Block(
 *   id = "brc_chart",
 *   admin_label = @Translation("BRC chart Block"),
 *   category = @Translation("Custom"),
 * )
 */
class BrcChart extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {

    $config = $this->getConfiguration();
    if (!empty($config['brc_vis_div_id'])) {
      $brc_vis_div_id = $config['brc_vis_div_id'];
    }
    else {
      $brc_vis_div_id = '';
    }
    return [
      '#markup' => '<div id="'.$brc_vis_div_id.'"></div>'
    ];
  }


  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);
    $config = $this->getConfiguration();

    $form['brc_vis_div_id'] = [
      '#type' => 'textfield',
      '#title' => $this->t('ID for chart div'),
      '#description' => $this->t('Indicate the ID of the <div> tag into which visulaisation injected.'),
      '#default_value' => $config['brc_vis_div_id'] ?? '',
    ];

    $form['brc_vis_charts_lib'] = [
      '#type' => 'checkbox',
      '#title' => $this->t(' BRC Charts lib'),
      '#description' => $this->t('Indicate if the BRC Charts library is required.'),
      '#default_value' => $config['brc_vis_charts_lib'] ?? '',
    ];

    $form['brc_vis_atlas_lib'] = [
      '#type' => 'checkbox',
      '#title' => $this->t(' BRC Atlas lib'),
      '#description' => $this->t('Indicate if the BRC Atlas library is required.'),
      '#default_value' => $config['brc_vis_atlas_lib'] ?? '',
    ];

    $form['brc_vis_indicia_custom_libs'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Custom JS libraries'),
      '#description' => $this->t('Comma separated list of custom JS libraries.'),
      '#default_value' => $config['brc_vis_indicia_custom_libs'] ?? '',
    ];

    $form['brc_vis_indicia_reports'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Indicia XML reports'),
      '#description' => $this->t('Specify path to indicia XML reports (without xml extension) - one per line.'),
      '#default_value' => $config['brc_vis_indicia_reports'] ?? '',
    ];

    $form['brc_vis_indicia_es'] = [
      '#type' => 'checkbox',
      '#title' => $this->t(' Requires Indicia Elastichsearch query'),
      '#description' => $this->t('Indicate if the BRC Charts library is required.'),
      '#default_value' => $config['brc_vis_indicia_es'] ?? '',
    ];

    $form['brc_vis_js_config'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Custom JS configuration options'),
      '#description' => $this->t('Config options to make available to Javascript functions. For each named option, the first word is the name of option, and the remaining content is its value.'),
      '#default_value' => $config['brc_vis_js_config'] ?? '',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    // Save our custom settings when the form is submitted.
    parent::blockSubmit($form, $form_state);
    $values = $form_state->getValues();
    $this->configuration['brc_vis_div_id'] = $values['brc_vis_div_id'];
    $this->configuration['brc_vis_charts_lib'] = $values['brc_vis_charts_lib'];
    $this->configuration['brc_vis_atlas_lib'] = $values['brc_vis_atlas_lib'];
    $this->configuration['brc_vis_indicia_custom_libs'] = $values['brc_vis_indicia_custom_libs'];
    $this->configuration['brc_vis_indicia_reports'] = $values['brc_vis_indicia_reports'];
    $this->configuration['brc_vis_indicia_es'] = $values['brc_vis_indicia_es'];
    $this->configuration['brc_vis_js_config'] = $values['brc_vis_js_config'];
  }
}


<?php

namespace Drupal\brc_vis\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal;

class BrcVisConfig extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'brc_vis_config';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    // Form constructor.
    $form = parent::buildForm($form, $form_state);
    // Settings.
    $config = $this->config('brc_vis.settings');

    $form['brcvis_warehouse_url'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Warehouse URL:'),
      '#default_value' => $config->get('warehouse.url'),
      '#description' => $this->t('URL of the linked Indicia Warehouse.'),
    ];

    $form['brcvis_warehouse_id'] = [
      '#type' => 'number',
      '#title' => $this->t('Website warehouse ID:'),
      '#default_value' => $config->get('warehouse.id'),
      '#description' => $this->t('ID for this website as stored on the linked Indicia Warehouse.'),
    ];

    $form['brcvis_warehouse_password'] = [
      '#type' => 'password',
      '#title' => $this->t('Website warehouse password:'),
      '#default_value' => $config->get('warehouse.password'),
      '#description' => $this->t('Password for this website as stored on the linked Indicia Warehouse.'),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {

    // Clear the Indicia cache
    require_once __DIR__.'/../../client_helpers/helper_base.php';
    \helper_base::clear_cache();
    drupal_set_message('Indicia cache cleared.', 'status');

    $config = $this->config('brc_vis.settings');
    $config->set('warehouse.url', $form_state->getValue('brcvis_warehouse_url'));
    $config->set('warehouse.id', $form_state->getValue('brcvis_warehouse_id'));
    $config->set('warehouse.password', $form_state->getValue('brcvis_warehouse_password'));
    $config->save();
    return parent::submitForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'brc_vis.settings',
    ];
  }

}
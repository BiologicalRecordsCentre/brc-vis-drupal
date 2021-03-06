<?php

namespace Drupal\brc_vis\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Url;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a Block for a BRC Taxon selector.
 *
 * @Block(
 *   id = "brc_taxon_select",
 *   admin_label = @Translation("BRC taxon selector Block"),
 *   category = @Translation("Custom"),
 * )
 */
class BrcTaxonSelector extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {

    // Get block config
    $config = $this->getConfiguration();

    // Get JWT access token from this website
    if (!empty($config['brc_vis_taxon_selector_user'])) {
      $brc_vis_taxon_selector_user = $config['brc_vis_taxon_selector_user'];
    }
    else {
      $brc_vis_taxon_selector_user = '';
    }

    if (!empty($config['brc_vis_taxon_selector_pwd'])) {
      $brc_vis_taxon_selector_pwd = $config['brc_vis_taxon_selector_pwd'];
    }
    else {
      $brc_vis_taxon_selector_pwd = '';
    }

    if (!empty($config['brc_vis_taxon_selector_client_id'])) {
      $brc_vis_taxon_selector_client_id = $config['brc_vis_taxon_selector_client_id'];
    }
    else {
      $brc_vis_taxon_selector_client_id = '';
    }

    if (!empty($config['brc_vis_taxon_selector_client_secret'])) {
      $brc_vis_taxon_selector_client_secret = $config['brc_vis_taxon_selector_client_secret'];
    }
    else {
      $brc_vis_taxon_selector_client_secret = '';
    }

    if ($brc_vis_taxon_selector_client_id != '') {
      $postfields="grant_type=password";
      $postfields.="&username=".$brc_vis_taxon_selector_user;
      $postfields.="&password=".$brc_vis_taxon_selector_pwd;
      $postfields.="&client_id=".$brc_vis_taxon_selector_client_id;
      $postfields.="&client_secret=".$brc_vis_taxon_selector_client_secret;

      $baseurl= \Drupal::request()->getSchemeAndHttpHost();
      //dpm($baseurl);
      $curl = curl_init();
      //curl_setopt($curl, CURLOPT_URL,"http://localhost/oauth/token");
      curl_setopt($curl, CURLOPT_URL, $baseurl."/oauth/token");
      curl_setopt($curl, CURLOPT_POST, 1);
      curl_setopt($curl, CURLOPT_POSTFIELDS, $postfields);
      curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

      $response = curl_exec ($curl);
      $err = curl_error($curl);
      curl_close ($curl);

      if (!$err) {
        $oresponse=json_decode($response);
        $access_token=$oresponse->access_token;
        //dpm($access_token);
      } else {
        $access_token='';
        \Drupal::messenger()->addMessage(t('Unable to generate an Indicia JWT authorisation token. Ensure the necessary modules are installed and configured, e.g. the Drupal Indicia API module and the Simple OAuth module and that the public key is set on the Indicia warehouse for this website.'));
      }
    } else {
      $access_token='';
    }
        
    // Div ID
    if (!empty($config['brc_vis_taxon_selector_id'])) {
      $brc_vis_taxon_selector_id = $config['brc_vis_taxon_selector_id'];
    }
    else {
      $brc_vis_taxon_selector_id = '';
    }

    // Indicia taxon search api params
    if (!empty($config['brc_vis_taxon_selector_params'])) {
      $paramstext = trim($config['brc_vis_taxon_selector_params']);
      $params = explode(PHP_EOL, $paramstext);
    }
    else {
      $params = [];
    }
    $taxonList=false;
    $api_params = '';
    if (!empty($params)) {
      foreach($params as $param) {
        // First word of param is name,
        // the rest is value    
        $tokens = explode(' ', trim($param));
        $name = array_shift($tokens);
        $value = implode(' ', $tokens);
        $api_params.=$name.'='.$value.'&';
        if ($name == 'taxon_list_id') {
          $taxonList=true;
        }
      }
      if (!$taxonList) {
        $api_params.='taxon_list_id=15&';
      }
    }

    // Button text
    if (!empty($config['brc_vis_taxon_selector_button_text'])) {
      $brc_vis_taxon_selector_button_text = $config['brc_vis_taxon_selector_button_text'];
    }
    else {
      $brc_vis_taxon_selector_button_text = '';
    }

    // Placeholder text for taxon search
    if (!empty($config['brc_vis_taxon_selector_placeholder'])) {
      $brc_vis_taxon_selector_placeholder = $config['brc_vis_taxon_selector_placeholder'];
    }
    else {
      $brc_vis_taxon_selector_placeholder = '';
    }

    // Placeholder text for taxon group search
    if (!empty($config['brc_vis_group_selector_placeholder'])) {
      $brc_vis_group_selector_placeholder= $config['brc_vis_group_selector_placeholder'];
    }
    else {
      $brc_vis_group_selector_placeholder = '';
    }

    // Text indicating type of taxon/group selector
    if (!empty($config['brc_vis_selector_type'])) {
      $brc_vis_selector_type= $config['brc_vis_selector_type'];
    }
    else {
      $brc_vis_selector_type = '';
    }

    // Max width for controls
    if (!empty($config['brc_vis_taxon_selector_max_width'])) {
      $brc_vis_taxon_selector_max_width = $config['brc_vis_taxon_selector_max_width'];
    }
    else {
      $brc_vis_taxon_selector_max_width = '';
    }

    $markup.='<div type="text" class="brc_vis_taxon_selector"';
    $markup.=' id="'.$brc_vis_taxon_selector_id.'"';
    $markup.=' data-jwt="'.$access_token.'"';
    $markup.=' data-params="'.$api_params.'"';
    $markup.=' data-button-text="'.$brc_vis_taxon_selector_button_text.'"';
    $markup.=' data-placeholder="'.$brc_vis_taxon_selector_placeholder.'"';
    $markup.=' data-placeholder2="'.$brc_vis_group_selector_placeholder.'"';
    $markup.=' data-type="'.$brc_vis_selector_type.'"';
    $markup.=' data-max-width="'.$brc_vis_taxon_selector_max_width.'"';
    $markup.='></div>';

    return [
      '#markup' => $markup
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);
    $config = $this->getConfiguration();

    $form['brc_vis_taxon_selector_id'] = [
      '#type' => 'textfield',
      '#title' => $this->t('ID for taxon selector'),
      '#description' => $this->t('Indicate the ID of the taxon selector control.'),
      '#default_value' => $config['brc_vis_taxon_selector_id'] ?? '',
    ];

    $form['brc_vis_taxon_selector_user'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Drupal user for JWT'),
      '#description' => $this->t('Specify which Drupal user to use for JWT authentication.'),
      '#default_value' => $config['brc_vis_taxon_selector_user'] ?? '',
    ];

    $form['brc_vis_taxon_selector_pwd'] = [
      '#type' => 'password',
      '#title' => $this->t('Drupal user password for JWT'),
      '#description' => $this->t('Specify password for Drupal user for JWT authentication.'),
      '#default_value' => $config['brc_vis_taxon_selector_pwd'] ?? '',
    ];

    $form['brc_vis_taxon_selector_client_id'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Oauth client ID for JWT authentication'),
      '#description' => $this->t('Specify oauth client ID for JWT authentication.'),
      '#default_value' => $config['brc_vis_taxon_selector_client_id'] ?? '',
    ];

    $form['brc_vis_taxon_selector_client_secret'] = [
      '#type' => 'password',
      '#title' => $this->t('Oauth secret for JWT authentication'),
      '#description' => $this->t('Specify oauth client secret for JWT authentication.'),
      '#default_value' => $config['brc_vis_taxon_selector_client_secret'] ?? '',
    ];

    $form['brc_vis_taxon_selector_max_width'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Max width of taxon selection control'),
      '#description' => $this->t('Specify the max-width in pixel. If not defined, takes max-width available.'),
      '#default_value' => $config['brc_vis_taxon_selector_max_width'] ?? '',
    ];

    $form['brc_vis_taxon_selector_button_text'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Text to appear on the action button'),
      '#description' => $this->t('Specify a short string which will appear as the text on the action button.'),
      '#default_value' => $config['brc_vis_taxon_selector_button_text'] ?? 'Search',
    ];

    $form['brc_vis_taxon_selector_placeholder'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Text to appear as the placeholder in the taxon search box'),
      '#description' => $this->t('Specify a string which will appear as the placeholder in the taxon search box.'),
      '#default_value' => $config['brc_vis_taxon_selector_placeholder'] ?? 'Start typing the name of a species',
    ];

    $form['brc_vis_group_selector_placeholder'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Text to appear as the placeholder in the taxon group search box'),
      '#description' => $this->t('Specify a string which will appear as the placeholder in the taxon group search box.'),
      '#default_value' => $config['brc_vis_group_selector_placeholder'] ?? 'Start typing the name of a group',
    ];

    $form['brc_vis_selector_type'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Indicate the type of taxon/group search box'),
      '#description' => $this->t('Specify a string: "taxon", "group", "taxon group" or "group taxon". The last two generate a toggle with the first value the default.'),
      '#default_value' => $config['brc_vis_selector_type'] ?? 'taxon',
    ];

    $form['brc_vis_taxon_selector_params'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Indicia taxon search API params'),
      '#description' => $this->t('One param per line. For each param, the first word is the name of param, and the remaining content is its value.'),
      '#default_value' => $config['brc_vis_taxon_selector_params'] ?? '',
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
    $this->configuration['brc_vis_taxon_selector_id'] = $values['brc_vis_taxon_selector_id'];
    $this->configuration['brc_vis_taxon_selector_user'] = $values['brc_vis_taxon_selector_user'];
    $this->configuration['brc_vis_taxon_selector_pwd'] = $values['brc_vis_taxon_selector_pwd'];
    $this->configuration['brc_vis_taxon_selector_client_id'] = $values['brc_vis_taxon_selector_client_id'];
    $this->configuration['brc_vis_taxon_selector_client_secret'] = $values['brc_vis_taxon_selector_client_secret'];
    $this->configuration['brc_vis_taxon_selector_max_width'] = $values['brc_vis_taxon_selector_max_width'];
    $this->configuration['brc_vis_taxon_selector_button_text'] = $values['brc_vis_taxon_selector_button_text'];
    $this->configuration['brc_vis_taxon_selector_placeholder'] = $values['brc_vis_taxon_selector_placeholder'];
    $this->configuration['brc_vis_group_selector_placeholder'] = $values['brc_vis_group_selector_placeholder'];
    $this->configuration['brc_vis_selector_type'] = $values['brc_vis_selector_type'];
    $this->configuration['brc_vis_taxon_selector_params'] = $values['brc_vis_taxon_selector_params'];
  }
}


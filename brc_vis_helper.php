<?php
/**
 * Class for widely used code.
 */
//class brc_vis_helper {

  /**
   * Returns path for Indicia client_helpers.
   *
   * @return string
   */
  //public static function getClientHelperPath() {
  function getClientHelperPath() {

    // We don't automatically include client_helpers as a sub-module in this module because 1) it may not always
    // be required and 2) if iForm is already installed and used, it can cause an error like this:
    // Fatal error: Cannot declare class helper_base, because the name is already in use in /code/modules/custom/iform/client_helpers/helper_base.php on line 235
    // So instead check here to see if iForm is installed and, if so, use client_helpers from there. If not, check
    // to see if included in this module and, if so, use client_helpers from there. Otherwise, set to empty string.
    $client_helpers = '';
    if (\Drupal::moduleHandler()->moduleExists('iform')) {
      $iform = drupal_get_path('module', 'iform');
      if ($iform !== '') {
        $client_helpers = DRUPAL_ROOT.'/'.$iform.'/client_helpers';
      }
    }
    if ($client_helpers === '') {
      $module_path=drupal_get_path('module', 'brc_vis');
      if (is_dir(DRUPAL_ROOT.'/'.$module_path.'/client_helpers')) {
        $client_helpers = 'client_helpers';
      }
    }
    return $client_helpers;
  }
//}
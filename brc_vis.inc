<?php

/**
 * @file
 * Contains utility functions.
 */

 /**
 * Returns an array of library names.
 *
 * @return array
 *   An array of library names, indexed by machine names.
 *   array(
 *     'brc_vis_lib_atlas' => 'Atlas',
 *     'brc_vis_lib_charts' => 'Charts',
 *     ...
 *   );
 */
function brc_vis_get_libraries() {

  return array(
    'brc_vis_lib_atlas' => 'Atlas',
    'brc_vis_lib_charts' => 'Charts',
  );
}
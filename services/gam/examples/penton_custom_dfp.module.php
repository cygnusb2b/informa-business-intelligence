<?php
/**
 * @file
 * Custom functionality for the DFP module.
 */

/**
 * Remove unwanted special characters from the ad targeting values
 * and ad unit pattern.
 */
function penton_custom_dfp_remove_unwanted_chars($term, $type) {
  $replace_chars = "";
  if (!empty($term)) {
    if ($type == "targeting") {
      $replace_chars = str_replace(str_split(' ,-/'), "_", $term);
      $remove_chars = preg_replace('/_{2,}/', '_', strtolower(str_replace(str_split('\\/"\'=!+#*~;:^()<>[]&{}“‘’”….,|?'), "", $replace_chars)));
    }
    elseif ($type == "adunit") {
      $new_term = array();
      foreach ($term as $t) {
        $replace_chars = str_replace(str_split('/'), "_", $t);
        $new_term[] = $replace_chars;
      }
      $replace_chars = str_replace(str_split(' ,-'), "_", implode('/', $new_term));
      $remove_chars = preg_replace('/_{2,}/', '_', strtolower(str_replace(str_split('"\'=!+#*~;:^()<>[]&{}“‘’”….,|?'), "", $replace_chars)));
    }
    return $remove_chars;
  }
}

/* MODIFY ADMIN SECTION */
/**
 * Implements hook_token_info().
 */
function penton_custom_dfp_token_info() {
  $info['tokens']['node']['field_penton_primary_category:parents:join:/'] = array(
    'name' => t('Primary Category with all Parents'),
    'description' => t('The primary category alongwith all its parents, starting with the root joined together with a "/" in-between each value.'),
  );
  $info['tokens']['node']['field_penton_native_advertising:/'] = array(
    'name' => t('Sponsored flag'),
    'description' => t('Determine if the article is sponsored or not.'),
  );
  $info['tokens']['node']['sterm_without_space_specialchars'] = array(
    'name' => t('Secondary Category terms in proper format'),
    'description' => t('The secondary category terms - comma separated, spaces replaced with underscores and no special chars'),
  );
  $info['tokens']['node']['pterm_without_space_specialchars'] = array(
    'name' => t('Primary Category term in proper format'),
    'description' => t('The primary category term - spaces replaced with underscores and no special chars'),
  );
  $info['tokens']['node']['program_without_space_specialchars'] = array(
    'name' => t('Program term in proper format'),
    'description' => t('The program term - spaces replaced with underscores and no special chars'),
  );
  $info['tokens']['node']['author_without_space_specialchars'] = array(
    'name' => t('Author name in proper format'),
    'description' => t('Author name without spaces and special characters.'),
  );
  $info['tokens']['user']['full_username_depend_of_profile_page'] = array(
    'name' => t('Full name depend of profile page'),
    'description' => t('The full username.'),
  );
  $info['tokens']['term']['name_lowercase_without_spaces_specialchars'] = array(
    'name' => t('Name - lowercase without spaces and special chars'),
    'description' => t('The term name (lowercase) without spaces and special characters.'),
  );
  $info['tokens']['term']['category_name_without_space_specialchars'] = array(
    'name' => t('Category name in proper format'),
    'description' => t('Category name without spaces and special characters.'),
  );
  $info['tokens']['term']['program_name_without_space_specialchars'] = array(
    'name' => t('Program name in proper format'),
    'description' => t('Program name without spaces and special characters.'),
  );
  $info['tokens']['term']['field_penton_native_advertising:/'] = array(
    'name' => t('Sponsored flag for program'),
    'description' => t('Determine if the program is sponsored or not.'),
  );
  $info['tokens']['dfp_tag']['site_id'] = array(
    'name' => t('DFP Site ID'),
    'description' => t('The site id root path in adUnitPath'),
  );
  $info['tokens']['forums']['category_name'] = array(
    'name' => t('Forum Category Name'),
    'description' => t('Forum category name parameter'),
  );
  $info['tokens']['forums']['topic_name'] = array(
    'name' => t('Forum Topic Name'),
    'description' => t('Forum topic name parameter'),
  );
  return $info;
}

/**
 * Implements hook_tokens().
 */
function penton_custom_dfp_tokens($type, $tokens, array $data = array(), array $options = array()) {
  $replacements = array();

  if ($type == 'node' && !empty($data['node'])) {
    $node = $data['node'];

    foreach ($tokens as $name => $original) {
      if (strpos($name, "field_penton_primary_category:parents") !== FALSE) {
        $tid = isset($node->field_penton_primary_category['und'][0]['tid']) ? $node->field_penton_primary_category['und'][0]['tid'] : "";
        if (!empty($tid)) {
          $cat_hier = array();
          $parents = taxonomy_get_parents_all($tid);

          if (is_array($parents) && (count($parents) > 0)) {
            foreach ($parents as $parent) {
              $cat_hier[] = $parent->name;
            }
          }

          $formatted_pterm_adunit = penton_custom_dfp_remove_unwanted_chars(array_reverse($cat_hier), "adunit");
          $replacements[$original] = $formatted_pterm_adunit;
        }
      }
      elseif (strpos($name, "field_penton_native_advertising:/") !== FALSE) {
        $replacements[$original] = !empty($node->field_penton_native_advertising['und'][0]['value']) ? 'sponsored/' : '';
      }
      elseif (strpos($name, "sterm_without_space_specialchars") !== FALSE) {
        if (isset($node->field_penton_secondary_category['und'])) {
          $formatted_sec_terms = array();
          foreach ($node->field_penton_secondary_category['und'] as $sec_term) {
            $term = taxonomy_term_load($sec_term['tid']);
            $formatted_sec_terms[] = penton_custom_dfp_remove_unwanted_chars($term->name, "targeting");
          }

          // There can be multiple secondary terms hence joining them with
          // a comma after formatting individual sterms.
          $replacements[$original] = implode(",", $formatted_sec_terms);
        }
      }
      elseif (strpos($name, "pterm_without_space_specialchars") !== FALSE) {
        $tid = isset($node->field_penton_primary_category['und'][0]['tid']) ? $node->field_penton_primary_category['und'][0]['tid'] : "";
        if (!empty($tid)) {
          $term = taxonomy_term_load($tid);
          $formatted_pterm = penton_custom_dfp_remove_unwanted_chars($term->name, "targeting");
          $replacements[$original] = $formatted_pterm;
        }
      }
      elseif (strpos($name, "program_without_space_specialchars") !== FALSE) {
        $tid = isset($node->field_penton_program['und'][0]['tid']) ? $node->field_penton_program['und'][0]['tid'] : "";
        if (!empty($tid)) {
          $term = taxonomy_term_load($tid);
          $formatted_program = penton_custom_dfp_remove_unwanted_chars($term->name, "targeting");
          $replacements[$original] = $formatted_program;
        }
      }
      elseif (strpos($name, "author_without_space_specialchars") !== FALSE) {
        if (isset($node->field_penton_author['und'])) {
          $formatted_authors = array();
          foreach ($node->field_penton_author['und'] as $author) {
            $user = user_load($author['target_id']);
            $formatted_authors[] = penton_custom_dfp_remove_unwanted_chars($user->name, "targeting");
          }

          // There can be multiple authors hence joining them with
          // a comma after formatting individual author.
          $replacements[$original] = implode(",", $formatted_authors);
        }
      }
    }
  }

  if (isset($tokens['site_id'])) {
    $replacements[$tokens['site_id']] = variable_get('dfp_tags_global_settings_site_id', '');
  }

  if ($type == 'term' && !empty($data['term'])) {
    $term = $data['term'];

    foreach ($tokens as $name => $original) {
      if (strpos($name, 'name_lowercase_without_spaces_specialchars') !== FALSE) {
        $term_array_names = array();
        $term_parents = taxonomy_get_parents_all($term->tid);

        if (is_array($term_parents) && count($term_parents) > 0) {
          foreach ($term_parents as $termp) {
            $term_array_names[] = $termp->name;
          }
        }

        $formatted_term = penton_custom_dfp_remove_unwanted_chars(array_reverse($term_array_names), "adunit");
        $replacements[$tokens['name_lowercase_without_spaces_specialchars']] = $formatted_term;
      }
      elseif (strpos($name, 'category_name_without_space_specialchars') !== FALSE) {
        if ($term->vocabulary_machine_name == 'categories') {
          $term_name = $term->name;

          $formatted_term = penton_custom_dfp_remove_unwanted_chars($term->name, 'targeting');
          $replacements[$tokens['category_name_without_space_specialchars']] = $formatted_term;
        }
        else {
          $replacements[$tokens['category_name_without_space_specialchars']] = '';
        }
      }
      elseif (strpos($name, 'program_name_without_space_specialchars') !== FALSE) {
        if ($term->vocabulary_machine_name == 'program') {
          $term_name = $term->name;

          $formatted_term = penton_custom_dfp_remove_unwanted_chars($term->name, 'targeting');
          $replacements[$tokens['program_name_without_space_specialchars']] = $formatted_term;
        }
        else {
          $replacements[$tokens['program_name_without_space_specialchars']] = '';
        }
      }
      elseif (strpos($name, "field_penton_native_advertising:/") !== FALSE) {
        if (isset($term->field_penton_native_advertising['und'])) {
          $replacements[$tokens['field_penton_native_advertising:/']] = !empty($term->field_penton_native_advertising['und'][0]['value']) ? 'sponsored/' : '';
        }
        else {
          $replacements[$tokens['field_penton_native_advertising:/']] = '';
        }
      }
    }
  }

  if ($type == 'user' && isset($tokens['full_username_depend_of_profile_page']) && strpos($_GET['q'], 'user') !== FALSE) {
    $uid = (int) str_replace(array('user', '/', 'edit'), '', $_GET['q']);

    if (empty($uid)) {
      global $user;
      $uid = $user->uid;
    }

    if (!empty($uid)) {
      $user_local = user_load($uid);

      $fullname = '';
      if ($user_local) {
        $fullname = (!empty($user_local->field_penton_profile[LANGUAGE_NONE][0]['name_line'])) ? $user_local->field_penton_profile[LANGUAGE_NONE][0]['name_line'] : $user_local->name;
      }

      $replacements[$tokens['full_username_depend_of_profile_page']] = penton_custom_dfp_remove_unwanted_chars($fullname, 'targeting');
    }
  }

  if (isset($tokens['category_name'])) {
    $replacements[$tokens['category_name']] = arg(1);
  }

  if (isset($tokens['topic_name'])) {
    $replacements[$tokens['topic_name']] = arg(2);
  }

  return $replacements;
}

/**
 * Implements hook_tokens_alter().
 */
function penton_custom_dfp_tokens_alter(array &$replacements, array $context) {
  if ($context['type'] == 'term' && !empty($context['tokens']['description']) && is_array($replacements['[term:description]'])) {
    $description = $replacements['[term:description]'][0];
    $replacements['[term:description]'] = $description;
  }
}

/**
 * Implements hook_js_alter().
 */
function penton_custom_dfp_js_alter(&$javascript) {
  foreach ($javascript as $key => $script) {
    if (!empty($script['data']) && is_string($script['data']) && strpos($script['data'], 'googletag.cmd') !== FALSE) {
      unset($javascript[$key]);
    }
  }
}

/**
 * Implements hook_form_alter().
 */
function penton_custom_dfp_form_alter(&$form, $form_state, $form_id) {
  if ($form_id == 'dfp_admin_settings') {
    $form['global_tag_settings']['dfp_tags_global_settings_site_id'] = array(
      '#type' => 'textfield',
      '#title' => t('Site ID'),
      '#default_value' => variable_get('dfp_tags_global_settings_site_id', ''),
      '#weight' => -1,
      '#required' => TRUE,
    );

    $form['global_tag_settings']['dfp_tags_global_settings_viewport'] = array(
      '#type' => 'checkbox',
      '#title' => t('Enable Lazy Loading of ads'),
      '#default_value' => variable_get('dfp_tags_global_settings_viewport', 0),
      '#description' => t('This option enables initialization of the advertising on the pages only when the user is seeing them'),
    );

    $form['global_tag_settings']['dfp_enable_sticky'] = array(
      '#type' => 'checkbox',
      '#title' => t('Enable sticky-mod for banner (top and interscroller).'),
      '#default_value' => variable_get('dfp_enable_sticky', 1),
    );

    $form['global_tag_settings']['dfp_lifetime_banner'] = array(
      '#type' => 'textfield',
      '#title' => t('Lifetime for banner'),
      '#default_value' => variable_get('dfp_lifetime_banner', 500),
      '#description' => t('Aditional lifetime for top-banner and interscroller by timer in milliseconds'),
      '#states' => array(
        'enabled' => array(
          'input[name="dfp_lifetime_do_byline"]' => array('checked' => FALSE),
          'input[name="dfp_enable_sticky"]' => array('checked' => TRUE),
        ),
      ),
    );

    $form['global_tag_settings']['dfp_lifetime_do_byline'] = array(
      '#type' => 'checkbox',
      '#title' => t('Remain sticky until it reaches the next sticky banner'),
      '#default_value' => variable_get('dfp_lifetime_do_byline', 0),
      '#states' => array(
        'enabled' => array(
          'input[name="dfp_enable_sticky"]' => array('checked' => TRUE),
        ),
      ),
    );

    $form['global_tag_settings']['dfp_enable_cb_refresh'] = array(
      '#type' => 'checkbox',
      '#title' => t('Enable user engaged left rail ad refresh (Chartbeat)'),
      '#default_value' => variable_get('dfp_enable_cb_refresh', 1),
    );

    $form['global_tag_settings']['dfp_cb_refresh_interval'] = array(
      '#type' => 'textfield',
      '#title' => t('User engaged interval for chartbeat left rail ad refresh'),
      '#default_value' => variable_get('dfp_cb_refresh_interval', 15),
      '#description' => t('If the user is active on the page for this time interval (in seconds), the left rail ad will be refreshed'),
      '#states' => array(
        'enabled' => array(
          'input[name="dfp_enable_cb_refresh"]' => array('checked' => TRUE),
        ),
      ),
    );

    $form['global_tag_settings']['dfp_enable_new_wc_ad'] = array(
      '#type' => 'checkbox',
      '#title' => t('Enable New Welcome AD (with background image-2018)'),
      '#default_value' => variable_get('dfp_enable_new_wc_ad', 1),
    );

    $form['#submit'][] = 'penton_custom_dfp_form_submit';
  }
  if ($form_id == 'ctools_export_ui_edit_item_form' && isset($form_state['item']->machinename)) {
    $item = $form_state['item'];

    $location = (isset($item->settings['location'])) ? $item->settings['location'] : '';

    $form['tag_display_options']['location'] = array(
      '#title' => t('Location'),
      '#type' => 'select',
      '#default_value' => $location,
      '#description' => t('Select the location on the site'),
      '#options' => penton_custom_dfp_get_location(),
      '#parents' => array('settings', 'location'),
      '#ajax' => array(
        'event' => 'change',
        'wrapper' => 'ajax-chain-select-wrapper',
        'callback' => 'penton_custom_dfp_position_ajax_callback',
        'method' => 'replace',
      ),
    );

    $form['tag_display_options']['position'] = array(
      '#prefix' => '<div id="ajax-chain-select-wrapper">',
      '#suffix' => '</div>',
      '#title' => t('Position'),
      '#type' => 'select',
      '#description' => 'Select the position on a page',
      '#options' => penton_custom_dfp_get_position_page_by_location($location),
      '#default_value' => (isset($item->settings['position'])) ? $item->settings['position'] : '',
      '#parents' => array('settings', 'position'),
      '#validated' => TRUE,
    );

    $form['#submit'][] = 'penton_custom_dfp_generate_slot';
  }
}

/**
 * Ajax callback for chained select.
 */
function penton_custom_dfp_position_ajax_callback($form, $form_state) {
  $location = (isset($form_state['values']['settings']['location'])) ? $form_state['values']['settings']['location'] : 'everywhere';
  $positions = penton_custom_dfp_get_position_page_by_location($location);
  $form['tag_display_options']['position']['#options'] = $positions;
  return render($form['tag_display_options']['position']);
}

/**
 * Generate prefix for slot name, callback for submit.
 */
function penton_custom_dfp_generate_slot($form, $form_state) {
  if (isset($form_state['values']['slot'])) {
    $values = $form_state['values'];

    if (isset($form_state['item']->location)) {
      $slot = str_replace("[{$form_state['item']->location}] ", '', $values['slot']);
    }
    else {
      $slot = $values['slot'];
    }

    $form_state['item']->slot = "[{$values['settings']['location']}] {$slot}";
  }
}

/**
 * This fucntion for get position list.
 *
 * @param int|string $location
 *   flag to get page position.
 *
 * @return array
 *   return array ready to work with form select field.
 */
function penton_custom_dfp_get_position_page_by_location($location = 'everywhere') {
  $positions = penton_custom_dfp_get_positions_page();

  if (isset($positions[$location])) {
    return array_merge($positions['everywhere'], $positions[$location]);
  }

  return $positions['everywhere'];
}

/**
 * List positions.
 */
function penton_custom_dfp_get_positions_page() {
  return array(
    'everywhere' => array(
      'top_banner' => t('Leaderboard'),
      'bottom_banner' => t('Bottom'),
      'hidden' => t('Before footer'),
    ),
    'homepage' => array(
      'native_leftrail_1' => t('Native Left 1'),
      'native_leftrail_2' => t('Native Left 2'),
      'native_top_stories' => t('Native Top Stories'),
      'native_category_1' => t('Native Category 1'),
      'native_category_2' => t('Native Category 2'),
      'native_category_3' => t('Native Category 3'),
      'native_umpu' => t('Native Umpu'),
      'left_rail_rect' => t('Left Rail'),
      'third_cat_jumbotron' => t('Rectangle & Jumbotron'),
      'right_col_jumbotron' => t('Right Rail Jumbotron'),
      'homepage_rectangle_only' => t('Rectangle Only'),
      'sponsored_logo' => t('Sponsored logo'),
      'sponsored_logo_weather' => t('Sponsored logo Weather'),
      'sponsored_logo_commodities' => t('Sponsored logo Commodities'),
      'commodwidgetlogo' => t('Commodities Logo'),
      'cash_grain_bids' => t('Cash Grain Bids logo'),
      'main_content_1' => t('Main Content 1'),
      'main_content_2' => t('Main Content 2'),
      'main_content_3' => t('Main Content 3'),
      'main_content_4' => t('Main Content 4'),
      'nativekey_ge1' => t('Native Main Content 1'),
      'nativekey_ge2' => t('Native Main Content 2'),
      'nativekey_ge3' => t('Native Main Content 3'),
      'nativekey_ge4' => t('Native Main Content 4'),
      'nativekey_ge5' => t('Native Main Content 5'),
      'nativekey_ge6' => t('Native Main Content 6'),
      'nativekey_ge7' => t('Native Main Content 7'),
      'nativekey_ge8' => t('Native Main Content 8'),
      'nativekey_main_ge1' => t('Native Market Content 1'),
      'nativekey_main_ge2' => t('Native Market Content 2'),
      'nativekey_main_ge3' => t('Native Market Content 3'),
      'nativekey_main_ge4' => t('Native Market Content 4'),
      'nativekey_main_ge5' => t('Native Market Content 5'),
      'nativekey_main_ge6' => t('Native Market Content 6'),
      'nativekey_main_ge7' => t('Native Market Content 7'),
    ),
    'article' => array(
      'native_leftrail_1' => t('Native Left 1'),
      'native_leftrail_2' => t('Native Left 2'),
      'native_related' => t('Native Related'),
      'native_inline' => t('Native Inline'),
      'left_rail_rect' => t('Left Rail'),
      'jumbotron' => t('Jumbotron'),
      'inarticle1' => t('In article 1'),
      'inarticlevid' => t('In article video(optional)'),
      'reveal' => t('Reveal ad'),
      'inarticle2' => t('In article 2'),
      'inarticle3' => t('In article 3'),
      'inarticle4' => t('In article 4'),
      'sponsored_logo' => t('Sponsored logo'),
      'sponsored_logo_weather' => t('Sponsored logo Weather'),
      'infinitescroll' => t('Infinitescroll'),
      'custom_content_channel_sponsored_resources' => t('Custom content channel sponsored resources'),
      'custom_content_channel_sponsored_header' => t('Custom content channel sponsored header'),
      'right_rail_rect' => t('Right Rail'),
    ),
    'search' => array(
      'native_leftrail_1' => t('Native Left 1'),
      'native_leftrail_2' => t('Native Left 2'),
      'native_article_2' => t('Native Article 2'),
      'left_rail_rect' => t('Left Rail'),
      'infinitescroll' => t('Infinitescroll'),
    ),
    'gallery' => array(
      'right_rail_rect' => t('Right Rail'),
      'interstitial' => t('Interstitial'),
      'sponsored_logo' => t('Sponsored logo'),
    ),
    'taxonomy' => array(
      'native_leftrail_1' => t('Native Left 1'),
      'native_leftrail_2' => t('Native Left 2'),
      'native_top_stories_1' => t('Category Top Stories 1'),
      'native_top_stories_2' => t('Category Top Stories 2'),
      'native_article_4' => t('Category Article 4'),
      'native_article_5' => t('Category Article 5'),
      'native_umpu' => t('Native Umpu'),
      'left_rail_rect' => t('Left Rail'),
      'right_rail_rect' => t('Right Rail'),
      'sponsored_logo' => t('Sponsored logo'),
      'infinitescroll' => t('Infinitescroll'),
      'custom_content_channel_sponsored_resources' => t('Custom content channel sponsored resources'),
      'custom_content_channel_sponsored_header' => t('Custom content channel sponsored header'),
    ),
    'user' => array(
      'left_rail_rect' => t('Left Rail'),
    ),
    'author' => array(
      'left_rail_rect' => t('Left Rail'),
      'jumbotron' => t('Jumbotron'),
      'infinitescroll' => t('Infinitescroll'),
    ),
    'page' => array(),
    'forums_landing' => array(
      'left_rail_rect' => t('Left Rail'),
      'jumbotron' => t('Jumbotron'),
      'sponsored_logo' => t('Sponsored logo'),
      'infinitescroll' => t('Infinitescroll'),
    ),
    'forums_category' => array(
      'left_rail_rect' => t('Left Rail'),
      'jumbotron' => t('Jumbotron'),
      'sponsored_logo' => t('Sponsored logo'),
      'infinitescroll' => t('Infinitescroll'),
    ),
    'forums_topic' => array(
      'left_rail_rect' => t('Left Rail'),
      'jumbotron' => t('Jumbotron'),
      'sponsored_logo' => t('Sponsored logo'),
      'infinitescroll' => t('Infinitescroll'),
    ),
    'weather' => array(
      'left_rail_rect' => t('Left Rail'),
      'jumbotron' => t('Jumbotron'),
      'sponsored_logo' => t('Sponsored logo'),
      'sponsored_logo_weather' => t('Sponsored logo Weather'),
    ),
    'commodities' => array(
      'left_rail_rect' => t('Left Rail'),
      'jumbotron' => t('Jumbotron'),
      'sponsored_logo' => t('Sponsored logo'),
      'infinitescroll' => t('Infinitescroll'),
      'cash_grain_bids' => t('Cash Grain Bids logo'),
    ),
  );
}

/**
 * This fucntion for get location list.
 *
 * @return array
 *   return array ready to work with form select field.
 */
function penton_custom_dfp_get_location() {
  return array(
    'everywhere' => t('- Everywhere -'),
    'homepage' => t('Homepage'),
    'article' => t('Article'),
    'taxonomy' => t('Taxonomy'),
    'search' => t('Search'),
    'gallery' => t('Gallery'),
    'author' => t('Author'),
    'user' => t('User'),
    'page' => t('Page'),
    'forums_landing' => t('Forum Landing'),
    'forums_category' => t('Forum Category'),
    'forums_topic' => t('Forum Topic'),
    'weather' => t('Weather'),
    'commodities' => t('Commodities'),
  );
}

/**
 * Callback form submit.
 */
function penton_custom_dfp_form_submit($form, &$form_state) {
  if (isset($form_state['values']['dfp_tags_global_settings_site_id'])) {
    variable_set('dfp_tags_global_settings_site_id', $form_state['values']['dfp_tags_global_settings_site_id']);
  }
}

/**
 * Function to return the brand adunit
 * @return string $brand_adunit
 */
function penton_custom_dfp_ag_brand_adunit($brand_code) {
  $brand_adunit = "";
  switch ($brand_code) {
    case "americanagriculturist":
        $brand_adunit = "americanag/";
        break;
    case "dakotafarmer":
        $brand_adunit = "dakota/";
        break;
    case "indianaprairiefarmer":
        $brand_adunit = "indiana/";
        break;
    case "kansasfarmer":
        $brand_adunit = "kansas/";
        break;
    case "michiganfarmer":
        $brand_adunit = "michigan/";
        break;
    case "missouriruralist":
        $brand_adunit = "missouri/";
        break;
    case "nebraskafarmer":
        $brand_adunit = "nebraska/";
        break;
    case "ohiofarmer":
        $brand_adunit = "ohio/";
        break;
    case "prairiefarmer":
        $brand_adunit = "prairie/";
        break;
    case "the_farmer":
        $brand_adunit = "thefarmer/";
        break;
    case "wallacesfarmer":
        $brand_adunit = "wallaces/";
        break;
    case "westernfarmerstockman":
        $brand_adunit = "westfarmerstock/";
        break;
    case "wisconsinagriculturist":
        $brand_adunit = "wisconsin/";
        break;
    case "farmfutures":
        $brand_adunit = "farmfutures/";
        break;
    case "deltafarmpress":
        $brand_adunit = "deltafarm/";
        break;
    case "westernfarmpress":
        $brand_adunit = "westernfarm/";
        break;
    case "southeastfarmpress":
        $brand_adunit = "southeastfarm/";
        break;
    case "southwestfarmpress":
        $brand_adunit = "southwestfarm/";
        break;
    case "beefproducer":
        $brand_adunit = "beefproducer/";
        break;
    case "cornandsoybeandigest":
        $brand_adunit = "csd/";
        break;
    case "farmindustrynews":
        $brand_adunit = "farmindustry/";
        break;
  }
  return $brand_adunit;
}

/* MODIFY ADMIN SECTION */

/**
 * Sort dfp tags by location and position.
 *
 * @param string $type
 *
 * @return array $dfp_tags
 *
 */
function penton_custom_dfp_parse_dfp_tags($type, $prog_name, $brand_adunit, $multipart, $series_node) {
  $dfp_tags = array();
  $locations = penton_custom_dfp_get_location();

  foreach ($locations as $name => $location) {
    if ($name == $type || $name == 'everywhere') {
      $dfp_tags[$name] = array();
    }
  }

  $tags = dfp_tag_load_all();

  $key = $type;
  // All taxonomy page ads have machine names like 'term_*', so handling that here
  if ($type == 'taxonomy') {
    $key = 'term';
  }

  // The adunit for one particular page will always be the same,
  // setting it here for once so that the dfp token replace is
  // not called for all ad tags on a page
  $global_adunit = variable_get('dfp_default_adunit', '');
  $child_adunit = "";
  $leaderboard_machinename = $key . '_728_1_a';
  if (strpos($type, "forums") !== FALSE) {
    $leaderboard_machinename = $key . '_leaderboard_728_1_a';
  }
  $common_targ_kv_pairs = array();

  if (isset($tags[$leaderboard_machinename])) {
    if ($type == 'article' && !empty($prog_name)) {
      $child_adunit = dfp_token_replace('[dfp_tag:network_id]/[dfp_tag:site_id]/program/' . $prog_name, NULL, array('sanitize' => TRUE, 'clear' => TRUE));
    } else {
      $child_adunit = dfp_token_replace('[dfp_tag:network_id]/' . $tags[$leaderboard_machinename]->adunit, NULL, array('sanitize' => TRUE, 'clear' => TRUE));
    }
    if (module_exists('penton_etf_data_api')) {
      if (stristr($child_adunit, 'etf_data_overview')) {
        $child_adunit = ltrim($child_adunit, '/');
        $child_adunit_array = explode('/', $child_adunit);
        $child_adunit = '/'.$child_adunit_array[0].'/'.$child_adunit_array[1].'/etfdata';
      }
      if (arg(0) == 'etf-data-overview' && !empty(arg(1))) {
        $child_adunit = ltrim($child_adunit, '/');
        $child_adunit_array = explode('/', $child_adunit);
        $child_adunit = '/'.$child_adunit_array[0].'/'.$child_adunit_array[1].'/etfdata/'.arg(1);
      }
    }

    // Adding branding logic to the adunits
    if(!empty($brand_adunit)) {
       $siteId = dfp_token_replace('[dfp_tag:network_id]/[dfp_tag:site_id]/', NULL, array('sanitize' => TRUE, 'clear' => TRUE));
      if (stripos($child_adunit, $siteId) !== FALSE) {
        $child_adunit_array = explode($siteId, $child_adunit);
        $child_adunit = $siteId . $brand_adunit . $child_adunit_array[1];
      }
    }

    // Changing adunit to support multipartseries page ads
    if($multipart == "landing" || $multipart == "seriespage") {
      $siteId = dfp_token_replace('[dfp_tag:network_id]/[dfp_tag:site_id]/', NULL, array('sanitize' => TRUE, 'clear' => TRUE));
      if (stripos($child_adunit, $siteId) !== FALSE) {
        $child_adunit_array = explode($siteId, $child_adunit);
        $child_adunit = $siteId . 'multipartseries/' . str_replace('article/', '', $child_adunit_array[1]);
      }

      if (module_exists('informa_research_article_type') && function_exists('_informa_research_article_type_get_series') && $multipart == "seriespage") {
        $multi_part_series = _informa_research_article_type_get_series($series_node);
        if ($multi_part_series && $multi_part_series::isResearchPage($series_node)) {
          $attr = $multi_part_series->getLandingPageParams();
          $targ_kv = $tags[$leaderboard_machinename]->settings['targeting'];
          if (!empty($attr)) {
            $series_keys = array('pos', 'combo', 'article_number', 'nid');
            foreach ($targ_kv as $k => $t) {
              if (!in_array($t['target'], $series_keys)) {
                $attr_key = 'data-' . $t['target'];
                if ($t['target'] == 'ptype') {
                  $attr_key = 'data-type';
                }
                if(array_key_exists($attr_key, $attr) && !empty($attr[$attr_key])) {
                  // Logic to handle sterm and author which can contain multiple values
                  if (strpos($attr[$attr_key], '|') && ($t['target'] == "sterm" || $t['target'] == "author")) {
                    $attr_vals = explode('|', $attr[$attr_key]);
                    $formatted_vals = array();
                    for ($i = 0; $i < count($attr_vals); $i++) {
                      $formatted_vals[] = penton_custom_dfp_remove_unwanted_chars($attr_vals[$i], "targeting");
                    }
                    // There can be multiple authors/sterms hence joining them with
                    // a comma after formatting individual author/sterm.
                    $targ_kv[$k]['value'] = implode(",", $formatted_vals);
                  } else {
                    $targ_kv[$k]['value'] = penton_custom_dfp_remove_unwanted_chars($attr[$attr_key], 'targeting');
                  }
                }
              }
            }

            $targ_kv[$k + 1]['target'] = "multiserieschildpage";
            $targ_kv[$k + 1]['value'] = "true";

            $tags[$leaderboard_machinename]->settings['targeting'] = $targ_kv;
          }
          $child_adunit .= $attr['data-terms'];
        }
      }
    }

    $common_targ_kv_pairs = penton_custom_dfp_format_targeting($tags[$leaderboard_machinename]->settings['targeting']);
  }

  foreach ($tags as $ad_machinename => $tag) {
    if (strpos($ad_machinename, $key) !== FALSE || strpos($ad_machinename, 'everywhere') !== FALSE) {
      if (!empty($child_adunit)) {
        $tag->adunit = $child_adunit;
      } else if (empty($tag->adunit) && !empty($global_adunit)) {
        $tag->adunit = dfp_token_replace('[dfp_tag:network_id]/' . $global_adunit, $tag, array('sanitize' => TRUE, 'clear' => TRUE));
      } else {
        $tag->adunit = dfp_token_replace('[dfp_tag:network_id]/' . $tag->adunit, $tag, array('sanitize' => TRUE, 'clear' => TRUE));
      }

      if (isset($tag->settings['location'], $tag->settings['position']) && $locations[$tag->settings['location']]) {
        $get_tag = penton_custom_dfp_filter_tokens($tag, $common_targ_kv_pairs);
        $dfp_tags[$tag->settings['location']][$tag->settings['position']][] = $get_tag;
        if ($tag->settings['position'] == "top_banner" && isset($get_tag->adunit)) {
          $GLOBALS['pg_adunit'] = $get_tag->adunit;
          $GLOBALS['pg_targeting'] = json_encode($get_tag->targeting);
        }
      }
    }
  }

  return $dfp_tags;
}

/**
 * Filters replace tokens to values.
 *
 * @param Object $tag
 *   dfp tag
 *
 * @param Array $common_targ_kv_pairs
 *   Array containing all the targeting key values
 *
 * @return Object
 *   dfp tag
 */
function penton_custom_dfp_filter_tokens($tag, $common_targ_kv_pairs = array()) {
  $reg = array(
    'target' => 'reg',
    'value' => 'anonymous',
  );

  penton_custom_dfp_transform_array($tag->size);
  $tag->size = penton_custom_dfp_format_size($tag->size);
  $tag->breakpoints = penton_custom_dfp_format_breakpoints($tag->settings['breakpoints']);

  $non_common_keys = array('pos', 'combo', 'article_number');
  foreach ($tag->settings['targeting'] as $key=>$val) {
    if (in_array($val['target'], $non_common_keys)) {
      $kv_arr = array(
        'target' => check_plain($val['target']),
        'value' => check_plain($val['value']),
      );
      $tag->targeting[] = $kv_arr;
    }
  }

  foreach ($common_targ_kv_pairs as $kv_pair) {
    if (!(in_array($kv_pair['target'], $non_common_keys))) {
      $tag->targeting[] = $kv_pair;
    }
  }

  if (user_is_logged_in()) {
    $reg['value'] = 'registered';
  }

  $query_targetings = array('testAd', 'route', 'contentsource');
  _penton_custom_dfp_get_query_targetings($query_targetings, $tag);

  if (module_exists('penton_eloqua_api')) {
    foreach (penton_eloqua_api_get_name_params() as $eloqua_param) {
      $get_case_low = array_change_key_case($_GET);
      if (isset($get_case_low[$eloqua_param])) {
        $tag->targeting[] = array(
          'target' => $eloqua_param,
          'value' => $get_case_low[$eloqua_param],
        );
      }
    }
  }

  $tag->targeting[] = $reg;

  if (isset($tag->slug)) {
    $tag->slug = dfp_format_slug($tag->slug);
  }

  return $tag;
}

/**
 * Transforms array into string.
 */
function penton_custom_dfp_transform_array(&$array_sizes) {
  if (is_array($array_sizes)) {
    if (is_array($array_sizes[0])) {
      foreach ($array_sizes as &$array_size) {
        $array_size = implode('x', $array_size);
      }
      $array_sizes = implode(',', $array_sizes);
    }
    else {
      $array_sizes = implode('x', $array_sizes);
    }
  }
}

/**
 * Adds targetings from URL query.
 */
function _penton_custom_dfp_get_query_targetings($names, &$tag) {
  foreach ($names as $name) {
    $value = filter_input(INPUT_GET, $name);
    if (!empty($value)) {
      $value = explode(',', $value);
      $value = array_shift($value);
      $tag->targeting[] = array(
        'target' => $name,
        'value' => penton_custom_dfp_remove_unwanted_chars($value, 'targeting'),
      );
    }
  }
}

/**
 * Format size breakpoints for json.
 */
function penton_custom_dfp_format_breakpoints($breakpoints) {
  foreach ($breakpoints as $key => $target) {
    $breakpoints[$key] = array(
      'ad_sizes' => penton_custom_dfp_format_size($target['ad_sizes']),
      'browser_size' => penton_custom_dfp_format_size($target['browser_size']),
    );
  }

  return $breakpoints;
}

/**
 * Format value targeting for json.
 */
function penton_custom_dfp_format_targeting($targeting, $tag = '') {
  $result_targeting = array();

  foreach ($targeting as $key => &$target) {
    $target['target'] = check_plain($target['target']);
    $target['value'] = dfp_token_replace(check_plain($target['value']), $tag, array('sanitize' => TRUE, 'clear' => TRUE));

    // The target value could be blank if tokens are used. If so, removed it.
    if (empty($target['value'])) {
      unset($targeting[$key]);
      continue;
    }

    /*
     * If target key is 'content' check the value, if it has value then make
     * content='program' else unset it
     */
    if ($target['target'] == 'content') {
      if (!empty($target['value'])) {
        $target['value'] = 'program';
      }
      else {
        unset($targeting[$key]);
      }
    }

    // Format the ptype value for multipartseries page ads
    if ($target['target'] == 'ptype' && $target['value'] == "Multi-Part Series") {
      $target['value'] = "multipartseries";
    }

    // Convert the values into an array and trim the whitespace from each value.
    $values = explode(',', $target['value']);
    $values = array_map('trim', $values);

    if (count($values) == 1) {
      $target['value'] = $values[0];
    }
    elseif (count($values) > 1) {
      $target['value'] = implode(',', $values);
    }

    $result_targeting[] = array(
      'target' => $target['target'],
      'value' => $target['value'],
    );
  }

  return $result_targeting;
}

/**
 * Format size for json.
 */
function penton_custom_dfp_format_size($size) {
  $formatted_sizes = array();
  $sizes = explode(',', check_plain($size));
  foreach ($sizes as $size) {
    if ($size != 'x') {
      if (strtolower($size) == 'fluid') {
        $formatted_sizes[] = 'fluid';
      } else {
        $size_array = explode('x', trim($size));
        $formatted_sizes[] = array_map('intval', $size_array);
      }
    }
    else {
      $formatted_sizes[] = array();
    }
  }
  return (count($formatted_sizes) == 1) ? $formatted_sizes[0] : $formatted_sizes;
}

/**
 * Get info user id author.
 *
 * @return: bool;
 */
function penton_custom_dfp_is_author() {
  global $user;

  if (preg_match('/(\d+)/i', $_GET['q'], $found)) {
    $uid = array_shift($found);
    $user_local = user_load($uid);
    $use_user = ($user_local) ? $user_local : $user;
  }

  if (isset($use_user->roles) && in_array('author', $use_user->roles)) {
    return TRUE;
  }

  return FALSE;
}

/**
 * Implements hook_init().
 */
function penton_custom_dfp_init() {
  $path = $_GET['q'];

  if (is_ajax() || path_is_admin(current_path())) {
    return FALSE;
  }

  if (strpos($path, 'taxonomy') !== FALSE) {
    penton_custom_dfp_initialization('taxonomy');
  }
  elseif (strpos($path, 'user') !== FALSE) {
    if (penton_custom_dfp_is_author()) {
      penton_custom_dfp_initialization('author');
    }
    else {
      penton_custom_dfp_initialization('user');
    }
  }
  elseif (strpos($path, 'search') !== FALSE) {
    penton_custom_dfp_initialization('search');
  }
  elseif (strpos($path, 'forums') !== FALSE) {
    if (substr_count($path, '/') === 1) {
      penton_custom_dfp_initialization('forums_category');
    }
    elseif (substr_count($path, '/') === 2) {
      penton_custom_dfp_initialization('forums_topic');
    }
    else {
      penton_custom_dfp_initialization('forums_landing');
    }
  }
  elseif (strpos($path, 'commodities') !== FALSE) {
    penton_custom_dfp_initialization('commodities');
  }
  elseif (strpos($path, 'weather') !== FALSE) {
    penton_custom_dfp_initialization('weather');
  }
  elseif (strpos($path, 'etf-data-overview') !== FALSE) {
    penton_custom_dfp_initialization('taxonomy');
  }
  else {
    penton_custom_dfp_find_nodes();
  }
}

/**
 * Init dfp on node page.
 */
function penton_custom_dfp_find_nodes() {
  $node = menu_get_object();

  if (empty($node)) {
    penton_custom_dfp_initialization('article');
    return;
  }

  $wrapper = entity_metadata_wrapper('node', $node);

  switch ($node->type) {
    case 'display_admin':
      penton_custom_dfp_initialization('homepage');
      break;

    case 'page':
      penton_custom_dfp_initialization('page');
      break;

    case 'article':
      $type = $wrapper->field_penton_article_type->value();
      $type = (is_array($type) && count($type)) ? array_shift($type) : array();

      if (!empty($type) && $type->name == 'Gallery' && strpos($_GET['q'], 'gallery') !== FALSE) {
        penton_custom_dfp_initialization('gallery');
      }
      else {
        $multipart = "none";
        if (!empty($type) && $type->name == 'Multi-Part Series') {
          $multipart = "landing";
        }
        if(isset($node->field_penton_program[LANGUAGE_NONE][0]['tid'])) {
          // Check if article belongs to Custom Content Channel program
          $program = taxonomy_term_load($node->field_penton_program[LANGUAGE_NONE][0]['tid']);
          $program_type = $program->field_penton_program_type[LANGUAGE_NONE][0]['value'];
          if ($program_type == 'custom content channel') {
            $prog_name = penton_custom_dfp_remove_unwanted_chars($program->name, 'targeting');
            penton_custom_dfp_initialization('article', $prog_name, $multipart);
          } else {
            penton_custom_dfp_initialization('article', '', $multipart);
          }
        } else {
          penton_custom_dfp_initialization('article', '', $multipart);
        }
      }
      break;

    case 'research_page':
      penton_custom_dfp_initialization('article', '', 'seriespage', $node);
      break;

    default:
      penton_custom_dfp_initialization('article');
  }
}

/**
 * Initialization dfp js library.
 */
function penton_custom_dfp_initialization($type, $prog_name = "", $multipart = "none", $series_node = NULL) {
  $is_blocked_ip = FALSE;
  $user_ip = ip_address();
  $brand_adunit = "";

  if (!empty($_GET['test-blocked-ip'])) {
    $is_blocked_ip = TRUE;
  } else if (module_exists('penton_bot_ip_filter_customdbtbl') && function_exists('penton_bot_ip_filter_customdbtbl_chk')) {
    $is_blocked_ip = penton_bot_ip_filter_customdbtbl_chk();
  } else if (module_exists('penton_bot_ip_filter_api') && function_exists('penton_bot_ip_filter_api_chk')) {
    $is_blocked_ip = penton_bot_ip_filter_api_chk();
  }

  if($is_blocked_ip) {
    $GLOBALS['pg_blockedip'] = "blocked";
  } else {
    $GLOBALS['pg_blockedip'] = "notblocked";
  }

  if (!$is_blocked_ip) {
    $adunit = variable_get('dfp_network_id', '') . '/' .  variable_get('dfp_tags_global_settings_site_id', '');
    drupal_add_js(array('adunit' => $adunit), 'setting');

    $is_new_welcome_ad = variable_get('dfp_enable_new_wc_ad', 1);
    drupal_add_js(array('is_new_welcome_ad' => $is_new_welcome_ad), 'setting');

    $default_adunit = variable_get('dfp_network_id', '') . '/' .  variable_get('dfp_tags_global_settings_site_id', '');

    // Check if brand code exists, get the brand adunit
    // and add it to the default adunit
    if (module_exists('ag_supersite_branding') && function_exists('_ag_supersite_branding_get_current_brand')) {
      $brand_code = _ag_supersite_branding_get_brand_name(_ag_supersite_branding_get_current_brand());
      if (!empty($brand_code) && is_string($brand_code)) {
        $brand_adunit = penton_custom_dfp_ag_brand_adunit($brand_code);
        if(!empty($brand_adunit)) {
          $default_adunit .= '/' . rtrim($brand_adunit, '/');
        }
      }
    }

    $settings = array(
      'dfp_tags' => penton_custom_dfp_parse_dfp_tags($type, $prog_name, $brand_adunit, $multipart, $series_node),
      'current_type' => $type,
      'default_adunit' => $default_adunit,
      'brand_adunit' => $brand_adunit,
      'async_rendering' => variable_get('dfp_async_rendering', 1),
      'single_request' => variable_get('dfp_single_request', 0),
      'collapse_empty_divs' => variable_get('dfp_collapse_empty_divs', 1),
      'viewport' => variable_get('dfp_tags_global_settings_viewport', 0),
      'lifetime_banner' => variable_get('dfp_lifetime_banner', 500),
      'do_byline' => variable_get('dfp_lifetime_do_byline', 0),
      'enable_sticky' => variable_get('dfp_enable_sticky', 1),
      'enable_cb_refresh' => variable_get('dfp_enable_cb_refresh', 1),
      'cb_refresh_interval' => variable_get('dfp_cb_refresh_interval', 15),
      'is_blocked_ip' => $is_blocked_ip,
      'uip' => $user_ip,
    );

    drupal_add_js(($GLOBALS['is_https'] ? "https://" : "http://") . DFP_GOOGLE_TAG_SERVICES_URL);

    drupal_add_js(drupal_get_path('module', 'penton_custom_dfp') . '/js/data-render.js');
    drupal_add_js(drupal_get_path('module', 'penton_custom_dfp') . '/js/viewport.js');
    drupal_add_js(drupal_get_path('module', 'penton_custom_dfp') . '/js/dfp.dom.js');
    drupal_add_js(drupal_get_path('module', 'penton_custom_dfp') . '/js/dfp.iframe.js');

    $json = json_encode($settings);
    drupal_add_js("Drupal.settings.penton_custom_dfp = {$json};", 'inline');
    if (module_exists('penton_bot_ip_filter_api')) {
      $url = $GLOBALS['is_https'] ? "https://" : "http://";
      $url .= $_SERVER['HTTP_HOST'] . request_uri();
      drupal_add_js('/ajax/pbifa?url=' . rawurlencode($url),
        ['preprocess' => FALSE]);
    }
    drupal_add_js(drupal_get_path('module', 'penton_custom_dfp') . '/js/dfp.sticky.js');
  } else {
    drupal_add_js(array('uip' => $user_ip, 'is_blocked_ip' => $is_blocked_ip), 'setting');
  }
  drupal_add_js(array('is_new_article_view' => variable_get("2018_article_view", FALSE)), 'setting');
}

function penton_custom_dfp_check_bot_filter_js() {
  if (module_exists('penton_bot_ip_filter_api') && function_exists('penton_bot_ip_filter_api_chk')) {
    watchdog('penton_bot_ip_filter_api', '<pre>'.print_r($_SERVER,1).'</pre>', NULL, WATCHDOG_DEBUG);
    $is_blocked_ip = penton_bot_ip_filter_api_chk(TRUE);
    $is_blocked_ip_string = $is_blocked_ip ? 'true' : 'false';
    drupal_add_http_header('Content-Type', 'application/x-javascript; utf-8');
    drupal_add_http_header('Cache-Control', 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0');
    print "Drupal.settings.penton_custom_dfp.is_blocked_ip = $is_blocked_ip_string;";

    if ($is_blocked_ip) {
      print "
        googletag.destroySlots();
        var curr_ptype = Drupal.settings.penton_custom_dfp.current_type;
        delete Drupal.settings.penton_custom_dfp;
        Drupal.settings.penton_custom_dfp = [];
        Drupal.settings.penton_custom_dfp.current_type = curr_ptype;
        Drupal.settings.penton_custom_dfp.dfp_tags = [];
        Drupal.settings.penton_custom_dfp.dfp_tags[curr_ptype] = [];
        Drupal.settings.penton_custom_dfp.dfp_tags[curr_ptype].hidden = undefined;
        Drupal.settings.is_blocked_ip = true;
        var bDiv = document.getElementById('body-wrapper');
        window.scrollTo(0, 0);
        if(bDiv.style.removeProperty) {
          bDiv.style.removeProperty('opacity');
        } else {
          bDiv.style.removeAttribute('opacity');
        }
      ";
    }
  }
}

/**
 * Implements hook_menu().
 */
function penton_custom_dfp_menu() {
  $items = array();

  $items['admin/config/system/dfp_file_uploads'] = array(
    'title' => 'DFP File Uploads',
    'description' => 'Upload DFP files for iframe busting and bot IP filtering.',
    'access arguments' => array('administer site configuration'),
    'access callback' => 'user_access',
    'type' => MENU_NORMAL_ITEM,
  );

  $items['admin/config/system/dfp_file_uploads/penton_custom_dfp'] = array(
    'title' => 'Penton Custom DFP File Upload',
    'description' => 'Upload custom DFP files.',
    'page callback' => 'drupal_get_form',
    'page arguments' => array('penton_custom_dfp_list_form'),
    'access callback' => 'penton_custom_dfp_user_has_role',
    'type' => MENU_NORMAL_ITEM,
  );

  $items['admin/config/system/dfp_file_uploads/penton_custom_dfp/add'] = array(
    'title' => 'Add new custom DFP file',
    'page callback' => 'drupal_get_form',
    'page arguments' => array('penton_custom_dfp_edit_form'),
    'access callback' => 'penton_custom_dfp_user_has_role',
    'type' => MENU_LOCAL_ACTION,
    'modal' => TRUE,
    'options' => array('modal' => TRUE),
  );

  $items['admin/config/system/dfp_file_uploads/penton_custom_dfp/edit/%'] = array(
    'title' => 'Penton Custom DFP File Upload',
    'description' => 'Upload custom DFP files.',
    'page callback' => 'drupal_get_form',
    'page arguments' => array('penton_custom_dfp_edit_form', 6),
    'access callback' => 'penton_custom_dfp_user_has_role',
    'modal' => TRUE,
  );

  $items['admin/config/system/dfp_file_uploads/penton_custom_dfp/delete/%'] = array(
    'title' => 'Penton Custom DFP File Upload',
    'description' => 'Upload custom DFP files.',
    'page callback' => 'drupal_get_form',
    'page arguments' => array('penton_custom_dfp_delete_form', 6),
    'access callback' => 'penton_custom_dfp_user_has_role',
    'modal' => TRUE,
  );

  $penton_custom_dfp = variable_get('penton_custom_dfp_file_upload', array());

  if (!empty($penton_custom_dfp)) {
    foreach ($penton_custom_dfp as $entry) {
      $items[ltrim($entry['file_path'].$entry['file_name'], '/')] = array(
        'page callback' => 'penton_custom_dfp_load_file_contents',
        'page arguments' => array($entry['file_uri']),
        'access callback' => TRUE,
        'type' => MENU_NORMAL_ITEM,
      );
    }
  }

  $items['ajax/pbifa'] = array(
    'page callback' => 'penton_custom_dfp_check_bot_filter_js',
    'access arguments' => array('access content'),
    'type' => MENU_CALLBACK,
  );

  return $items;
}

/**
 * Check user's role for access
 */
function penton_custom_dfp_user_has_role() {
  global $user;

  // Allow user 1
  if ($user->uid == '1') {
    return TRUE;
  }

  $roles = array('administrator', 'associate administrator');
  foreach ($roles as $role) {
    if (in_array($role, $user->roles)) {
      return TRUE;
    }
  }
  return FALSE;
}

/**
 * Display a custom DFP file
 */
function penton_custom_dfp_load_file_contents($uri) {
  $file = file_create_url($uri);
  echo file_get_contents($file);
}

/**
 * Penton Custom DFP File list
 */
function penton_custom_dfp_list_form() {
  $form = array();

  $penton_custom_dfp = variable_get('penton_custom_dfp_file_upload', array());

  $header = array();
  $header['url'] = array('data' => t('Aliased URL'));
  $header['name'] = array('data' => t('File Name'));
  $header['path'] = array('data' => t('File Path'));
  $header['created'] = array('data' => t('File Created'));
  $header['modified'] = array('data' => t('File modified'));
  $header['actions'] = array('data' => t('Actions'));

  $rows = array();
  if (!empty($penton_custom_dfp)) {
    foreach ($penton_custom_dfp as $id => $entry) {
      $file_url = $entry['file_path'].$entry['file_name'];

      $rows[$id]['url'] = array(
        'data' => array(
          '#type' => 'link',
          '#title' => $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].$file_url,
          '#href' => $file_url,
          '#attributes' => array('target' => '_blank'),
        ),
      );
      $rows[$id]['name'] = $entry['file_name'] ? $entry['file_name'] : '-';
      $rows[$id]['path'] = $entry['file_path'] ? $entry['file_path'] : '-';
      $rows[$id]['created'] = format_date($entry['file_created'], 'short');
      $rows[$id]['modified'] = format_date($entry['file_modified'], 'short');

      $actions = array();
      $actions['edit'] = xmlsitemap_get_operation_link('admin/config/system/dfp_file_uploads/penton_custom_dfp/edit/' . $id, array('title' => t('Edit'), 'modal' => TRUE));
      $actions['delete'] = xmlsitemap_get_operation_link('admin/config/system/dfp_file_uploads/penton_custom_dfp/delete/' . $id, array('title' => t('Delete'), 'modal' => TRUE));
      $rows[$id]['actions'] = array(
        'data' => array(
          '#theme' => 'links',
          '#links' => $actions,
          '#attributes' => array('class' => array('links', 'inline')),
        ),
      );
    }
  }

  $form['files'] = array(
    '#theme' => 'table',
    '#header' => $header,
    '#rows' => $rows,
    '#empty' => t('No files added.') . ' ' . l(t('Add a new file'), 'admin/config/system/dfp_file_uploads/penton_custom_dfp/add'),
  );

  return $form;
}

/**
 * DFP File Add/Edit form
 */
function penton_custom_dfp_edit_form($form, &$form_state, $fileid = null) {
  $form = array();

  if (!isset($fileid)) {
    $fileid = uniqid();
    $form['#operation'] = 'add';
  } else {
    $form['#operation'] = 'edit';
  }

  $form['file_id'] = array(
    '#type' => 'value',
    '#value' => $fileid,
  );

  $penton_custom_dfp = variable_get('penton_custom_dfp_file_upload', array());
  $file_name = '';
  $file_path = '';
  if (!empty($penton_custom_dfp) && !empty($penton_custom_dfp[$fileid])) {
    $file_name = $penton_custom_dfp[$fileid]['file_name'];
    $file_path = $penton_custom_dfp[$fileid]['file_path'];
  }

  $form['file_upload'] = array(
    '#type' => 'file',
    '#title' => !empty($penton_custom_dfp[$fileid]) ? t('Choose a new file (optional)') : t('Choose a file'),
    '#description' => t('Only .html or .htm files allowed.'),
  );

  if (!empty($penton_custom_dfp[$fileid])) {
    $form['file_name'] = array(
      '#type' => 'textfield',
      '#title' => t('Custom file name'),
      '#default_value' => $file_name,
      '#description' => t('Change the file name (optional)'),
    );
  }

  $form['file_path'] = array(
    '#type' => 'textfield',
    '#title' => t('Custom file path'),
    '#default_value' => $file_path,
    '#description' => t('Enter the desired path to show the uploaded file. To set the path to the root of the site, enter \'/\''),
  );

  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => !empty($penton_custom_dfp[$fileid]) ? t('Update file') : t('Upload file'),
  );
  $form['actions']['cancel'] = array(
    '#type' => 'link',
    '#href' => isset($_GET['destination']) ? $_GET['destination'] : 'admin/config/system/dfp_file_uploads/penton_custom_dfp',
    '#title' => t('Cancel'),
  );

  return $form;
}

/**
 * Validate DFP File Uploads
 */
function penton_custom_dfp_edit_form_validate($form, &$form_state) {
  $file = file_save_upload('file_upload', array(
    // Validate extensions.
    'file_validate_extensions' => array('html htm'),
  ));

  if (empty($form['file_path']['#value'])) {
    $form_state['values']['file_path'] = '/';
  } else if (substr($form['file_path']['#value'], -1) != '/') {
    $form_state['values']['file_path'] = $form_state['values']['file_path'] . '/';
  }

  if ($form['#operation'] == 'add') {
    $file_name = $file->filename;
  } else {
    $file_name = $form_state['values']['file_name'];
  }
  $file_path = $form_state['values']['file_path'];

  if (_check_custom_file_duplicates($file_name, $file_path, $form_state['values']['file_id']) === false) {
    if ($file) file_delete($file);
    form_set_error('', t('Please choose a different custom file path, that name/path combination already exists.'));
    return;
  }

  // Check to make sure iframebuster subdir exists
  $iframebuster_dir = 'public://iframebuster';
  if (!file_prepare_directory($iframebuster_dir, FILE_CREATE_DIRECTORY)) {
    if ($file) file_delete($file);
    form_set_error('', t('Error creating iframebuster directory. Please contact admin.'));
  }

  // If the file passed validation:
  if ($file) {
    // Move the file into the Drupal file system and replace if exists
    if ($file = file_move($file, 'public://iframebuster', 'FILE_EXISTS_REPLACE')) {
      // Save the file for use in the submit handler.
      $form_state['storage']['file'] = $file;
    } else {
      file_delete($file);
      form_set_error('file_upload', t("Failed to write the uploaded file to the site's file folder."));
    }
  } else if ($form['#operation'] == 'add') {
    form_set_error('file_upload', t('No file was uploaded.'));
  }
}

/**
 * Manage DFP File Uploads
 */
function penton_custom_dfp_edit_form_submit($form, &$form_state) {
  $penton_custom_dfp = variable_get('penton_custom_dfp_file_upload', array());
  $id = $form_state['values']['file_id'];

  if (!empty($form_state['storage']['file'])) {
    // Get file from $form_state and make it permanent
    $file = $form_state['storage']['file'];
    unset($form_state['storage']['file']);
    $file->status = FILE_STATUS_PERMANENT;
    file_save($file);
    $file_name = $file->filename;

    if ($form['#operation'] == 'edit') {
      $file_name = $form_state['values']['file_name'];
      $penton_custom_dfp = variable_get('penton_custom_dfp_file_upload', array());
      $old_file = file_load($penton_custom_dfp[$id]['file_fid']);

      if ($old_file) {
        // Delete existing file so that the new file can take its place
        file_delete($old_file);
      }
    }

  } else {
    $file = file_load($penton_custom_dfp[$id]['file_fid']);
    $file_name = $form_state['values']['file_name'];
  }

  $form_state['redirect'] = 'admin/config/system/dfp_file_uploads/penton_custom_dfp';

  drupal_set_message(t('The file has been saved: @filename.', array('@filename' => $file_name)));

  // Tell Drupal to rebuild menu cache
  variable_set('menu_rebuild_needed', TRUE);

  // Add file data to variable
  $created = !empty($penton_custom_dfp[$id]) ? $penton_custom_dfp[$id]['file_created'] : time();
  $modified = !empty($penton_custom_dfp[$id]) ? time() : $created;
  $penton_custom_dfp[$id] = array(
    'file_fid' => $file->fid,
    'file_name' => $file_name,
    'file_uri' => $file->uri,
    'file_path' => $form_state['values']['file_path'],
    'file_created' => $created,
    'file_modified' => $modified,
  );
  variable_set('penton_custom_dfp_file_upload', $penton_custom_dfp);
}

/**
 * DFP File Delete form
 */
function penton_custom_dfp_delete_form($form, &$form_state, $fileid = null) {
  $form['file_id'] = array(
    '#type' => 'value',
    '#value' => $fileid,
  );

  $penton_custom_dfp = variable_get('penton_custom_dfp_file_upload', array());
  if (!empty($penton_custom_dfp) && !empty($penton_custom_dfp[$fileid])) {
    return confirm_form(
      $form,
      t('Are you sure you want to delete this file? @filename', array('@filename' => $penton_custom_dfp[$fileid]['file_name'])),
      'admin/config/system/dfp_file_uploads/penton_custom_dfp',
      '',
      t('Delete'),
      t('Cancel')
    );
  } else {
    form_set_error('file', t('Invalid file ID.'));
    $form['actions']['cancel'] = array(
      '#type' => 'link',
      '#href' => isset($_GET['destination']) ? $_GET['destination'] : 'admin/config/system/dfp_file_uploads/penton_custom_dfp',
      '#title' => t('Cancel'),
    );

    return $form;
  }
}

/**
 * Delete DFP File
 */
function penton_custom_dfp_delete_form_submit($form, &$form_state) {
  $penton_custom_dfp = variable_get('penton_custom_dfp_file_upload', array());
  $file = file_load($penton_custom_dfp[$form_state['values']['file_id']]['file_fid']);

  if ($file) {
    file_delete($file);
    unset($penton_custom_dfp[$form_state['values']['file_id']]);
    variable_set('penton_custom_dfp_file_upload', $penton_custom_dfp);
    drupal_set_message(t('The file has been deleted.'));
    $form_state['redirect'] = 'admin/config/system/dfp_file_uploads/penton_custom_dfp';
  } else {
    form_set_error('', t('There was a problem, please try again.'));
  }

  // Tell Drupal to rebuild menu cache
  variable_set('menu_rebuild_needed', TRUE);
}

/**
 * Check new file name/path values against existing
 */
function _check_custom_file_duplicates($file_name, $file_path, $file_id) {
  $penton_custom_dfp = variable_get('penton_custom_dfp_file_upload', array());

  foreach ($penton_custom_dfp as $id => $entry) {
    if ($entry['file_name'] == $file_name && $entry['file_path'] == $file_path && $id != $file_id) {
      return false;
    }
  }

  return true;
}

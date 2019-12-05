# Home Page
- [x] top_banner (server)
- [x] native_leftrail_1 (server) (global rail)
- [x] left_rail_rect (server) (global rail)
- [x] native_leftrail_2 (server) (global rail)
- [x] native_top_stories (server)
- [x] right_col_jumbotron (server)
- [ ] native_umpu (server)
- [x] native_category_1 (server)
- [x] native_category_2 (server)
- [x] third_cat_jumbotron (server)
- [x] native_category_3 (server)
- [x] bottom_banner (server)
- [x] hidden (server)

# Website Section Page
- [x] top_banner (server)
- [x] sponsored_logo (server)
- [x] native_leftrail_1 (server) (global rail)
- [x] left_rail_rect (server) (global rail)
- [x] native_leftrail_2 (server) (global rail)
- [x] native_top_stories_1 (server)
- [x] right_col_jumbotron (server)
  - Not implemented on new sites.
  - The old site has the dfp-position div, but does not define the ad in the JSON config.
- [x] right_rail_rect (server)
- [ ] native_umpu (server)
- [x] native_article_4 (server)
- [x] infinitescroll (client)
- [x] bottom_banner (server)
  - Not implementing
  - This position doesn't make sense with infinite scroll
- [x] hidden (server)

# Content Page
- [x] top_banner (server)
- [x] native_leftrail_1 (server) (global rail)
- [x] left_rail_rect (server) (global rail)
- [x] native_leftrail_2 (server) (global rail)
- [x] inarticle1 (server)
- [x] native_inline (client)
- [x] inarticlevid (client)
  - Loads a Teads ad with it's own injection rules (all `<p>` elements of `[itemprop=articleBody]` and inserts after 3)
- [x] reveal (client)
  - Have not been able to find an example of this.
- [x] inarticle2 (client)
- [x] inarticle3 (client)
- [x] inarticle4 (client)
- [x] native_related (server)
  - Have not been able to find an example of this.
- [x] infinitescroll (client)
- [x] bottom_banner (server)
  - Not implementing
  - This position doesn't make sense with infinite scroll
- [x] hidden (server)

# Hidden Ads
- [x] {location}_pagewrap
  - pos: wrap
- [x] {location}_canopy
  - pos: adhesion
  - No test available
  - Is this used?
- [x] {location}_footnote_floor
  - pos: footnote
- [x] {location}_oop
  - pos: oop_a
  - No test available
  - Is this used?

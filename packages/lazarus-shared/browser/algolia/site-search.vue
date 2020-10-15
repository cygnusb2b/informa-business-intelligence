<!-- eslint-disable vue/no-v-html-->
<template>
  <ais-instant-search
    :index-name="tenantKey"
    :search-client="searchClient"
    :routing="routing"
    :search-function="searchFunction"
  >
    <div class="row algolia-search">
      <div class="col-12">
        <ais-search-box />
        <br>
        <br>
      </div>
      <div class="col-lg-3 col-md-4 ais-mobile-hide">
        <h2 class="ais-header">
          Sort By
        </h2>
        <ais-sort-by
          :items="[
            { value: tenantKey, label: 'Relevance' },
            { value: `${tenantKey}_published`, label: 'Published Date' },
          ]"
          :transform-items="sortedClicked"
        />
        <div
          slot="showMoreLabel"
          slot-scope="{ isShowingMore }"
        >
          {{ isShowingMore ? 'Less' : 'More' }}
        </div>
        <h2 class="ais-header">
          Type
        </h2>
        <ais-refinement-list attribute="type" />
        <ais-clear-refinements />
        <br>
        <h2 class="ais-header">
          Categories
        </h2>
        <ais-hierarchical-menu
          :attributes="[
            'sections.lev0',
            'sections.lev1',
            'sections.lev2',
            'sections.lev3',
            'sections.lev4',
          ]"
          show-more
          :show-more-limit="40"
          :sort-by="['count:desc']"
          :show-parent-level="false"
        />
        <!-- eslint-disable-next-line vue/attribute-hyphenation -->
        <ais-configure :hitsPerPage="24" />
      </div>
      <div class="col-lg-9 col-md-8 col-sm-12">
        <ais-hits
          :class-names="{
            'ais-Hits-list': 'card-deck-flow card-deck-flow--3-cols',
            'ais-Hits-item': 'card-deck-flow__node',
          }"
        >
          <div slot="item" slot-scope="{ item }">
            <div class="node__contents">
              <div v-if="item.primaryImage" class="ais-image-wrapper node__image-wrapper">
                <a
                  class="node__image-inner-wrapper node__image-inner-wrapper--fluid-16by9"
                  :href="`/${item.id}`"
                >
                  <img
                    v-if="item.primaryImage.isLogo"
                    class="node__image"
                    :src="`${item.primaryImage.src}?auto=format&fit=fillmax&fill=solid&h=191&w=340`"
                  >
                  <img
                    v-else
                    class="node__image"
                    :src="`${item.primaryImage.src}?auto=format&fit=crop&h=191&w=340`"
                  >
                </a>
              </div>
              <div class="node__body">
                <div class="node__contents node__contents--body">
                  <h5 class="node__title">
                    <a :href="`/${item.id}`" v-html="item.name" />
                  </h5>
                  <div v-if="item.teaser === '...'" class="node__text node__text--teaser" />
                  <div
                    v-else-if="item.teaser"
                    class="node__text node__text--teaser"
                    v-html="item.teaser"
                  />
                </div>
                <div class="node__footer node__footer--body">
                  <div class="node__footer-right">
                    <div>{{ getDate(item.published) }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ais-hits>
        <ais-pagination />
      </div>
    </div>
    <!-- Widgets -->
  </ais-instant-search>
</template>

<script>
import {
  AisInstantSearch,
  AisSearchBox,
  AisSortBy,
  AisRefinementList,
  AisClearRefinements,
  AisHierarchicalMenu,
  AisConfigure,
  AisHits,
  AisPagination,
} from 'vue-instantsearch';
import moment from 'moment';
import algoliasearch from 'algoliasearch/lite';
import { history as historyRouter } from 'instantsearch.js/es/lib/routers';
import { simple as simpleMapping } from 'instantsearch.js/es/lib/stateMappings';

export default {
  components: {
    AisInstantSearch,
    AisSearchBox,
    AisSortBy,
    AisRefinementList,
    AisClearRefinements,
    AisHierarchicalMenu,
    AisConfigure,
    AisHits,
    AisPagination,
  },

  props: {
    applicationId: {
      type: String,
      required: true,
    },
    searchApiKey: {
      type: String,
      required: true,
    },
    tenantKey: {
      type: String,
      required: true,
    },
    dateFormat: {
      type: String,
      default: 'MMM Do, YYYY',
    },
  },

  data() {
    return {
      sorted: false,
      routing: {
        router: historyRouter(),
        stateMapping: simpleMapping(),
      },
    };
  },
  created() {
    this.searchClient = algoliasearch(
      this.applicationId,
      this.searchApiKey,
    );
  },
  methods: {
    searchFunction(helper) {
      const page = helper.getPage();
      // if query null set default sort to published
      if (!this.sorted) {
        const index = (helper.state.query) ? this.tenantKey : `${this.tenantKey}_published`;
        helper.setIndex(index);
      }

      const timestamp = new Date().getTime();
      helper
        .addNumericRefinement('published', '<', timestamp)
        .addNumericRefinement('unpublished', '>', timestamp)
        .addNumericRefinement('status', '=', 1)
        .setPage(page)
        .search();
    },
    sortedClicked(items) {
      const uri = window.location.search.substring(1);
      const params = new URLSearchParams(uri);
      if (params.get(`${this.tenantKey}[query]`)) {
        this.sorted = true;
      } else {
        this.sorted = false;
      }
      return items;
    },
    getDate(date) {
      return moment(date).format(this.dateFormat);
    },
  },
};
</script>

<template>
  <div class="directory-facets__list">
    <auto-scroll
      v-if="loadAutoScroll"
      container-target=".directory-facets__list"
      element-target=".directory-facet--active"
    />
    <loading-spinner v-if="isLoading" />
    <p v-else-if="error">
      Error: {{ error.message }}
    </p>
    <directory-facet
      v-for="section in sections"
      v-else
      :key="section.id"
      :alias="section.alias"
      :name="section.name"
      :child-count="section.children.totalCount"
      :active-alias="activeAlias"
    >
      <template #default="{ hasChildren, isExpanded, alias }">
        <directory-facets-list
          v-if="hasChildren && isExpanded"
          :alias="alias"
          :active-alias="activeAlias"
        />
      </template>
    </directory-facet>
  </div>
</template>

<script>
import AutoScroll from '../auto-scroll.vue';
import DirectoryFacet from './facet.vue';
import LoadingSpinner from './loading-spinner.vue';
import directorySectionsQuery from './graphql/directory-sections';
import getEdgeNodes from './utils/get-edge-nodes';

export default {
  name: 'DirectoryFacetsList',
  components: {
    AutoScroll,
    DirectoryFacet,
    LoadingSpinner,
  },

  /**
   *
   */
  props: {
    alias: {
      type: String,
      required: true,
    },
    activeAlias: {
      type: String,
      default: null,
    },
  },

  /**
   *
   */
  data: () => ({
    isLoading: false,
    hasLoaded: false,
    loadAutoScroll: false,
    error: null,
    sections: [],
  }),

  /**
   *
   */
  computed: {
    canLoad() {
      return !this.isLoading || !this.hasLoaded;
    },
  },

  /**
   *
   */
  mounted() {
    this.load();
  },

  /**
   *
   */
  methods: {
    async load() {
      if (this.canLoad) {
        this.isLoading = true;
        this.error = null;
        try {
          this.sections = await this.loadSections();
          this.hasLoaded = true;
        } catch (e) {
          this.error = e;
        } finally {
          this.isLoading = false;
          this.loadAutoScroll = true;
        }
      }
    },

    async loadSections() {
      const variables = { sectionAlias: this.alias };
      const { data } = await this.$apollo.query({ query: directorySectionsQuery, variables });
      return getEdgeNodes(data, 'websiteSectionAlias.children');
    },
  },
};
</script>

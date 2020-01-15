<template>
  <div class="directory-facets__list">
    <p v-if="isLoading">
      Loading...
    </p>
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
import DirectoryFacet from './facet.vue';
import directorySectionsQuery from './graphql/directory-sections';
import getEdgeNodes from './utils/get-edge-nodes';

export default {
  name: 'DirectoryFacetsList',
  components: {
    DirectoryFacet,
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

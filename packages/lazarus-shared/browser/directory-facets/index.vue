<template>
  <div
    class="directory-facets"
    :data-root-alias="rootAlias"
    :data-active-alias="activeAlias"
  >
    <!-- <directory-facets-list :alias="rootAlias" /> -->
    <div class="directory-facets__list">
      <p v-if="isLoading">
        Loading...
      </p>
      <p v-else-if="error">
        Error: {{ error.message }}
      </p>
      <directory-facets-node
        v-for="section in rootSections"
        v-else
        :key="section.id"
        :alias="section.alias"
        :name="section.name"
        :child-count="section.children.totalCount"
      />
    </div>
  </div>
</template>

<script>
import DirectoryFacetsNode from './node.vue';
import directorySectionsQuery from './graphql/directory-sections';
import getEdgeNodes from './utils/get-edge-nodes';

export default {
  /**
   *
   */
  components: {
    DirectoryFacetsNode,
  },

  /**
   *
   */
  props: {
    rootAlias: {
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
    rootSections: [],
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
          this.rootSections = await this.loadSections();
          this.hasLoaded = true;
        } catch (e) {
          this.error = e;
        } finally {
          this.isLoading = false;
        }
      }
    },

    async loadSections() {
      const variables = { sectionAlias: this.rootAlias };
      const { data } = await this.$apollo.query({ query: directorySectionsQuery, variables });
      this.loadType = 'all';
      return getEdgeNodes(data, 'websiteSectionAlias.children');
    },
  },
};
</script>

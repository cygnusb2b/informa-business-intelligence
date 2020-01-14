<template>
  <div
    class="directory-facets"
    :data-root-alias="rootAlias"
    :data-active-alias="activeAlias"
  >
    <p v-if="isLoading">
      Loading...
    </p>
    <p v-else-if="error">
      Error: {{ error.message }}
    </p>
    <p
      v-for="section in rootSections"
      v-else
      :key="section.id"
    >
      <a :href="`/${section.alias}`">
        {{ section.name }}
      </a>
    </p>
  </div>
</template>

<script>
import rootSectionsQuery from './graphql/root-sections';
import getEdgeNodes from './utils/get-edge-nodes';

export default {
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
          this.rootSections = await this.loadRootSections();
          this.hasLoaded = true;
        } catch (e) {
          this.error = e;
        } finally {
          this.isLoading = false;
        }
      }
    },

    async loadRootSections() {
      const variables = { rootAlias: this.rootAlias };
      const { data } = await this.$apollo.query({ query: rootSectionsQuery, variables });
      this.loadType = 'all';
      return getEdgeNodes(data, 'websiteSectionAlias.children');
    },
  },
};
</script>

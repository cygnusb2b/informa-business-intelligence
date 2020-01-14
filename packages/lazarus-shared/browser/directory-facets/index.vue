<template>
  <div
    class="directory-facets"
    :data-root-alias="rootAlias"
    :data-active-alias="activeAlias"
  >
    <directory-facets-list :alias="rootAlias" />
  </div>
</template>

<script>
import DirectoryFacetsList from './list.vue';

export default {
  /**
   *
   */
  components: {
    DirectoryFacetsList,
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
};
</script>

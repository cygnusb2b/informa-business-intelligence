<template>
  <div
    :class="blockName"
    :data-root-alias="rootAlias"
    :data-active-alias="activeAlias"
  >
    <div :class="`${blockName}__header`">
      {{ header }}
    </div>
    <directory-facets-list :alias="rootAlias" :active-alias="activeAlias" />
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
    header: {
      type: String,
      default: 'Categories',
    },
  },

  data: () => ({
    blockName: 'directory-facets',
  }),
};
</script>

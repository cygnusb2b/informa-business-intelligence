<template>
  <div
    :class="classNames"
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
    modifiers: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    blockName: 'directory-facets',
  }),

  computed: {
    classNames() {
      const { blockName } = this;
      const classNames = [blockName];
      this.modifiers.forEach(mod => classNames.push(`${blockName}--${mod}`));
      return classNames;
    },
  },
};
</script>

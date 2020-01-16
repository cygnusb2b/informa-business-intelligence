<template>
  <div :class="classNames">
    <div :class="`${blockName}__contents`">
      <toggle-button
        :has-children="hasChildren"
        :is-expanded="isExpanded"
        @click="toggleExpanded"
      />
      <facet-link :alias="alias" :name="name" />
    </div>
    <slot :has-children="hasChildren" :is-expanded="isExpanded" :alias="alias" />
  </div>
</template>

<script>
import FacetLink from './link.vue';
import ToggleButton from './toggle-button.vue';

export default {
  components: {
    FacetLink,
    ToggleButton,
  },

  props: {
    alias: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    childCount: {
      type: Number,
      default: 0,
    },
    activeAlias: {
      type: String,
      default: null,
    },
  },

  data: () => ({
    isExpanded: false,
    blockName: 'directory-facet',
  }),

  computed: {
    classNames() {
      const { blockName } = this;
      const classNames = [blockName];
      if (this.isActive) classNames.push(`${blockName}--active`);
      return classNames;
    },
    hasChildren() {
      return Boolean(this.childCount);
    },
    isActive() {
      const { alias, activeAlias } = this;
      if (!activeAlias) return false;
      return activeAlias.indexOf(alias) === 0;
    },
  },

  mounted() {
    if (this.isActive) this.isExpanded = true;
  },

  methods: {
    toggleExpanded() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<template>
  <div :class="classNames">
    <toggle-button
      v-if="hasChildren"
      :is-expanded="isExpanded"
      @click="toggleExpanded"
    />
    <node-link :alias="alias" :name="name" />
    <slot :has-children="hasChildren" :is-expanded="isExpanded" :alias="alias" />
  </div>
</template>

<script>
import NodeLink from './link.vue';
import ToggleButton from './toggle-button.vue';

export default {
  components: {
    NodeLink,
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
  }),

  computed: {
    classNames() {
      const elementName = 'directory-facets__node';
      const classNames = [elementName];
      if (this.isActive) classNames.push(`${elementName}--active`);
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

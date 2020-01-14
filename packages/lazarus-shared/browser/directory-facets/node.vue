<template>
  <div class="directory-facets__node">
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
  },

  data: () => ({
    isExpanded: false,
  }),

  computed: {
    hasChildren() {
      return Boolean(this.childCount);
    },
  },

  methods: {
    toggleExpanded() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<template>
  <div class="directory-facets__node">
    <toggle-button
      :can-expand="hasChildren"
      :is-expanded="isExpanded"
      @click="toggleExpanded"
    />
    <a :href="`/${alias}`">
      {{ name }}
    </a>
  </div>
</template>

<script>
import ToggleButton from './toggle-button.vue';

export default {
  components: {
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

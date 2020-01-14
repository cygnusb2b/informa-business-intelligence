<template>
  <button class="directory-facets__toggle-button" :disabled="!canExpand" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    canExpand: {
      type: Boolean,
      default: false,
    },
    isExpanded: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    label() {
      if (this.isExpanded) return '-';
      return '+';
    },
  },
};
</script>

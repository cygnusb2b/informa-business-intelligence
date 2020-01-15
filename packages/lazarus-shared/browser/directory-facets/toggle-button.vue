<template>
  <button class="directory-facet__toggle-button" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
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

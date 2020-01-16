<template>
  <div :class="blockName">
    <div :class="`${blockName}__spinner`" role="status" />
    <span :class="`${blockName}__message`">{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Loading categories...',
    },
    modifiers: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    blockName: 'directory-facet-loading',
  }),
};
</script>

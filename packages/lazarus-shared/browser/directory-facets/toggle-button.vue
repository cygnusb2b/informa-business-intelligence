<template>
  <button class="directory-facet__toggle-button" :disabled="!hasChildren" @click="$emit('click')">
    <component :is="icon" />
  </button>
</template>

<script>
import PlusIcon from './icons/add-circle-outline.vue';
import MinusIcon from './icons/remove-circle-outline.vue';
import FilterIcon from './icons/filter-none.vue';

export default {
  components: {
    PlusIcon,
    MinusIcon,
    FilterIcon,
  },

  props: {
    isExpanded: {
      type: Boolean,
      default: false,
    },
    hasChildren: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    icon() {
      if (!this.hasChildren) return 'filter-icon';
      if (this.isExpanded) return 'minus-icon';
      return 'plus-icon';
    },
  },
};
</script>

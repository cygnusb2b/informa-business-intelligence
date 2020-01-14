<template>
  <a class="directory-facets__link" :href="`/${alias}`">
    {{ name }}
  </a>
</template>

<script>
export default {
  props: {
    alias: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

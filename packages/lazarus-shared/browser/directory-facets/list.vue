<template>
  <div class="directory-facets__list" />
</template>

<script>
export default {
  name: 'DirectoryFacetsList',
  props: {
    alias: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    isLoading: false,
    hasLoaded: false,
    error: null,
  }),
};
</script>

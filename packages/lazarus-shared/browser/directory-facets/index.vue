<template>
  <div
    class="directory-facets"
    :data-root-alias="rootAlias"
    :data-active-alias="activeAlias"
  />
</template>

<script>
export default {
  /**
   *
   */
  props: {
    rootAlias: {
      type: String,
      required: true,
    },
    activeAlias: {
      type: String,
      default: null,
    },
  },
  created() {
    console.log({ rootAlias: this.rootAlias, activeAlias: this.activeAlias });
  },
};
</script>

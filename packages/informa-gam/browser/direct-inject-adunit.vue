<template>
  <div :id="elementId" style="display: none;" />
</template>

<script>
import $ from '@base-cms/marko-web/browser/jquery';

export default {
  props: {
    selector: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      default: null,
    },
  },

  data: () => ({
    hasInjected: false,
  }),

  computed: {
    elementId() {
      return `informa-gam-direct-inject-${Date.now()}`;
    },
  },

  mounted() {
    const $el = $(this.selector);
    if ($el && this.contents && !this.hasInjected) {
      // Unescape closing HTML tags.
      const cleaned = this.contents.replace(/<\\\/(.+?)>/g, '</$1>');
      $el.after(cleaned);
      this.hasInjected = true;
    }
  },
};
</script>

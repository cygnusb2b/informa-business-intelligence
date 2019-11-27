<template>
  <div class="lazarus-load-eloqua-iframes" :data-selector="selector" style="display: none;" />
</template>

<script>
export default {
  props: {
    selector: {
      type: String,
      default: '.penton-eloqua-form',
    },
  },

  created() {
    const elements = document.querySelectorAll(this.selector);
    Array.prototype.forEach.call(elements, (element) => {
      const src = element.getAttribute('data-src');
      const hasProcessed = element.getAttribute('data-has-processed');
      if (!hasProcessed && src) {
        // element.classList.add('lazyload');
        // element.
        const iframe = document.createElement('iframe');
        iframe.setAttribute('data-src', src);
        iframe.setAttribute('class', 'lazyload eloqua-iframe');
        element.setAttribute('data-has-processed', 'true');
        element.appendChild(iframe);
      }
    });
  },
};
</script>

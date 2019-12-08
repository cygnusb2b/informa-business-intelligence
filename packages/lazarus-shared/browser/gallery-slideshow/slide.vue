<template>
  <div class="gallery-slideshow__slide">
    <div class="gallery-slideshow__image">
      <img :src="image.src" :alt="image.alt">
      <div v-if="image.credit" class="gallery-slideshow__credit">
        {{ image.credit }}
      </div>
    </div>
    <button v-if="hasPrevious" @click="$emit('previous')">
      &lt; Previous
    </button>
    <button v-if="hasNext" @click="$emit('next')">
      Next &gt;
    </button>
    <div class="gallery-slideshow__slide-position">
      Slide {{ slideNumber }} of {{ slideCount }}
    </div>
    <h3 class="gallery-slideshow__title">
      {{ image.displayName }}
    </h3>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="gallery-slideshow__body" v-html="image.body" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => ({}),
    },
    slideNumber: {
      type: Number,
      default: 0,
    },
    slideCount: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    hasNext() {
      return this.slideNumber < this.slideCount;
    },
    hasPrevious() {
      return this.slideNumber > 1;
    },
  },
};
</script>

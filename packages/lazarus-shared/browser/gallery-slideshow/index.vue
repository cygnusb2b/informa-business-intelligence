<template>
  <div class="gallery-slideshow">
    <slide
      :image="activeImage"
      :slide-number="imageNumber"
      :slide-count="imageCount"
      @next="increment"
      @previous="decrement"
    />
  </div>
</template>

<script>
import Slide from './slide.vue';

export default {
  inject: ['EventBus'],

  components: { Slide },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    activeSlideNumber: {
      type: Number,
      default: 1,
    },
  },

  data: () => ({
    index: 0,
  }),

  computed: {
    activeImage() {
      const { images, index, lastImageIndex } = this;
      if (!images || !Array.isArray(images)) return {};
      return index > lastImageIndex ? images[lastImageIndex] : images[index];
    },

    imageCount() {
      return this.images.length;
    },

    lastImageIndex() {
      return this.imageCount - 1;
    },

    imageNumber() {
      return this.index + 1;
    },
  },

  created() {
    this.index = this.activeSlideNumber - 1;
  },

  methods: {
    increment() {
      this.index += 1;
      this.EventBus.$emit('gallery-slideshow-slide-change', { imageNumber: this.imageNumber });
    },

    decrement() {
      this.index -= 1;
      this.EventBus.$emit('gallery-slideshow-slide-change', { imageNumber: this.imageNumber });
    },
  },
};
</script>

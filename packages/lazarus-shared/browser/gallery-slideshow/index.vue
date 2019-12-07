<template>
  <div class="gallery-slideshow">
    <div class="gallery-slideshow__image">
      <img :src="activeImage.src">
    </div>
    <h3 class="gallery-slideshow__title">
      {{ activeImage.displayName }}
    </h3>
    <div class="gallery-slideshow__body" v-html="activeImage.body" />
  </div>
</template>

<script>
export default {
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
      if (index > lastImageIndex) return images[lastImageIndex];
      return images[index];
    },

    hasNextImage() {
      return this.index < this.imageCount;
    },

    hasPreviousImage() {
      return this.index > 0;
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
};
</script>

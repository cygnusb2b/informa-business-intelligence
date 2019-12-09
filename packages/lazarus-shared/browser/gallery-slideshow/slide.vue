<template>
  <div :class="element('slide')">
    <div :class="element('image-wrapper')">
      <div :class="element('image-inner-wrapper')">
        <img :src="image.src" :alt="image.alt" :class="element('image')">
      </div>
      <div v-if="image.credit" :class="element('credit')">
        {{ image.credit }}
      </div>
      <a v-if="hasPrevious" :class="element('previous')" @click.prevent="$emit('previous')">
        <chevron-left />
      </a>
      <a v-if="hasNext" :class="element('next')" @click.prevent="$emit('next')">
        <chevron-right />
      </a>
    </div>

    <div :class="element('slide-count')">
      Slide {{ slideNumber }} of {{ slideCount }}
    </div>
    <h3 :class="element('title')">
      {{ image.displayName }}
    </h3>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div :class="element('body')" v-html="image.body" />
  </div>
</template>

<script>
import ChevronLeft from '@base-cms/marko-web-icons/browser/chevron-left.vue';
import ChevronRight from '@base-cms/marko-web-icons/browser/chevron-right.vue';

export default {
  components: { ChevronLeft, ChevronRight },

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

  methods: {
    element(name) {
      return `gallery-slideshow__${name}`;
    },
  },
};
</script>

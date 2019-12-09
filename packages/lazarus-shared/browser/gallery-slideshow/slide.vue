<template>
  <div :class="element('slide')">
    <div :class="element('image-wrapper')">
      <div :class="element('image-inner-wrapper')">
        <img :src="image.src" :alt="image.alt" :class="element('image')">
      </div>
      <div v-if="image.credit" :class="element('credit')">
        {{ image.credit }}
      </div>
      <a
        v-if="hasPrevious"
        :class="element('previous')"
        :href="previousPath"
        @click.prevent="emitChange('previous')"
      >
        <chevron-left />
      </a>
      <a
        v-if="hasNext"
        :class="element('next')"
        :href="nextPath"
        @click.prevent="emitChange('next')"
      >
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
import Vue from '@base-cms/marko-web/browser/vue';

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
    path: {
      type: String,
      required: true,
    },
  },

  computed: {
    currentPath() {
      return `${this.path}?slide=${this.slideNumber}`;
    },
    hasNext() {
      return this.slideNumber < this.slideCount;
    },
    nextPath() {
      if (!this.hasNext) return null;
      return `${this.path}?slide=${this.slideNumber + 1}`;
    },
    hasPrevious() {
      return this.slideNumber > 1;
    },
    previousPath() {
      if (!this.hasPrevious) return null;
      return `${this.path}?slide=${this.slideNumber - 1}`;
    },
  },

  methods: {
    element(name) {
      return `gallery-slideshow__${name}`;
    },

    emitChange(type) {
      this.$emit(type);
      Vue.nextTick(() => window.history.replaceState({}, '', this.currentPath));
    },
  },
};
</script>

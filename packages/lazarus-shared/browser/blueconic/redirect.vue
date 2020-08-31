<template>
  <div style="display: none;" data-name="blueconic-redirect" />
</template>

<script>
export default {
  /**
   *
   */
  props: {
    librarySrc: {
      type: String,
      required: true,
    },
    redirectTo: {
      type: String,
      default: null,
    },
    timeout: {
      type: Number,
      default: 500,
    },
    scriptTimeout: {
      type: Number,
      default: 2000,
    },
    debug: {
      type: Boolean,
      default: false,
    },
  },

  /**
   *
   */
  data: () => ({
    redirected: false,
  }),

  /**
   *
   */
  computed: {
    target() {
      return `script[src="${this.librarySrc}"]`;
    },
  },

  /**
   *
   */
  created() {
    const script = document.querySelector(this.target);
    if (script) {
      this.log('BC JS tag already in DOM. Redirect.');
      this.redirect();
    } else {
      this.log('BC JS tag not found. Adding observer.');
      this.observe();
    }
  },

  methods: {
    /**
     *
     */
    redirect() {
      const { timeout, redirectTo } = this;
      if (redirectTo) {
        this.log('setting redirect timeout', timeout);
        window.setTimeout(() => {
          this.log('redirecting...');
          window.location.replace(redirectTo);
        }, timeout);
      } else {
        this.log('no redirectTo value found - will not redirect.');
      }
    },

    /**
     *
     */
    observe() {
      if (window.MutationObserver) {
        const observer = new MutationObserver((mutationList) => {
          for (let i = 0; i < mutationList.length; i += 1) {
            const mutation = mutationList[i];
            if (mutation.type === 'childList') {
              for (let x = 0; x < mutation.addedNodes.length; x += 1) {
                const added = mutation.addedNodes[x];
                if (added.tagName && added.tagName === 'SCRIPT' && added.matches(this.target)) {
                  this.log('BC JS tag added to the DOM. Redirect.');
                  this.redirect();
                }
              }
            }
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });
        window.setTimeout(() => {
          this.log('BC JS tag timeout reached. Redirect.');
          observer.disconnect();
          this.redirect();
        }, this.scriptTimeout);
      } else {
        this.log('This browser does not support MutationObservers. Redirect.');
        this.redirect();
      }
    },

    /**
     *
     */
    log(...args) {
      const { log } = console;
      if (this.debug) log('BlueConic Redirect Handler:', ...args);
    },
  },
};
</script>

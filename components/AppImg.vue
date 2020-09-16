<template>
  <img :class="classes" v-bind="attrs" :alt="alt" />
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: '' },
    lazyload: { type: Boolean, default: false },
  },
  computed: {
    classes() {
      const base = 'app-img';

      return [
        base,
        this.lazyload ? 'lazyload' : '',
      ];
    },
    attrs() {
      const attrs = { ...this.$attrs };

      if (this.lazyload) {
        attrs['data-src'] = this.src;
      } else {
        attrs.src = this.src;
      }

      return attrs;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-img {
  &.lazyload {
    opacity: 0;

    &:not([src]) {
      visibility: hidden;
    }
  }

  &.lazyloading {
    background-image: url("~assets/images/loader.svg");
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    transition: 0.1s;
  }

  &.lazyloaded {
    opacity: 1;
    transition: 0.1s;
  }
}
</style>

<template>
  <component class="header" :is="component" />
</template>

<script>
import AppHeaderDesktop from '~/components/AppHeader/AppHeaderDesktop.vue';
import AppHeaderMobile from '~/components/AppHeader/AppHeaderMobile.vue';

export default {
  data() {
    return {
      compo: AppHeaderMobile,
    };
  },
  computed: {
    component() {
      if (this.$device.isDesktop) return AppHeaderDesktop;

      return AppHeaderMobile;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: hsl(216, 56%, 98%);

  &--sticky {
    position: sticky;
    top: 0;
    z-index: $z-index--sticky;

    @media (min-width: $screen-lg) {
      position: static;
    }
  }
}
</style>

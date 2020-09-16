<template>
  <div class="header-logo">
    <span class="header-logo__text" v-if="isMainPage">
      <span class="header-logo__text header-logo__text--primary">Где</span>Материал
    </span>
    <nuxt-link class="header-logo__text" to="/" v-else>
      <span class="header-logo__text header-logo__text--primary">Где</span>Материал
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    isMainPage() {
      return this.$route.path === '/';
    },
  },
};
</script>

<style lang="scss" scoped>
.header-logo {
  display: flex;
  justify-content: center;
  align-items: center;

  &__text {
    font-family: $font-family-montserrat;
    font-size: 14px;
    font-weight: 800;
    line-height: 18px;
    color: hsl(198, 23%, 19%);
    text-transform: uppercase;

    @media (min-width: $screen-lg) {
      font-size: 16px;
    }

    /deep/ &--primary {
      color: $primary-color;
    }
  }
}
</style>

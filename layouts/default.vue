<template>
  <div class="layout" id="layout-default" itemscope itemtype="http://schema.org/WebPage">
    <AppHeader class="layout__header" />
    <main class="layout__content" slot="content">
      <nuxt />
    </main>
    <AppFooter class="layout__footer" />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader/AppHeader.vue';
import AppFooter from '~/components/AppFooter/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  &__content {
    flex-grow: 1;
  }
}
</style>

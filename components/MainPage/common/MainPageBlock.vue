<template>
  <div class="main-page-block">
    <div class="main-page-block__header">
      <MainPageContainer class="main-page-block__container main-page-block__container--header">
        <div class="main-page-block__title" v-if="title" v-text="title" />
      </MainPageContainer>
    </div>
    <slot />
  </div>
</template>

<script>
import MainPageContainer from '~/components/MainPage/common/MainPageContainer.vue';

export default {
  components: {
    MainPageContainer,
  },
  props: {
    title: { type: String, default: '' },
  },
};
</script>

<style lang="scss" scoped>
.main-page-block {
  &__title {
    padding: 20px 0;
    font-family: $font-family-montserrat;
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;

    @media (min-width: $screen-lg) {
      padding: 35px 0;
      font-size: 20px;
    }
  }
}
</style>

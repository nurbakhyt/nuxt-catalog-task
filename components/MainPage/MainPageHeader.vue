<template>
  <div class="main-page-header">
    <MainPageContainer class="main-page-header__container">
      <div class="main-page-header__inner">
        <div class="main-page-header__content">
          <div class="main-page-header__title">
            Доставляем материалы вовремя
          </div>
          <div class="main-page-header__text">
            Помогаем избежать простоев в&nbsp;работе и&nbsp;уложиться в&nbsp;смету
          </div>
          <router-link :class="buttonClasses" to="/about">
            О проекте
          </router-link>
        </div>

        <div class="main-page-header__image">
          <client-only>
            <AppImg class="main-page-header__img" src="/images/home-promo-1-sm.png" lazyload v-if="$device.isMobileOrTablet" />
            <AppImg class="main-page-header__img" src="/images/home-promo-1-lg.png" lazyload v-else />
          </client-only>
        </div>
      </div>
    </MainPageContainer>
  </div>
</template>

<script>
import MainPageContainer from '~/components/MainPage/common/MainPageContainer.vue';

export default {
  components: {
    MainPageContainer,
  },
  computed: {
    buttonClasses() {
      return [
        'button',
        'button--montserrat',
        this.isMobile ? 'button--greyscale' : '',
        'main-page-header__button',
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.main-page-header {
  margin-bottom: 20px;

  &__container {
    @media (max-width: $screen-md) {
      padding: 0;
    }
  }

  &__inner {
    display: flex;
    padding: 10px 8px;
    overflow: hidden;
    background-color: $white;

    @media (min-width: $screen-md) {
      padding: 34px 48px;
      border-radius: 4px;
    }
  }

  &__content {
    z-index: $z-index;

    @media (max-width: $screen-sm) {
      max-width: 300px;
    }
  }

  &__title {
    margin-bottom: 6px;
    font-family: $font-family-montserrat;
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;

    @media (min-width: $screen-md) {
      margin-bottom: 14px;
      font-size: 28px;
      line-height: 34px;
    }
  }

  &__text {
    margin-bottom: 10px;
    font-family: $font-family-montserrat;
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;

    @media (min-width: $screen-md) {
      margin-bottom: 16px;
      font-size: 17px;
      line-height: 22px;
    }
  }

  &__button {
    padding: 8px 12px;
    font-size: 10px;
    font-weight: 600;

    @media (min-width: $screen-md) {
      padding: 10px 20px;
      font-size: 13px;
    }
  }

  &__image {
    position: relative;
    flex-grow: 1;
  }

  &__img {
    position: absolute;
    right: -8px;
    bottom: -10px;
    width: 140px;

    @media (min-width: $screen-md) {
      right: 30px;
      bottom: -34px;
      width: auto;
    }
  }
}
</style>

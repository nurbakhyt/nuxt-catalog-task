<template>
  <MainPageBlock class="main-page-success-stories" title="Истории успеха">
    <MainPageContainer class="main-page-success-stories__container">
      <div class="main-page-success-stories__inner">
        <div class="main-page-success-stories__content">
          <div class="main-page-success-stories__info">
            <div class="main-page-success-stories__title">
              Константин Дудко
            </div>
            <div class="main-page-success-stories__title main-page-success-stories__title--light">
              Строительное бюро ФЛИК
            </div>
          </div>
          <div class="main-page-success-stories__text">
            Я&nbsp;считаю, что есть три этапа, который должен пройти весь строительный рынок для достижения максимальной эффективности, это универсализация, эффективные коммуникации между всеми участниками ремонта и&nbsp;ликвидация безграмотности...
          </div>

          <a class="button button--montserrat main-page-success-stories__button" href="https://gdematerial.ru/blog/istorii-uspiekha-s-gdiematierial-vypusknik-mfti-pro-fundamientalnyi-podkhod-v-riemontie-i-borbu-protiv-shablonnykh-stroitielnykh-mietodov/" target="_blank" rel="noopener, noreferrer">
            Подробнее в блоге
          </a>
        </div>
        <div class="main-page-success-stories__media">
          <client-only>
            <AppImg class="main-page-success-stories__img" src="/images/success-stories/flik.png" lazyload />
          </client-only>
          <div class="main-page-success-stories__media-icon">
            <Icon class="main-page-success-stories__icon" name="gm-play" />
          </div>
        </div>
      </div>
    </MainPageContainer>
  </MainPageBlock>
</template>

<script>
import MainPageBlock from '~/components/MainPage/common/MainPageBlock.vue';
import MainPageContainer from '~/components/MainPage/common/MainPageContainer.vue';

export default {
  components: {
    MainPageBlock,
    MainPageContainer,
  },
};
</script>

<style lang="scss" scoped>
.main-page-success-stories {
  &__container {
    @media (max-width: $screen-md) {
      padding: 0;
    }
  }

  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    background-color: $white;

    @media (min-width: $screen-md) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 120px;
      min-height: 340px;
      padding: 26px 42px;
      border-radius: 4px;
    }
  }

  &__content {
    @media (max-width: $screen-md) {
      padding: 10px 8px;
      order: 1;
    }
  }

  &__info {
    display: flex;
    align-items: center;
    margin-bottom: 14px;

    @media (min-width: $screen-md) {
      margin-bottom: 24px;
    }
  }

  &__title {
    margin-right: 14px;
    font-family: $font-family-montserrat;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;

    @media (min-width: $screen-md) {
      font-size: 16px;
      line-height: 20px;
    }

    &:last-child {
      margin-right: 0;
    }

    &--light {
      font-weight: 400;
      color: hsla(198, 23%, 19%, 0.5);
    }
  }

  &__text {
    margin-bottom: 14px;
    font-family: $font-family-montserrat;
    font-size: 12px;
    line-height: 18px;

    @media (min-width: $screen-md) {
      margin-bottom: 24px;
      font-size: 16px;
      line-height: 28px;
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

  &__media {
    display: flex;
    position: relative;
    max-width: 480px;
    overflow: hidden;
    cursor: pointer;

    @media (min-width: $screen-md) {
      border-radius: 4px;
    }

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: hsla(198, 23%, 19%, 0.5);
      content: '';
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__media-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 82px;
    height: 82px;
    color: hsla(198, 23%, 19%, 0.6);
    background-color: hsla(0, 0%, 100%, 0.8);
    border-radius: 100%;
    transform: translate(-50%, -50%);
    z-index: $z-index;
  }

  &__icon {
    width: 34px;
    height: 34px;
  }
}
</style>

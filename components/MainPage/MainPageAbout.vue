<template>
  <MainPageBlock class="main-page-about" title="О магазине">
    <div class="main-page-about__main">
      <MainPageContainer class="main-page-about__container">
        <div class="main-page-about__content">
          <p class="main-page-about__text">
            Каждый день мы опрашиваем поставщиков и узнаем цены и статус наличия по тысячам товаров. Это позволяет нам быстро находить нужные материалы и доставлять их вовремя. Наша миссия — обеспечивать материалом по-умному. Вовремя снабжаем стройматериалами объекты любых масштабов, избегая простоев в работе и переплат.
          </p>
          <p class="main-page-about__text">
            ГдеМатериал — это платформа, которая объединяет поставщиков, логистические компании и строителей. Мы самостоятельно разработали ряд нишевых инструментов: от анализатора рыночных цен, до системы автоматического клиентского обслуживания — скоринга, подбора материалов и поиска способов оптимальной доставки.
          </p>
          <nuxt-link class="main-page-about__btn main-page-about__btn--about button button--montserrat" to="/about/">
            Подробнее о проекте
          </nuxt-link>
        </div>
      </MainPageContainer>
    </div>
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
.main-page-about {
  &__main {
    background-color: hsl(0, 0%, 100%);

    @media (min-width: $screen-lg) {
      background-color: transparent;
    }
  }

  &__content {
    padding: 20px 0 30px 0;

    @media (min-width: $screen-lg) {
      padding: 28px 40px 34px 40px;
      background-color: hsl(0, 0%, 100%);
      border-radius: 4px;
    }
  }

  &__text {
    margin-bottom: 16px;
    font-size: 12px;
    font-weight: 500;
    line-height: 22px;

    @media (min-width: $screen-lg) {
      font-size: 14px;
      line-height: 28px;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__btn {
    padding: 6px 16px;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;

    @media (min-width: $screen-lg) {
      padding: 7px 16px;
      font-size: 14px;
    }

    &--about {
      margin-top: 18px;

      @media (min-width: $screen-lg) {
        margin-top: 25px;
      }
    }
  }
}
</style>

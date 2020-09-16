<template>
  <MainPageBlock class="main-page-promo-partners" title="Наши поставщики">
    <MainPageContainer class="main-page-promo-partners__container">
      <ul class="main-page-promo-partners__list">
        <li class="main-page-promo-partners__item" v-for="(partner, idx) in partners" :key="idx">
          <client-only>
            <AppImg class="main-page-promo-partners__img" :src="partner.img" :alt="partner.name" lazyload />
          </client-only>
        </li>
      </ul>
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
  data() {
    return {
      partners: [
        {
          name: 'Петрович',
          img: '/images/promo-partners/petrovich.png',
        },
        {
          name: 'Isolux',
          img: '/images/promo-partners/isolux.png',
        },
        {
          name: 'RDS Строй',
          img: '/images/promo-partners/rds.png',
        },
        {
          name: 'Leroy Merlin',
          img: '/images/promo-partners/leroymerlin.png',
        },
        {
          name: 'Сатурн',
          img: '/images/promo-partners/saturn.png',
        },
        {
          name: 'Все инструменты',
          img: '/images/promo-partners/vseinstrumenty.png',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main-page-promo-partners {
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;
    padding: 0;
    list-style: none;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    background-color: hsl(0, 0%, 100%);
    border-radius: 4px;

    @media (min-width: $screen-lg) {
      height: 130px;
    }
  }

  &__img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>

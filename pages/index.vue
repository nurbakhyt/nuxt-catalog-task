<template>
  <section class="main-page">
    <MainPageHeader />
    <MainPageSuccessStories />
    <MainPagePromoPartners />
    <MainPageAbout />
  </section>
</template>

<script>
import MainPageHeader from '~/components/MainPage/MainPageHeader.vue';
import MainPageSuccessStories from '~/components/MainPage/MainPageSuccessStories.vue';
import MainPagePromoPartners from '~/components/MainPage/MainPagePromoPartners.vue';
import MainPageAbout from '~/components/MainPage/MainPageAbout.vue';

export default {
  components: {
    MainPageHeader,
    MainPageSuccessStories,
    MainPagePromoPartners,
    MainPageAbout,
  },
  head() {
    return {
      title: 'ГдеМатериал: купить стройматериалы с быстрой доставкой. Строительные материалы в Москве, низкие цены.',
      meta: [
        { name: 'keywords', content: 'ГдеМатериал — быстрая доставка любых стройматериалов по оптовым ценам, гарантия качества' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main-page {
  font-family: $font-family-montserrat;
  background-color: hsl(216, 56%, 98%);

  @media (min-width: $screen-lg) {
    padding: 0 0 80px 0;
  }
}
</style>

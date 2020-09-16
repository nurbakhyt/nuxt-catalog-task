<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__row">
        <ul class="footer__list">
          <li class="footer__item">
            <nuxt-link class="footer__link link" to="/about/">
              О компании
            </nuxt-link>
          </li>
          <li class="footer__item">
            <a class="footer__link link" href="https://gdematerial.ru/blog/kak-gdematerial-nakhodit-liuboi-tovar/">Как мы находим любой товар</a>
          </li>
          <li class="footer__item">
            <nuxt-link class="footer__link link" to="/info/delivery/">
              Доставка
            </nuxt-link>
          </li>
          <li class="footer__item">
            <nuxt-link class="footer__link link" to="/info/payments/">
              Оплата
            </nuxt-link>
          </li>
          <li class="footer__item">
            <nuxt-link class="footer__link link" to="/info/return/">
              Возврат и обмен
            </nuxt-link>
          </li>
          <li class="footer__item">
            <button class="footer__link link">
              Прайс-лист
            </button>
          </li>
          <li class="footer__item">
            <nuxt-link class="footer__link link" to="/info/contacts/">
              Контакты
            </nuxt-link>
          </li>
          <li class="footer__item">
            <nuxt-link class="footer__link link" to="/info/offer/">
              Публичная оферта
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="footer__row">
        <div class="footer__app">
          <ExternalLink class="footer__btn footer__btn--app" aria-label="Google Play" href="https://play.google.com/store/apps/details?id=ru.gdml.pro">
            <client-only>
              <AppImg class="footer__img footer__img--app" src="/images/google-play-btn.svg" alt="Google Play" lazyload />
            </client-only>
          </ExternalLink>
          <ExternalLink class="footer__btn footer__btn--app" aria-label="App Store" href="https://youtu.be/8FU0hPE4tCM">
            <client-only>
              <AppImg class="footer__img footer__img--app" src="/images/app-store-btn.svg" alt="AppStore" lazyload />
            </client-only>
          </ExternalLink>
        </div>
        <p class="footer__copyright">
          © 2014–2020 ООО «ГдеМатериал»
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import ExternalLink from '~/components/ExternalLink.vue';

export default {
  components: {
    ExternalLink,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 17px 0 27px 0;
  background-color: hsl(215, 50%, 95%);

  @media (min-width: $screen-lg) {
    padding: 42px 0 56px 0;
  }

  &__container {
    max-width: $container-xl;
    padding: 0 8px;
    margin: 0 auto;

    @media (min-width: $screen-lg) {
      padding: 0 16px;
    }

    @media (min-width: $screen-xl) {
      padding: 0 84px;
    }
  }

  &__row {
    margin-bottom: 15px;

    @media (min-width: $screen-lg) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    &:last-child {
      margin-bottom: 0;

      @media (min-width: $screen-lg) {
        margin-bottom: 0;
      }
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    list-style: none;

    @media (min-width: $screen-lg) {
      justify-content: space-between;
      width: 100%;
    }
  }

  &__app {
    display: flex;
    justify-content: center;
    margin-bottom: 18px;

    @media (min-width: $screen-lg) {
      order: 1;
      margin-bottom: 0;
    }
  }

  &__copyright {
    font-size: 12px;
    line-height: 16px;
    color: hsla(198, 64%, 25%, 0.3);
    text-align: center;

    @media (min-width: $screen-lg) {
      font-size: 14px;
      line-height: 18px;
      text-align: left;
    }
  }

  &__link {
    display: block;
    padding: 6px 8px;
    font-size: 12px;
    line-height: 20px;
    color: hsla(198, 64%, 25%, 0.6);

    @media (min-width: $screen-lg) {
      padding: 10px 0;
      font-size: 14px;
    }

    &:hover {
      color: hsla(198, 64%, 20%, 0.75);
    }

    &:active {
      color: hsla(198, 64%, 15%, 0.9);
    }
  }

  &__btn {
    display: block;

    &--app {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 8px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__img {
    display: block;
    max-width: 100%;
    max-height: 100%;

    &--app {
      height: 38px;
    }
  }
}
</style>

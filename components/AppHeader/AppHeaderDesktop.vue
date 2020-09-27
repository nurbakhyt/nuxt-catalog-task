<template>
  <div class="header">
    <div class="header__container">
      <div class="header__row">
        <AppHeaderLogo class="header__logo" />
        <ul class="header__list header__list--menu">
          <li class="header__item">
            <ExternalLink class="header__link" href="https://gdematerial.ru/blog/">
              Блог
            </ExternalLink>
          </li>
          <li class="header__item">
            <nuxt-link class="header__link" to="/info/contacts/">
              Контакты
            </nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link class="header__link" to="/info/payments/">
              Оплата
            </nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link class="header__link" to="/info/delivery/">
              Доставка
            </nuxt-link>
          </li>
          <li class="header__item">
            <ExternalLink class="header__link" href="https://partner.gdml.ru">
              Поставщикам
            </ExternalLink>
          </li>
        </ul>
        <ul class="header__list header__list--user-menu">
          <li class="header__item">
            <button class="header__link">
              <Icon class="header__icon header__icon--box" name="gm-header-box" />
              Отследить заказ
            </button>
          </li>
          <li class="header__item">
            <button class="header__link">
              Вход и регистрация
            </button>
          </li>
        </ul>
      </div>
      <div class="header__row">
        <AppHeaderCatalogBtn class="header__btn header__btn--catalog" />
        <AppSearch class="header__search" />
        <nuxt-link class="header__btn header__btn--cart" to="/cart/1/">
          <Icon class="header__icon header__icon--cart" name="gm-cart" />
          <span class="header__text header__text--cart">Мой заказ</span>
          <client-only>
            <span class="header__counter" v-if="itemsCount" v-text="itemsCount" />
          </client-only>
        </nuxt-link>
      </div>
      <div class="header__wrapper header__wrapper--menu catalog">
        <AppHeaderMenu />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderLogo from '~/components/AppHeader/AppHeaderLogo.vue';
import ExternalLink from '~/components/ExternalLink.vue';
import AppSearch from '~/components/AppSearch/AppSearch.vue';
import AppHeaderCatalogBtn from '~/components/AppHeader/buttons/AppHeaderCatalogBtn.vue';
import AppHeaderMenu from './AppHeaderMenu.vue';

export default {
  components: {
    AppHeaderLogo,
    ExternalLink,
    AppSearch,
    AppHeaderCatalogBtn,
    AppHeaderMenu,
  },
  data() {
    return {
      items: 0,
    };
  },
  computed: {
    itemsCount() {
      if (process.server) return 0;

      return this.items.length > 99 ? 99 : this.items.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  position: relative;
}

.header {
  &__container {
    max-width: $container-xl;
    padding: 16px;
    margin: 0 auto;

    @media (min-width: $screen-xl) {
      padding: 16px 84px;
    }
  }

  &__row {
    display: flex;
    align-items: center;
    padding-top: 16px;
  }

  &__logo {
    flex-shrink: 0;
    margin-right: 20px;
  }

  &__list {
    display: flex;
    padding: 0;
    list-style: none;

    &--menu {
      flex-grow: 1;
      justify-content: center;
      margin-right: 20px;
    }

    &--user-menu {
      flex-shrink: 0;
    }
  }

  &__item {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    padding: 0;
    font-family: $font-family;
    font-size: 14px;
    line-height: 18px;
    color: hsl(198, 23%, 19%);
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      color: $primary-color;
    }
  }

  &__search {
    flex-grow: 1;
  }

  &__btn {
    &--catalog {
      margin-right: 12px;
    }

    &--cart {
      display: flex;
      align-items: center;
      padding: 10px 8px 10px 14px;
      margin-left: 12px;
      font-family: $font-family;
      font-weight: 500;
      color: hsl(198, 23%, 19%);
      cursor: pointer;
      background-color: hsl(215, 38%, 94%);
      border: none;
      border-radius: 3px;
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }
  }

  &__icon {
    flex-shrink: 0;

    &--box {
      width: 14px;
      height: 16px;
      margin-right: 4px;
    }

    &--cart {
      width: 20px;
      height: 20px;
    }
  }

  &__text {
    &--cart {
      margin: 0 8px;
    }
  }

  &__counter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    color: hsl(0, 0%, 100%);
    background-color: hsl(229, 78%, 50%);
    border-radius: 50%;
  }
}
</style>

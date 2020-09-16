<template>
  <div class="header">
    <div class="header__container">
      <div class="header__row">
        <button class="header__btn header__btn--menu" aria-label="Меню">
          <Icon class="header__icon header__icon--burger" name="nav-burger" />
        </button>
        <AppHeaderLogo class="header__logo" />
        <AppHeaderUserMenu class="header__user-menu" />
      </div>
      <div class="header__row">
        <AppHeaderCatalogBtn class="header__btn header__btn--catalog" />
        <AppSearch class="header__search" />
      </div>
    </div>
    <div class="header__wrapper header__wrapper--menu">
      <ul class="header-menu">
        <li class="header-menu__item">
          <button class="header-menu__link">
            Прайс-лист
          </button>
        </li>
        <li class="header-menu__item">
          <button class="header-menu__link">
            Отслеживание заказа
          </button>
        </li>
        <li class="header-menu__item">
          <button class="header-menu__link">
            Каталог товаров
          </button>
        </li>
        <li class="header-menu__item">
          <nuxt-link class="header-menu__link" to="/info/delivery/">
            Доставка
            <Icon class="header-menu__icon header-menu__icon--angle-right" name="gm-angle-right" />
          </nuxt-link>
        </li>
        <li class="header-menu__item">
          <nuxt-link class="header-menu__link" to="/about/">
            О компании
            <Icon class="header-menu__icon header-menu__icon--angle-right" name="gm-angle-right" />
          </nuxt-link>
        </li>
        <li class="header-menu__item">
          <nuxt-link class="header-menu__link" to="/info/contacts/">
            Контакты
            <Icon class="header-menu__icon header-menu__icon--angle-right" name="gm-angle-right" />
          </nuxt-link>
        </li>
        <li class="header-menu__item">
          <ExternalLink class="header-menu__link" href="https://gdematerial.ru/blog/" target="_blank">
            Блог
          </ExternalLink>
        </li>
        <li class="header-menu__item">
          <ExternalLink class="header-menu__link" href="https://partner.gdml.ru" target="_blank">
            Поставщикам
          </ExternalLink>
        </li>
      </ul>
      <ul class="header-menu header-menu--catalog">
        <li class="header-menu__item">
          <nuxt-link class="header-menu__link" to="/category/1/">
            category 1
            <Icon class="header-menu__icon header-menu__icon--angle-right" name="gm-angle-right" />
          </nuxt-link>
        </li>
        <li class="header-menu__item">
          <nuxt-link class="header-menu__link" to="/category/2/">
            category 2
            <Icon class="header-menu__icon header-menu__icon--angle-right" name="gm-angle-right" />
          </nuxt-link>
        </li>
        <li class="header-menu__item">
          <nuxt-link class="header-menu__link" to="/category/3/">
            category 3
            <Icon class="header-menu__icon header-menu__icon--angle-right" name="gm-angle-right" />
          </nuxt-link>
        </li>
        <li class="header-menu__item">
          <nuxt-link class="header-menu__link" to="/category/4/">
            category 4
            <Icon class="header-menu__icon header-menu__icon--angle-right" name="gm-angle-right" />
          </nuxt-link>
        </li>
        <li class="header-menu__item">
          <nuxt-link class="header-menu__link" to="/category/5/">
            category 5
            <Icon class="header-menu__icon header-menu__icon--angle-right" name="gm-angle-right" />
          </nuxt-link>
        </li>
        <li class="header-menu__item">
          <nuxt-link class="header-menu__link" to="/category/6/">
            category 6
            <Icon class="header-menu__icon header-menu__icon--angle-right" name="gm-angle-right" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppHeaderLogo from '~/components/AppHeader/AppHeaderLogo.vue';
import AppHeaderUserMenu from '~/components/AppHeader/mobile/AppHeaderUserMenu.vue';
import AppHeaderCatalogBtn from '~/components/AppHeader/buttons/AppHeaderCatalogBtn.vue';
import AppSearch from '~/components/AppSearch/AppSearch.vue';
import ExternalLink from '~/components/ExternalLink.vue';

export default {
  components: {
    AppHeaderLogo,
    AppHeaderUserMenu,
    AppHeaderCatalogBtn,
    AppSearch,
    ExternalLink,
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__container {
    max-width: $container-xl;
    padding: 10px 8px 10px 8px;
    margin: 0 auto;
  }

  &__row {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__user-menu {
    margin-left: auto;
  }

  &__search {
    flex-grow: 1;
  }

  &__btn {
    flex-shrink: 0;

    &--menu {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin-right: 18px;
      color: hsl(0, 0%, 0%);
      cursor: pointer;
      background-color: transparent;
      border: none;
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }

    &--catalog {
      margin-right: 5px;
    }
  }

  &__icon {
    &--burger {
      width: 20px;
      height: 14px;
    }
  }
}

.header-menu {
  --link-background-color: hsl(0, 0%, 100%);
  --link-border-radius: 0;
  --link-padding: 6px 8px;
  --link-color: hsl(198, 23%, 19%);
  --link-outline-color: transparent;
  --icon--angle-right-color: hsl(199, 22%, 77%);

  display: none;
  padding: 0;
  overflow-y: scroll;
  list-style: none;
  background-color: hsl(0, 0%, 100%);

  &__item {
    @media (min-width: $screen-lg) {
      --link-padding: 7px 20px;
    }

    &:hover,
    &--active {
      --link-background-color: hsl(230, 78%, 51%);
      --link-color: hsl(0, 0%, 100%);
      --link-outline-color: hsl(230, 78%, 51%);
      --icon--angle-right-color: hsl(0, 0%, 100%);
    }

    &:first-child {
      margin-top: 10px;

      @media (min-width: $screen-lg) {
        --link-padding: 16px 20px 10px 20px;
      }
    }

    &:last-child {
      @media (min-width: $screen-lg) {
        --link-padding: 10px 20px 16px 20px;
      }
    }
  }

  &__link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: var(--link-padding);
    font-family: $font-family-montserrat;
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    color: var(--link-color);
    cursor: pointer;
    background-color: var(--link-background-color);
    border: 1px solid transparent;
    border-radius: var(--link-border-radius);
    outline: none;
    -webkit-tap-highlight-color: transparent;

    @media (min-width: $screen-lg) {
      outline: 3px solid var(--link-outline-color);
    }
  }

  &__icon {
    flex-shrink: 0;

    &--angle-right {
      width: 6px;
      height: 20px;
      margin-left: 8px;
      color: var(--icon--angle-right-color);

      @media (min-width: $screen-lg) {
        margin-left: 10px;
      }
    }
  }
}
</style>

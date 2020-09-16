<template>
  <div class="header-user-menu">
    <ul class="header-user-menu__list">
      <li class="header-user-menu__item">
        <button class="header-user-menu__btn" aria-label="Вход и регистрация">
          <Icon class="header-user-menu__icon header-user-menu__icon--user" name="gm-user" />
          <span class="header-user-menu__counter" v-if="activeOrdersCount" v-text="activeOrdersCount" />
        </button>
      </li>
      <li class="header-user-menu__item">
        <nuxt-link class="header-user-menu__btn" to="/cart/1/" aria-label="Корзина">
          <Icon class="header-user-menu__icon header-user-menu__icon--cart" name="gm-cart" />
          <client-only>
            <span class="header-user-menu__counter" v-if="itemsCount" v-text="itemsCount" />
          </client-only>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: 0,
      activeOrdersCount: 0,
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
.header-user-menu {
  &__list {
    display: flex;
    padding: 0;
    list-style: none;
  }

  &__item {
    margin-right: 4px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 8px 9px;
    font-family: $font-family;
    color: hsl(198, 23%, 19%);
    cursor: pointer;
    background-color: hsl(215, 38%, 94%);
    border: none;
    border-radius: 3px;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  &__counter {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -5px;
    right: -3px;
    width: 15px;
    height: 15px;
    font-size: 10px;
    font-weight: 600;
    line-height: 1;
    color: hsl(0, 0%, 100%);
    background-color: hsl(229, 78%, 50%);
    border-radius: 50%;
  }

  &__icon {
    &--user {
      width: 18px;
      height: 18px;
    }

    &--cart {
      width: 18px;
      height: 18px;
    }
  }
}
</style>

<template>
  <li class="main-page-catalog-category">
    <div class="main-page-catalog-category__header">
      <nuxt-link class="main-page-catalog-category__link main-page-catalog-category__link--title" :to="category.absolute_url">
        {{ category.name }}
        <Icon class="main-page-catalog-category__icon main-page-catalog-category__icon--angle-right" name="gm-angle-right" />
      </nuxt-link>
    </div>
    <div class="main-page-catalog-category__main">
      <ul class="main-page-catalog-category__list">
        <li class="main-page-catalog-category__item" v-for="childCategory in category.submenu" :key="childCategory.id">
          <nuxt-link class="main-page-catalog-category__link" :to="childCategory.absolute_url" v-text="childCategory.name" />
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    category: { type: Object, required: true },
  },
};
</script>

<style lang="scss" scoped>
.main-page-catalog-category {
  --icon--angle-right-color: hsl(199, 22%, 77%);

  background: hsl(0, 0%, 100%);
  border-radius: 4px;

  &__header {
    border-bottom: 1px solid hsl(213, 35%, 94%);
  }

  &__list {
    padding: 16px 0 19px;
    list-style: none;
  }

  &__link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 6px 20px;
    font-family: $font-family-montserrat;
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;

    &:hover,
    &:active {
      --icon--angle-right-color: currentColor;
    }

    &--title {
      min-height: 70px;
      padding: 8px 20px;
      font-weight: 700;
      line-height: 22px;
    }
  }

  &__icon {
    flex-shrink: 0;

    &--angle-right {
      width: 6px;
      height: 20px;
      margin-left: 10px;
      color: var(--icon--angle-right-color);
    }
  }
}
</style>

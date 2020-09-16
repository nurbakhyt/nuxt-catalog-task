<template>
  <form class="search">
    <label class="search__wrapper" aria-label="Поиск">
      <input class="search__input" ref="input" type="search" placeholder="Поиск по каталогу" v-model="query">
      <button class="search__btn" aria-label="Искать" type="submit" :disabled="!query">
        <Icon class="search__icon search__icon--search" name="gm-search" />
      </button>
    </label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  --input-background-color: hsl(215, 38%, 94%);
  --input-border-color: hsl(215, 38%, 94%);

  position: relative;

  &__wrapper {
    display: block;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    background: $white;
    border: none;
  }

  &__input {
    display: block;
    width: 100%;
    padding: 7px 30px 7px 8px;
    overflow: hidden;
    font-family: $font-family-montserrat;
    font-size: 14px;
    line-height: 20px;
    text-overflow: ellipsis;
    word-break: break-all;
    background: var(--input-background-color);
    border: 1px solid var(--input-border-color);
    border-radius: 3px;
    outline: 0;
    -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
    -webkit-appearance: none;

    @media (min-width: $screen-lg) {
      padding: 11px 46px 11px 15px;
      font-size: 15px;
    }

    &::placeholder {
      font-size: 14px;
      color: hsla(198, 64%, 25%, 0.6);

      @media (min-width: $screen-lg) {
        font-size: 15px;
      }
    }

    &:focus,
    &:active {
      --input-border-color: hsla(198, 64%, 25%, 0.6);
    }
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    width: 30px;
    padding: 0;
    color: hsl(0, 0%, 0%);
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;

    @media (min-width: $screen-lg) {
      width: 46px;
    }

    &:disabled {
      pointer-events: none;
      cursor: text;
    }
  }

  &__icon {
    &--search {
      width: 14px;
      height: 14px;
      color: hsla(198, 64%, 25%, 0.6);

      @media (min-width: $screen-lg) {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>

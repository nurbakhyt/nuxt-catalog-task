<template>
  <div class="menu__col">
    <ul class="list">
      <li
        v-for="id in currentLevelIds"
        :key="map[id].id"
        class="list__item"
        @mouseover="setActive(map[id].id)"
      >
        <nuxt-link
          :to="`/catalog/${map[id].slug}-${map[id].id}`"
          :class="['list__link', { 'list__link--active': activeItems[level] === id }]"
        >
          {{ map[id].name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    level: {
      type: Number,
      required: true,
    },
    activeItems: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters('the_menu', [
      'map',
      'byLevel',
    ]),
    firstLevel() {
      return this.level === 0;
    },
    prevLevel() {
      if (this.firstLevel) return 0;

      return this.level - 1;
    },
    currentLevelIds() {
      if (this.firstLevel) return this.byLevel[this.level];

      if (this.activeItems[this.prevLevel] > 0) {
        return this.map[this.activeItems[this.prevLevel]].submenu;
      }

      return [];
    },
  },
  methods: {
    setActive(id) {
      this.$emit('setActive', id);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu__col {
  flex: 1 1 0;
  border-right: 1px solid $gray-lighten;
}

.list {
  padding: 0;
  list-style: none;

  &__link {
    display: flex;
    width: 100%;
    padding: 6px 8px;
    font-size: 14px;

    &--active {
      color: white;
      background-color: $primary-color;
    }
  }
}
</style>

<template>
  <div :class="['menu', { 'menu--hidden': !status }]">
    <menu-column
      v-for="(_, idx) in byLevel"
      :key="idx"
      :level="idx"
      :active-items="activeItemsByLevel"
      @setActive="setActive"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import menuColumn from './menu/menuColumn.vue';

export default {
  components: { menuColumn },
  data() {
    return {
      activeItemsByLevel: [],
    };
  },
  computed: mapGetters('the_menu', [
    'items',
    'status',
    'map',
    'byLevel',
  ]),
  async mounted() {
    await this.initCatalog();

    this.activeItemsByLevel = Array(this.byLevel.length).fill(0);
  },
  methods: {
    ...mapActions('the_menu', ['initCatalog']),
    setActive(id) {
      const level = this.map[id].depth;

      this.activeItemsByLevel = this.activeItemsByLevel
        .map((levelItems, idx) => {
          if (idx > level) return 0;

          if (idx === level) return id;

          return levelItems;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  top: 4px;
  right: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  background: white;
  border-radius: 4px;
  box-shadow: 0 3px 8px $gray-light;
  z-index: 2;

  &--hidden {
    display: none;
  }
}
</style>

export const normalizer = (arr = [], depth = 0) => arr.reduce((obj, item) => {
  if ('submenu' in item) {
    return {
      ...obj,
      [item.id]: {
        ...item,
        depth,
        submenu: item.submenu.map((sub) => sub.id),
      },
      ...normalizer(item.submenu, depth + 1),
    };
  }

  return {
    ...obj,
    [item.id]: {
      ...item,
      depth,
    },
  };
}, {});

export default {
  namespaced: true,
  state() {
    return {
      status: false,
      items: [],
      map: {},
    };
  },
  getters: {
    status: (state) => state.status,
    items: (state) => state.items,
    map: (state) => state.map,
    byLevel: (state) => Object.keys(state.map).reduce((arr, key) => {
      let level = arr[state.map[key].depth];

      if (!level) {
        level = [];
      }

      level = [
        ...level,
        state.map[key].id,
      ];

      arr[state.map[key].depth] = level;

      return arr;
    }, []),
  },
  actions: {
    toggle({ commit, getters }) {
      if (getters.status) {
        commit('HIDE_MENU');
      } else {
        commit('SHOW_MENU');
      }
    },
    async initCatalog({ commit }) {
      const items = await this.$axios.$get('categories_tree');

      commit('SET_CATEGORIES', items);

      commit('NORMALIZE', normalizer(items));
    },
  },
  mutations: {
    SHOW_MENU(state) {
      state.status = true;
    },
    HIDE_MENU(state) {
      state.status = false;
    },
    SET_CATEGORIES(state, items) {
      state.items = items;
    },
    NORMALIZE(state, map) {
      state.map = map;
    },
  },
};

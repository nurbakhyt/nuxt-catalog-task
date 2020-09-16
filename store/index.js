export default {
  state() {
    return {
      initialized: false,
    };
  },
  actions: {
    async INIT({ state, commit }) {
      if (state.initialized) return;

      commit('SET_INITIALIZED', true);
    },
  },
  mutations: {
    SET_INITIALIZED(state, val) {
      state.initialized = val;
    },
  },
};

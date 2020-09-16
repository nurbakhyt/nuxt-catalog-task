import Vue from 'vue';

// Ignore globally registered components
Vue.config.ignoredElements.push(
  'nuxt-link',
  'client-only',
  'Icon',
  'AppImg',
);

Vue.config.productionTip = false;

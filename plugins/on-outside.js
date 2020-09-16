import Vue from 'vue';

const events = ['click'];
const instances = [];

const onEvent = (e) => {
  instances.forEach(({ el, fn }) => {
    if (e.target !== el && !el.contains(e.target)) {
      return fn && fn(e);
    }
  });
};

Vue.directive('on-outside', {
  bind(el, binding) {
    instances.push({ el, fn: binding.value });

    if (instances.length === 1) {
      events.forEach((e) => document.addEventListener(e, onEvent));
    }
  },
  update(el, binding) {
    if (typeof binding.value !== 'function') {
      throw new Error('Argument must be a function');
    }

    const instance = instances.find((i) => i.el === el);

    instance.fn = binding.value;
  },
  unbind(el) {
    const instanceIndex = instances.findIndex((i) => i.el === el);

    if (instanceIndex >= 0) {
      instances.splice(instanceIndex, 1);
    }

    if (instances.length === 0) {
      events.forEach((e) => document.removeEventListener(e, onEvent));
    }
  },
});

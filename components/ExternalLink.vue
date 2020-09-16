<template>
  <a class="external-link" v-if="href" :href="href" :rel="rel" :target="target"><slot>{{ label }}</slot></a>
</template>

<script>
export default {
  props: {
    href: { type: String, required: true },
    label: { type: String, default: '' },
    target: { type: String, default: '_blank' },
    rel: { type: String, default: 'noopener, noreferrer, noindex, nofollow' },
  },
};
</script>

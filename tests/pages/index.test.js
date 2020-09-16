import { shallowMount } from '@vue/test-utils';

import index from '~/pages/index.vue';

let $device;

beforeEach(() => {
  $device = {};
});

const createWrapper = () => shallowMount(index, {
  mocks: {
    $device,
  },
});

describe('Main page', () => {
  it('renders "main-page"', () => {
    const wrapper = createWrapper();

    expect(wrapper.html()).toMatch('main-page');
  });
});

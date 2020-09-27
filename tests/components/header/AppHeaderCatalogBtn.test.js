import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AppHeaderCatalogBtn from '~/components/AppHeader/buttons/AppHeaderCatalogBtn.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('AppHeaderCatalogBtn.vue', () => {
  it('вызывает Vuex action toggle при клике', () => {
    const actions = {
      toggle: jest.fn(),
    };

    const store = new Vuex.Store({
      modules: {
        the_menu: {
          namespaced: true,
          actions,
        },
      },
    });

    const wrapper = shallowMount(AppHeaderCatalogBtn, {
      store,
      localVue,
    });

    wrapper.find('.header-catalog-btn').trigger('click');

    expect(actions.toggle).toHaveBeenCalled();
  });
});

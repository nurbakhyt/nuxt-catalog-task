import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import menuColumn from '~/components/AppHeader/menu/menuColumn.vue';
import menuModule from '~/store/the_menu';
import fakeMenu from '~/tests/fixtures/menu.json';
import normalizedFakeMenu from '~/tests/fixtures/normalized-menu.json';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('menuColumn.vue', () => {
  let wrapper;
  let store;
  let menuState;

  beforeEach(() => {
    menuState = {
      status: false,
      items: fakeMenu,
      map: normalizedFakeMenu,
    };

    store = new Vuex.Store({
      modules: {
        the_menu: {
          namespaced: true,
          state: menuState,
          getters: menuModule.getters,
        },
      },
    });

    wrapper = shallowMount(menuColumn, {
      propsData: {
        level: 0,
        activeItems: [0, 0, 0],
      },
      store,
      localVue,
    });
  });

  it('эммитит при наведении курсора на пункт меню', () => {
    wrapper.findAll('.list__item').at(0).trigger('mouseover');

    expect(wrapper.emitted('setActive')).toBeTruthy();
    expect(wrapper.emitted('setActive')[0][0]).toEqual(20);
  });
});

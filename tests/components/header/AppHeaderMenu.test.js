import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AppHeaderMenu from '~/components/AppHeader/AppHeaderMenu.vue';
import menuModule from '~/store/the_menu';
import fakeMenu from '~/tests/fixtures/menu.json';
import normalizedFakeMenu from '~/tests/fixtures/normalized-menu.json';
import fakeIdsByLevel from '~/tests/fixtures/menuIdsByLevel.json';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('AppHeaderMenu.vue', () => {
  let wrapper;
  let store;
  let actions;
  let menuState;

  beforeEach(() => {
    menuState = {
      status: true,
      items: fakeMenu,
      map: normalizedFakeMenu,
    };

    actions = {
      initCatalog: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        the_menu: {
          namespaced: true,
          state: menuState,
          getters: menuModule.getters,
          actions,
        },
      },
    });

    wrapper = mount(AppHeaderMenu, {
      store,
      localVue,
    });
  });

  it('вызывает Vuex action initCatalog после маунта', () => {
    expect(actions.initCatalog).toHaveBeenCalled();
  });

  it('инициализация списка активных пунктов меню', () => {
    expect(wrapper.vm.activeItemsByLevel.length).toEqual(fakeIdsByLevel.length);
  });

  it('раскрытый список меню', () => {
    expect(wrapper.find('.menu').classes('menu--hidden')).toBeFalsy();
  });

  it('скрытый список меню', () => {
    menuState = {
      ...menuState,
      status: false,
    };

    store = new Vuex.Store({
      modules: {
        the_menu: {
          namespaced: true,
          state: menuState,
          getters: menuModule.getters,
          actions,
        },
      },
    });

    wrapper = mount(AppHeaderMenu, {
      store,
      localVue,
    });

    expect(wrapper.find('.menu').classes('menu--hidden')).toBeTruthy();
  });

  it('активация пунктов меню при наведении курсора', () => {
    wrapper.vm.setActive(20);
    expect(wrapper.vm.activeItemsByLevel).toEqual([20, 0, 0]);

    wrapper.vm.setActive(28);
    expect(wrapper.vm.activeItemsByLevel).toEqual([20, 28, 0]);

    wrapper.vm.setActive(172);
    expect(wrapper.vm.activeItemsByLevel).toEqual([20, 28, 172]);

    wrapper.vm.setActive(171);
    expect(wrapper.vm.activeItemsByLevel).toEqual([20, 28, 171]);

    wrapper.vm.setActive(958);
    expect(wrapper.vm.activeItemsByLevel).toEqual([958, 0, 0]);
  });
});

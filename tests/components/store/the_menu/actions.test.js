import menuModule from '~/store/the_menu';
import fakeMenu from '~/tests/fixtures/menu.json';
import normalizedFakeMenu from '~/tests/fixtures/normalized-menu.json';

const {
  toggle,
  initCatalog,
} = menuModule.actions;

const $axios = {
  $get: jest.fn(() => Promise.resolve(fakeMenu)),
};

const commit = jest.fn();

describe('Экшены the_menu', () => {
  it('переключатель меню', () => {
    const getters = { status: false };

    toggle({ commit, getters });

    expect(commit).toHaveBeenCalledWith('SHOW_MENU');

    getters.status = true;

    toggle({ commit, getters });

    expect(commit).toHaveBeenCalledWith('HIDE_MENU');
  });

  it('инициализация меню', async () => {
    await initCatalog.call({ $axios }, { commit });

    expect(commit).toHaveBeenCalledWith('SET_CATEGORIES', fakeMenu);
    expect(commit).toHaveBeenCalledWith('NORMALIZE', normalizedFakeMenu);
  });
});

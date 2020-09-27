import menuModule from '~/store/the_menu';

const {
  SHOW_MENU,
  HIDE_MENU,
  SET_CATEGORIES,
  NORMALIZE,
} = menuModule.mutations;

describe('Мутации the_menu', () => {
  it('SHOW_MENU', () => {
    const state = { status: false };

    SHOW_MENU(state);

    expect(state.status).toBeTruthy();
  });

  it('HIDE_MENU', () => {
    const state = { status: true };

    HIDE_MENU(state);

    expect(state.status).toBeFalsy();
  });

  it('SET_CATEGORIES', () => {
    const state = { items: [] };
    const data = [1, 2, 3];

    SET_CATEGORIES(state, data);

    expect(state.items).toEqual(data);
  });

  it('NORMALIZE', () => {
    const state = { map: {} };
    const data = {
      1: { name: 'foo' },
      2: { name: 'bar' },
    };

    NORMALIZE(state, data);

    expect(state.map).toEqual(data);
  });
});

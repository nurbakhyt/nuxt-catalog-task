import menuModule, { normalizer } from '~/store/the_menu';
import fakeMenu from '~/tests/fixtures/menu.json';
import normalizedFakeMenu from '~/tests/fixtures/normalized-menu.json';

const state = {
  status: false,
  items: fakeMenu,
  map: normalizer(fakeMenu),
};

const fakeIdsByLevel = [
  [20, 958],
  [28],
  [171, 172],
];

const { getters } = menuModule;

describe('Геттеры the_menu', () => {
  it('Статус показа меню', () => {
    const status = getters.status(state);

    expect(status).toBeFalsy();
  });

  it('Получение items', () => {
    const items = getters.items(state);

    expect(items).toEqual(fakeMenu);
  });

  it('Получение map', () => {
    const map = getters.map(state);

    expect(map).toEqual(normalizedFakeMenu);
  });

  it('Получение массива по уровням byLevel', () => {
    expect(getters.byLevel(state)).toEqual(fakeIdsByLevel);
  });
});

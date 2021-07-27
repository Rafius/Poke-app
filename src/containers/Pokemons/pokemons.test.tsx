import React from 'react';
import Pokemon from './Pokemons';
import { renderWithState } from '../../utils/render-test-utils';
import { pokemonsDataSelector } from '../../redux/pokemons';

jest.mock('../../redux/pokemons/pokemons-selectors.ts', () => ({
  pokemonsDataSelector: jest.fn(),
  pokemonsFilterSelector: jest.fn()
}));

describe('Pokemon list container', () => {
  beforeEach(() => {
    pokemonsDataSelector.mockReturnValue([
      {
        name: 'a',
        url: 'test'
      },
      {
        name: 'b',
        url: 'test'
      }
    ]);
  });

  it('Should list pokemon container', () => {
    const { getByTestId } = renderWithState(<Pokemon />);
    expect(getByTestId('pokemon-container')).toBeDefined();
  });

  it('Should render as many pokemon as you pass to it', () => {
    const { queryAllByTestId } = renderWithState(<Pokemon />);
    expect(queryAllByTestId('pokemon-item').length).toBe(2);
  });

  it('Shouldn´t render any pokemon', () => {
    pokemonsDataSelector.mockReturnValue([]);
    const { queryAllByTestId } = renderWithState(<Pokemon />);
    expect(queryAllByTestId('pokemon-item').length).toBe(0);
  });
});

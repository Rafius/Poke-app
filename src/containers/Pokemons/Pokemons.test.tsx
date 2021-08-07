import React from 'react';
import Pokemon from './Pokemons';
import { renderWithState } from '../../utils/render-test-utils';
import {
  pokemonsDataSelector,
  pokemonsIsLoadingSelector
} from '../../redux/pokemons';

jest.mock('../../redux/pokemons/pokemons-selectors.ts', () => ({
  pokemonsDataSelector: jest.fn(),
  pokemonsFilterSelector: jest.fn(),

  pokemonsIsLoadingSelector: jest.fn()
}));

describe('Pokemon list container', () => {
  beforeEach(() => {
    pokemonsDataSelector.mockReturnValue([
      {
        name: 'bulbasur',
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
      },
      {
        name: 'ivysaur',
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
      },
      {
        name: 'venusaur',
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
      }
    ]);
    pokemonsIsLoadingSelector.mockReturnValue(false);
  });

  it('Should render pokemons container', () => {
    const { getByTestId } = renderWithState(<Pokemon />);
    expect(getByTestId('pokemons-container')).toBeDefined();
  });

  it('Should render as many pokemons as you pass to it', () => {
    const { queryAllByTestId } = renderWithState(<Pokemon />);
    expect(queryAllByTestId('pokemon-item').length).toBe(3);
  });

  it('Shouldn´t render any pokemon if data is null', () => {
    pokemonsDataSelector.mockReturnValue([]);
    const { queryAllByTestId } = renderWithState(<Pokemon />);
    expect(queryAllByTestId('pokemon-item').length).toBe(0);
  });

  it('Shouldn´t render pokemons container if is loading', () => {
    pokemonsIsLoadingSelector.mockReturnValue(true);
    const { getByTestId } = renderWithState(<Pokemon />);
    expect(getByTestId('loader-container')).toBeDefined();
  });
});

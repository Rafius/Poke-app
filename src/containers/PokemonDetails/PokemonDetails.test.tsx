import React from 'react';
import PokemonDetails from './PokemonDetails';
import { renderWithState } from '../../utils/render-test-utils';
import {
  pokemonsCurrentPokemonSelector,
  pokemonsEvolutionsSelector,
  pokemonsIsLoadingSelector
} from '../../redux/pokemons';

jest.mock('../../redux/pokemons/pokemons-selectors.ts', () => ({
  pokemonsCurrentPokemonSelector: jest.fn(),
  pokemonsEvolutionsSelector: jest.fn(),
  pokemonsIsLoadingSelector: jest.fn()
}));

describe('Pokemon list container', () => {
  beforeEach(() => {
    pokemonsIsLoadingSelector.mockReturnValue(false);
    pokemonsCurrentPokemonSelector.mockReturnValue({
      types: [
        {
          slot: 1,
          type: {
            name: 'grass',
            url: 'https://pokeapi.co/api/v2/type/12/'
          }
        },
        {
          slot: 2,
          type: {
            name: 'poison',
            url: 'https://pokeapi.co/api/v2/type/4/'
          }
        }
      ]
    });
    pokemonsEvolutionsSelector.mockReturnValue({});
  });

  it('Should render PokemonDetails container', () => {
    const { getByTestId } = renderWithState(<PokemonDetails />);
    expect(getByTestId('pokemon-details-container')).toBeDefined();
  });

  it('Shouldn´t render PokemonDetailss container if is loading', () => {
    pokemonsIsLoadingSelector.mockReturnValue(true);
    const { getByTestId } = renderWithState(<PokemonDetails />);
    expect(getByTestId('loader-container')).toBeDefined();
  });
});

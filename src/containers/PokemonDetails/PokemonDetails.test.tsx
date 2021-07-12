import React from 'react';
import PokemonDetails from './PokemonDetails';
import { renderWithState } from '../../utils/render-test-utils';
import { pokemonsCurrentPokemonSelector } from '../../redux/pokemons';

jest.mock('../../redux/pokemons/pokemons-selectors.ts', () => ({
  pokemonsCurrentPokemonSelector: jest.fn().mockReturnValue({
    pokemon: { height: 1, types: 2, sprites: 3, name: 4 }
  })
}));

describe('Pokemon list container', () => {
  it('Should list pokemon container', () => {
    pokemonsCurrentPokemonSelector.mockReturnValue({
      pokemon: { height: 1, types: 2, sprites: 3, name: 4 }
    });

    const { getByTestId } = renderWithState(<PokemonDetails />);
    expect(getByTestId('pokemon-details-container')).toBeDefined();
  });
});

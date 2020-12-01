import React from 'react';
import PokemonDetails from './pokemon-details';
import { renderWithState } from '../../utils/render-test-utils';

jest.mock('../../redux/pokemon/pokemon-selectors.ts', () => ({
  pokemonSelector: jest.fn()
}))

describe('Pokemon list container', () => {
  it('Should list pokemon container', () => {
    const { getByTestId } = renderWithState(<PokemonDetails />);
    expect(getByTestId('pokemon-details-container')).toBeDefined();
  })
});

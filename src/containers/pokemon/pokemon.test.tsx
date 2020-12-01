import React from 'react';
import Pokemon from './pokemon';
import { renderWithState } from '../../utils/render-test-utils';
import { pokemonSelector } from '../../redux/pokemon';

jest.mock('../../redux/pokemon/pokemon-selectors.ts', () => ({
  pokemonSelector: jest.fn()
}))

describe('Pokemon list container', () => {
  it('Should list pokemon container', () => {
    const { getByTestId } = renderWithState(<Pokemon />);
    expect(getByTestId('pokemon-container')).toBeDefined();
  })

  it('Should render as many pokemon as you pass to it', () => {
    pokemonSelector.mockReturnValue([{
        height:1,
        name: "a",
        sprites: "img",
        id:1
      },
      {
        height:2,
        name: "a",
        sprites: "img",
        id:2
      }
    ])

    const { queryAllByTestId } = renderWithState(<Pokemon />);
    expect(queryAllByTestId('pokemon-item').length).toBe(2)
  })

  it('Shouldn´t render any pokemon ', () => {
    const { queryAllByTestId } = renderWithState(<Pokemon />);
    expect(queryAllByTestId('pokemon-item').length).toBe(0)
  })
});

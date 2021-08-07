import {
  pokemonsSelector,
  pokemonsDataSelector,
  pokemonsCurrentPokemonSelector,
  pokemonsFilterSelector,
  pokemonsIsLoadingSelector,
  pokemonsEvolutionsSelector
} from '.';

let state: any;

describe('Pokemons actions', () => {
  beforeEach(() => {
    state = {
      pokemons: {
        data: [
          {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/'
          }
        ],
        filter: 'bulba',
        currentPokemon: {
          name: 'bulbasaur'
        },
        isLoading: false,
        evolutions: []
      }
    };
  });

  it('pokemonsSelector', () => {
    expect(pokemonsSelector(state)).toEqual(state.pokemons);
  });

  it('pokemonsDataSelector', () => {
    expect(pokemonsDataSelector(state)).toEqual(state.pokemons.data);
  });

  it('pokemonsDataSelector data', () => {
    state.pokemons.filter = '';
    expect(pokemonsDataSelector(state)).toEqual(state.pokemons.data);
  });

  it('pokemonsCurrentPokemonSelector', () => {
    expect(pokemonsCurrentPokemonSelector(state)).toEqual({
      name: 'bulbasaur'
    });
  });

  it('pokemonsFilterSelector', () => {
    expect(pokemonsFilterSelector(state)).toEqual('bulba');
  });

  it('pokemonsIsLoadingSelector', () => {
    expect(pokemonsIsLoadingSelector(state)).toEqual(false);
  });

  it('pokemonsEvolutionsSelector', () => {
    expect(pokemonsEvolutionsSelector(state)).toEqual([]);
  });
});

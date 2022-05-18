import {
  CLEAN_FILTER_POKEMONS_BY_NAME,
  FILTER_POKEMONS_BY_NAME,
  GET_POKEMONS,
  GET_POKEMONS_SUCCESS,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_ID_SUCCESS
} from '.';
import pokemonsReducer from './pokemons-reducer';
import pokemonsResponse from './__mocks__/pokemonsMock';

describe('Pokemons reducer', () => {
  it('getPokemons action', () => {
    const action = {
      type: GET_POKEMONS,
      payload: pokemonsResponse
    };
    const res: any = pokemonsReducer({}, action);
    expect(res.isLoading).toBeTruthy();
  });

  it('should set the data from get pokemons', () => {
    const action = {
      type: GET_POKEMONS_SUCCESS,
      payload: pokemonsResponse
    };
    const res: any = pokemonsReducer({}, action);
    expect(res.isLoading).toBeFalsy();
  });

  it('should set the data from get pokemon by id', () => {
    const action = {
      type: GET_POKEMON_BY_ID,
      payload: pokemonsResponse
    };
    const res: any = pokemonsReducer({}, action);
    expect(res.isLoading).toBeTruthy();
  });

  it('should set the data from get pokemon by id success', () => {
    const action = {
      type: GET_POKEMON_BY_ID_SUCCESS,
      payload: 'bulbasaur'
    };
    const res: any = pokemonsReducer({}, action);
    expect(res.isLoading).toBeFalsy();
    expect(res.currentPokemon).toEqual('bulbasaur');
  });

  it('should set the data from filter pokemon by name', () => {
    const action = {
      type: FILTER_POKEMONS_BY_NAME,
      payload: 'bulbasaur'
    };
    const res: any = pokemonsReducer({}, action);
    expect(res.filter).toEqual('bulbasaur');
  });

  it('should clean the data from filter pokemon by name', () => {
    const action = {
      type: CLEAN_FILTER_POKEMONS_BY_NAME
    };
    const res: any = pokemonsReducer({}, action);
    expect(res.filter).toBe('');
  });
});

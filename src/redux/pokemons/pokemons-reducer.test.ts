import {
  cleanFilterPokemonsByName,
  CLEAN_FILTER_POKEMONS_BY_NAME,
  filterPokemonsByName,
  FILTER_POKEMONS_BY_NAME,
  getPokemonById,
  getPokemonByIdFail,
  getPokemonByIdSuccess,
  getPokemonEvolutionsById,
  getPokemonEvolutionsByIdSuccess,
  getPokemons,
  getPokemonsFail,
  getPokemonsSuccess,
  GET_POKEMONS,
  GET_POKEMONS_FAIL,
  GET_POKEMONS_SUCCESS,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_ID_FAIL,
  GET_POKEMON_BY_ID_SUCCESS,
  GET_POKEMON_EVOLUTIONS_BY_ID,
  GET_POKEMON_EVOLUTIONS_BY_ID_SUCCESS
} from '.';
import pokemonsReducer from './pokemons-reducer';
import { PokemonsTypes } from './pokemons-types';
import pokemonsResponse from './__mocks__/pokemonsMock';

describe('Pokemons reducer', () => {
  it('getPokemons action', () => {
    const action = {
      type: GET_POKEMONS,
      payload: pokemonsResponse
    };
    const res: PokemonsTypes = pokemonsReducer({}, action);
    expect(res.isLoading).toBeTruthy();
  });

  it('should set the data from get pokemons', () => {
    const action = {
      type: GET_POKEMONS_SUCCESS,
      payload: pokemonsResponse
    };
    const res: PokemonsTypes = pokemonsReducer({}, action);
    expect(res.isLoading).toBeFalsy();
  });

  it('should set the data from get pokemon by id', () => {
    const action = {
      type: GET_POKEMON_BY_ID,
      payload: pokemonsResponse
    };
    const res: PokemonsTypes = pokemonsReducer({}, action);
    expect(res.isLoading).toBeTruthy();
  });

  it('should set the data from get pokemon by id success', () => {
    const action = {
      type: GET_POKEMON_BY_ID_SUCCESS,
      payload: 'bulbasaur'
    };
    const res: PokemonsTypes = pokemonsReducer({}, action);
    expect(res.isLoading).toBeFalsy();
    expect(res.currentPokemon).toEqual('bulbasaur');
  });

  it('should set the data from filter pokemon by name', () => {
    const action = {
      type: FILTER_POKEMONS_BY_NAME,
      payload: 'bulbasaur'
    };
    const res: PokemonsTypes = pokemonsReducer({}, action);
    expect(res.filter).toEqual('bulbasaur');
  });

  it('should clean the data from filter pokemon by name', () => {
    const action = {
      type: CLEAN_FILTER_POKEMONS_BY_NAME
    };
    const res: PokemonsTypes = pokemonsReducer({}, action);
    expect(res.filter).toBe('');
  });

  it('should set the data from get pokemon evolution by id', () => {
    const action = {
      type: GET_POKEMON_EVOLUTIONS_BY_ID_SUCCESS,
      payload: 'bulbasaur'
    };
    const res: PokemonsTypes = pokemonsReducer({}, action);
    expect(res.evolutions).toBe('bulbasaur');
  });
});

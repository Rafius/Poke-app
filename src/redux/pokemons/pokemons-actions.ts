import { PokemonTypes } from './pokemons-types';

export const GET_POKEMONS: string = 'GET_POKEMONS';
export const GET_POKEMONS_SUCCESS: string = 'GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_FAIL: string = 'GET_POKEMONS_FAIL';
export const GET_POKEMON_BY_ID: string = 'GET_POKEMON_BY_ID';
export const GET_POKEMON_BY_ID_SUCCESS: string =
  'GET_POKEMON_BY_ID_SUCCESS';
export const GET_POKEMON_BY_ID_FAIL: string =
  'GET_POKEMON_BY_ID_FAIL';
export const FILTER_POKEMONS_BY_NAME: string =
  'FILTER_POKEMONS_BY_NAME';
export const CLEAN_FILTER_POKEMONS_BY_NAME: string =
  'CLEAN_FILTER_POKEMONS_BY_NAME';
export const GET_POKEMON_EVOLUTIONS_BY_ID: string =
  'GET_POKEMON_EVOLUTIONS_BY_ID';
export const GET_POKEMON_EVOLUTIONS_BY_ID_SUCCESS: string =
  'GET_POKEMON_EVOLUTIONS_BY_ID_SUCCESS';

export const getPokemons = () => ({
  type: GET_POKEMONS
});

export const getPokemonsSuccess = (payload: any): PokemonTypes => ({
  type: GET_POKEMONS_SUCCESS,
  payload
});

export const getPokemonsFail = (payload: any): PokemonTypes => ({
  type: GET_POKEMONS_FAIL,
  payload
});

export const getPokemonById = (id: number): PokemonTypes => ({
  type: GET_POKEMON_BY_ID,
  id
});

export const getPokemonByIdSuccess = (
  payload: any
): PokemonTypes => ({
  type: GET_POKEMON_BY_ID_SUCCESS,
  payload
});

export const getPokemonByIdFail = (payload: any): PokemonTypes => ({
  type: GET_POKEMON_BY_ID_FAIL,
  payload
});

export const filterPokemonsByName = (payload: any): PokemonTypes => ({
  type: FILTER_POKEMONS_BY_NAME,
  payload
});

export const cleanFilterPokemonsByName = () => ({
  type: CLEAN_FILTER_POKEMONS_BY_NAME
});

export const getPokemonEvolutionsById = (id: number) => ({
  type: GET_POKEMON_EVOLUTIONS_BY_ID,
  id
});

export const getPokemonEvolutionsByIdSuccess = (payload: any) => ({
  type: GET_POKEMON_EVOLUTIONS_BY_ID_SUCCESS,
  payload
});

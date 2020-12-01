import { PokemonTypes } from './pokemon-types';

export const GET_POKEMON_START: string = 'GET_POKEMON_START';
export const GET_POKEMON_SUCCESS: string = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAIL: string = 'GET_POKEMON_FAIL';

export const getPokemonStart = ({ count }: any): PokemonTypes => ({
  type: GET_POKEMON_START,
  count
});

export const getPokemonSuccess = (payload: any): PokemonTypes => ({
  type: GET_POKEMON_SUCCESS,
  payload
});

export const getPokemonFail = (payload: any): PokemonTypes => ({
  type: GET_POKEMON_FAIL,
  payload
});

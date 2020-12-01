import {
  GET_POKEMON_FAIL,
  GET_POKEMON_START,
  GET_POKEMON_SUCCESS
} from './pokemon-actions';

import { PokemonTypes } from './pokemon-types';

const initialState: [] = [];

export const pokemonReducer = (
  state = initialState,
  action: PokemonTypes
) => {
  switch (action.type) {
    case GET_POKEMON_START:
      return state;
    case GET_POKEMON_SUCCESS:
      return action.payload;
    case GET_POKEMON_FAIL:
      return state;
    default:
      return state;
  }
};

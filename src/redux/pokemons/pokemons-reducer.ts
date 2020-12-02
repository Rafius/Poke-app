import {
  GET_POKEMONS_START,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAIL,
  GET_POKEMON_BY_ID_FAIL,
  GET_POKEMON_BY_ID_START,
  GET_POKEMON_BY_ID_SUCCESS,
  FILTER_POKEMONS_BY_NAME,
  CLEAN_FILTER_POKEMONS_BY_NAME
} from './pokemons-actions';

import {PokemonTypes} from './pokemons-types';

const initialState: any = {
  data: [],
  currentPokemon: {},
  filter: ''
};

export const pokemonsReducer = (
  state = initialState,
  action: PokemonTypes
) => {
  switch (action.type) {
    case GET_POKEMONS_START:
      return state;
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        data: action.payload.results
      };
    case GET_POKEMONS_FAIL:
      return state;
    case GET_POKEMON_BY_ID_START:
      return state;
    case GET_POKEMON_BY_ID_SUCCESS:
      return {
        ...state,
        currentPokemon: action.payload
      };
    case GET_POKEMON_BY_ID_FAIL:
      return state;
    case FILTER_POKEMONS_BY_NAME:
      return {
        ...state,
        filter: action.payload
      };
    case CLEAN_FILTER_POKEMONS_BY_NAME:
      return {
        ...state,
        filter: ''
      };
    default:
      return state;
  }
};

import { reducerFactory } from '../reducer-factory';
import {
  GET_POKEMONS,
  GET_POKEMONS_SUCCESS,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_ID_SUCCESS,
  FILTER_POKEMONS_BY_NAME,
  CLEAN_FILTER_POKEMONS_BY_NAME
} from './pokemons-actions';

import { PokemonTypes } from './pokemons-types';

const initialState: any = {
  data: [],
  currentPokemon: {},
  filter: '',
  isLoading: false
};

const getPokemonsHandler = (state: PokemonTypes) => {
  return {
    ...state,
    isLoading: true
  };
};

const getPokemonsSuccessHandler = (
  state: PokemonTypes,
  action: { payload: { results: any } }
) => {
  return {
    ...state,
    data: action.payload.results,
    isLoading: false
  };
};

const getPokemonByIdHandler = (state: PokemonTypes) => {
  return {
    ...state,
    isLoading: true
  };
};

const getPokemonByIdSuccessHandler = (
  state: PokemonTypes,
  action: { payload: any }
) => {
  return {
    ...state,
    currentPokemon: action.payload,
    isLoading: false
  };
};

const filterPokemonsByNameHandler = (
  state: PokemonTypes,
  action: { payload: any }
) => {
  return {
    ...state,
    filter: action.payload
  };
};

const cleanPokemonsByNameHandler = (
  state: PokemonTypes,
  action: { payload: any }
) => {
  return {
    ...state,
    filter: ''
  };
};

const handlers = {
  [GET_POKEMONS]: getPokemonsHandler,
  [GET_POKEMONS_SUCCESS]: getPokemonsSuccessHandler,
  [GET_POKEMON_BY_ID]: getPokemonByIdHandler,
  [GET_POKEMON_BY_ID_SUCCESS]: getPokemonByIdSuccessHandler,
  [FILTER_POKEMONS_BY_NAME]: filterPokemonsByNameHandler,
  [CLEAN_FILTER_POKEMONS_BY_NAME]: cleanPokemonsByNameHandler
};

export default reducerFactory(initialState, handlers);

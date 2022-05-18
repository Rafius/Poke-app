import { call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from '../../utils/fetch-api';
import {
  getPokemonByIdFail,
  getPokemonByIdSuccess,
  getPokemonsFail,
  getPokemonsSuccess,
  GET_POKEMONS,
  GET_POKEMON_BY_ID
} from './pokemons-actions';
import { Pokemon, PokemonsList } from './pokemons-types';

function* getPokemons() {
  try {
    const response: PokemonsList = yield call(fetchApi, {
      url: 'https://pokeapi.co/api/v2/pokemon?limit=898',
      method: 'GET'
    });
    yield put(getPokemonsSuccess(response));
  } catch (e) {
    yield put(getPokemonsFail(e));
  }
}

function* getPokemonById({ id }: any) {
  try {
    const response: Pokemon = yield call(fetchApi, {
      url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      method: 'GET'
    });
    yield put(getPokemonByIdSuccess(response));
  } catch (e) {
    yield put(getPokemonByIdFail(e));
  }
}

export default function* pokemonSaga() {
  yield takeLatest(GET_POKEMONS, getPokemons);
  yield takeLatest(GET_POKEMON_BY_ID, getPokemonById);
}

import { call, put, takeEvery } from 'redux-saga/effects';
import fetchApi from '../../utils/fetch-api';
import {
  getPokemonByIdFail,
  getPokemonByIdSuccess,
  getPokemonsFail,
  getPokemonsSuccess,
  GET_POKEMONS_START,
  GET_POKEMON_BY_ID_START
} from './pokemons-actions';
import { hideLoader, showLoader } from '../loader/loader-actions';
import { PokemonsReqPayload } from './pokemons-types';

export interface PokemonSagaPayload {
  id: number;
}
// https://pokeapi.co/api/v2/egg-group/
function* getPokemons() {
  try {
    yield put(showLoader());
    const response = yield call(
      fetchApi,
      'https://pokeapi.co/api/v2/pokemon?limit=898',
      {
        method: 'GET'
      }
    );
    yield put(getPokemonsSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(getPokemonsFail(e));
  } finally {
    yield put(hideLoader());
  }
}

function* getPokemonById({ id }: PokemonSagaPayload) {
  try {
    yield put(showLoader());
    const a: [] = [];

    a.flat();
    const response: PokemonsReqPayload = yield call(
      fetchApi,
      `https://pokeapi.co/api/v2/pokemon/${id}`,
      {
        method: 'GET'
      }
    );
    yield put(getPokemonByIdSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(getPokemonByIdFail(e));
  } finally {
    yield put(hideLoader());
  }
}

export default function* pokemonSaga() {
  yield takeEvery(GET_POKEMONS_START, getPokemons);
  // @ts-ignore
  yield takeEvery(GET_POKEMON_BY_ID_START, getPokemonById);
}

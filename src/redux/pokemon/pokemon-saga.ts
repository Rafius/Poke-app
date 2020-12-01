import {all, call, put, takeEvery} from 'redux-saga/effects';
import fetchApi from '../../utils/fetch-api';
import {
  getPokemonSuccess,
  GET_POKEMON_START
} from './pokemon-actions';
import {hideLoader, showLoader} from '../loader/loader-actions';

export interface PokemonSagaPayload {
  count: number;
}
function* getPokemon({count}: PokemonSagaPayload) {
  try {
    yield put(showLoader());
    const response = yield all(
      [...Array(count)].map((_, i) =>
        call(fetchApi, `https://pokeapi.co/api/v2/pokemon/${++i}`, {
          method: 'GET'
        })
      )
    );
    yield put(getPokemonSuccess(response));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(hideLoader());
  }
}

export default function* pokemonSaga() {
  // @ts-ignore
  yield takeEvery(GET_POKEMON_START, getPokemon);
}

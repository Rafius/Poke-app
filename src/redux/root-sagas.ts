import { all, fork } from 'redux-saga/effects';

import { pokemonsSagas } from './pokemons';

export default function* rootSaga() {
  yield all([fork(pokemonsSagas)]);
}

import {all, fork} from 'redux-saga/effects';

import pokemons from './pokemons/pokemons-saga';

export default function* rootSaga() {
  yield all([fork(pokemons)]);
}

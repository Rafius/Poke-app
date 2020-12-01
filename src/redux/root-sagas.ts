import { all, fork } from 'redux-saga/effects';

import pokemon from './pokemon/pokemon-saga';

export default function* rootSaga() {
  yield all([fork(pokemon)]);
}

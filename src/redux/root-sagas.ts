import { all, fork } from "redux-saga/effects"

import home from "./home/home-saga"

export default function* rootSaga() {
  yield all([
    fork(home)
  ])
}
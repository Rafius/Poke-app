import { put, takeLatest } from "redux-saga/effects";
import { HOME_START } from "./home-actions";

function* home(){
  try {
    console.log("test")
  }
  catch(e){
    yield put(e)
  }
}

export default function* homeSaga(){
  yield takeLatest(HOME_START, home )
}
import { takeLatest } from 'redux-saga/effects';
import { REQUEST_DOG, REQUEST_DOG_ERROR } from './consts';
import { fetchDog, fetchDogError } from './effects';

export function* requestDogSaga() {
  console.log('requestDogSaga')
  yield takeLatest(REQUEST_DOG, fetchDog);
}

export function* requestDogErrorSaga() {
  yield takeLatest(REQUEST_DOG_ERROR, fetchDogError);
}

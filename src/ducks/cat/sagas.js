import { takeLatest } from 'redux-saga/effects';
import { REQUEST_CAT, REQUEST_CAT_ERROR } from './consts';
import { fetchCat, fetchCatError } from './effects';

export function* requestCatSaga() {
  console.log('requestCatSaga')
  yield takeLatest(REQUEST_CAT, fetchCat);
}

export function* requestCatErrorSaga() {
  yield takeLatest(REQUEST_CAT_ERROR, fetchCatError);
}

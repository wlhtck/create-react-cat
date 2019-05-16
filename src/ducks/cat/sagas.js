import { takeLatest, put, call, delay } from 'redux-saga/effects';
import { FETCH_CAT, FETCH_CAT_ERROR } from './consts';
import { receiveCatSuccess, receiveCatFailure } from './actions';
import axios from 'axios'

function* onFetchCat() {
  try {
    // API Request
    yield delay(1000)
    const response = yield call(axios.get, ['https://api.thecatapi.com/v1/images/search']);
    yield put(receiveCatSuccess(response.data[0]));
  } catch(e) {
    yield put(receiveCatFailure('There was a problem fetching a cat.'));
  }
}

export function* onFetchCatError() {
  try {
    // API Request
    yield delay(1000)
    const response = yield call(axios.get, ['https://api.thecatapi.com/v1/images']);
    yield put(receiveCatSuccess(response.data[0]));
  } catch(e) {
    yield put(receiveCatFailure('There was a problem fetching a cat.'));
  }
}

export function* fetchCatSaga() {
  yield takeLatest(FETCH_CAT, onFetchCat);
}

export function* fetchCatErrorSaga() {
  yield takeLatest(FETCH_CAT_ERROR, onFetchCatError);
}

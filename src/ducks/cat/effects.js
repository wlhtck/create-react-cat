import { put, call, delay } from 'redux-saga/effects';
import { receiveCatSuccess, receiveCatFailure } from './actions';
import axios from 'axios'

export function* fetchCat() {
  try {
    // API Request
    yield delay(1000)
    const response = yield call(axios.get, ['http://localhost:3000/api/cat']);
    yield put(receiveCatSuccess(response.data));
  } catch(e) {
    yield put(receiveCatFailure('There was a problem fetching a cat.'));
  }
}

export function* fetchCatError() {
  try {
    // API Request
    yield delay(1000)
    const response = yield call(axios.get, ['https://api.thecatapi.com/v1/images']);
    yield put(receiveCatSuccess(response.data[0]));
  } catch(e) {
    yield put(receiveCatFailure('There was a problem fetching a cat.'));
  }
}
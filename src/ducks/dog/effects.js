import { put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import { receiveDogSuccess, receiveDogFailure } from './actions';

export function* fetchDog() {
  try {
    // API Request
    yield delay(1000);
    const response = yield call(axios.get, ['http://localhost:3000/api/dog']);
    yield put(receiveDogSuccess(response.data));
  } catch (e) {
    yield put(receiveDogFailure('There was a problem fetching a dog.'));
  }
}

export function* fetchDogError() {
  try {
    // API Request
    yield delay(1000);
    const response = yield call(axios.get, ['https://api.thecatapi.com/v1/images']);
    yield put(receiveDogSuccess(response.data[0]));
  } catch (e) {
    yield put(receiveDogFailure('There was a problem fetching a dog.'));
  }
}

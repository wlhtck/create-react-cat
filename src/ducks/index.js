import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import cat from './cat/reducer';
import dog from './dog/reducer';
import { requestCatSaga, requestCatErrorSaga } from './cat/sagas';
import { requestDogSaga, requestDogErrorSaga } from './dog/sagas';

export default (preloadedState = undefined, composeEnhancers = compose) => {
  function* saga() {
    yield all([
      requestCatSaga(),
      requestCatErrorSaga(),
      requestDogSaga(),
      requestDogErrorSaga(),
    ]);
  }

  const sagaMiddleware = createSagaMiddleware();
  const reducer = combineReducers({
    cat,
    dog,
  });

  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
    ),
  );

  store.sagas = sagaMiddleware.run(saga);

  return store;
};

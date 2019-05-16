import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import cat from './cat/reducer';
import { fetchCatSaga, fetchCatErrorSaga } from './cat/sagas';

function* saga() {
   yield all([
     fetchCatSaga(),
     fetchCatErrorSaga(),
   ]);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  cat,
});

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(saga);

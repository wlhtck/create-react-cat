import '@babel/polyfill';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import init from './ducks';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = init(preloadedState, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);

ReactDOM.hydrate(
  (
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  ),
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

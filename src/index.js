import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import App from './App'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import store from './ducks'

ReactDOM.render(
  <Provider store={store}>
    <AppContainer Component={App} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

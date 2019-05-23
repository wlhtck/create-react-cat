import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Cat from './containers/Cat';
import Dog from './containers/Dog';

export default ({ store }) => (
  <Provider store={store}>
    <Route path="/" exact component={Cat} />
    <Route path="/cat" component={Cat} />
    <Route path="/dog" component={Dog} />
  </Provider>
);

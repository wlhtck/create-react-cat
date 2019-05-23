import React from 'react';
import axios from 'axios';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { receiveCatSuccess, receiveCatFailure } from '../../ducks/cat/actions';
import App from '../../App';
import init from '../../ducks';
import renderPage from '../renderPage';

const fetchCat = async (store) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    store.dispatch(receiveCatSuccess(response.data[0]));
  } catch (e) {
    store.dispatch(receiveCatFailure('There was a problem fetching a cat.'));
  }
};

export default async (req, res) => {
  // Create a new Redux store instance
  const store = init();
  await Promise.all([fetchCat(store)]);

  const html = renderToString(
    <StaticRouter location={req.url}>
      <App store={store} />
    </StaticRouter>,
  );

  const preloadedState = store.getState();

  res.send(renderPage(html, preloadedState));
};

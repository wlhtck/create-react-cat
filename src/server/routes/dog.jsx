import React from 'react';
import axios from 'axios';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { receiveDogSuccess, receiveDogFailure } from '../../ducks/dog/actions';
import App from '../../App';
import init from '../../ducks';
import renderPage from '../renderPage';

const fetchDog = async (store) => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    store.dispatch(receiveDogSuccess(response.data));
  } catch (e) {
    store.dispatch(receiveDogFailure('There was a problem fetching a dog.'));
  }
};

export default async (req, res) => {
  // Create a new Redux store instance
  const store = init();
  await Promise.all([fetchDog(store)]);

  const html = renderToString(
    <StaticRouter location={req.url}>
      <App store={store} />
    </StaticRouter>,
  );

  const preloadedState = store.getState();

  res.send(renderPage(html, preloadedState));
};

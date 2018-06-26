import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './app/store';
import Home from './app/modules/home';
import rootSaga from './app/sagas';

const store = configureStore();

store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root'),
);

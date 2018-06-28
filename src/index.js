import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from './app/store';
import routes from './app/routes';
import rootSaga from './app/sagas';
import './styles/css/index.css';

const store = configureStore();

store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {routes.map((route, i) => <Route key={`route-${i}`} {...route} />)}
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

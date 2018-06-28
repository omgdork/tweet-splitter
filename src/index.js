import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './app/store';
import routes from './app/routes';
import rootSaga from './app/sagas';
import NotFound from './app/common/containers/not-found';
import './styles/css/index.css';

const store = configureStore();

store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => <Route key={`route-${i}`} {...route} />)}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

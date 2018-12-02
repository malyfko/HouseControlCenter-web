import React from 'react';
import store from 'store';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { Main } from 'components/Main';

import { ROUTES } from 'consts';

const NoMatch = () => (
  <div>
    Page not found
  </div>
);

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path={ROUTES.home.href} component={Main} />
        <Route component={NoMatch} />
      </Switch>
    </Provider>
  </BrowserRouter>
);

export { App };

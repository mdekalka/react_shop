import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { createHashHistory  } from 'history';

import App from '../App';

const history = createHashHistory();

import store from './configStore';

const routes = (
  <Provider store={store} >
    <Router history={history} >
      <App />
    </Router>
  </Provider>
);

export default routes;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createHashHistory  } from 'history';

import App from '../App';

const history = createHashHistory();

const routes = (
  <Router history={history} >
    <App />
  </Router>
);

export default routes;

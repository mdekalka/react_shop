import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import AppPage from '../pages/AppPage/AppPage';
import ShopCartPage from '../pages/ShopCartPage/ShopCartPage';
import CartPage from '../pages/CartPage/CartPage';

const routes = (
  <Router history={hashHistory} >
    <Route component={AppPage} >
      <Route path="/" component={ShopCartPage} >
        <Route path="item/:id" component={CartPage} />
      </Route>
    </Route>
  </Router>
);

export default routes;
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import AppPage from '../pages/AppPage/AppPage';
import ShopCartPage from '../pages/ShopCartPage/ShopCartPage';
import CartPage from '../pages/CartPage/CartPage';

import store from './configStore';

const routes = (
  <Provider store={store} >
    <Router history={hashHistory} >
        <Route component={AppPage} >
            <Route path="/" component={ShopCartPage} >
              <Route path="item/:id" component={CartPage} />
            </Route>
        </Route>
    </Router>
  </Provider>
);

export default routes;
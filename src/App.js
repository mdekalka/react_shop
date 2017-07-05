import React, { Component } from 'react';

import Header from './components/Header/Header';
import ShopCart from './components/ShopCart/ShopCart';

import logo from './assets/icons/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app-page">
          <Header logo={logo} />
          <ShopCart />
      </div>
    );
  }
};

export default App;

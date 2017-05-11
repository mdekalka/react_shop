import React, { Component } from 'react';

import logo from '../../assets/icons/logo.svg';
import './AppPage.css';

class AppPage extends Component {
  render() {
    return (
      <div className="app-page">
        <h2 className="logo">
          <img className="logo-img" src={logo} alt="react" height="36" width="36" />
          React
        </h2>
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
};

export default AppPage;

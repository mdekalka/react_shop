import React, { Component } from 'react';

import reactLogo from '../../assets/icons/logo.svg';
import reduxLogo from '../../assets/icons//redux.svg';
import './AppPage.css';

class AppPage extends Component {
  render() {
    return (
      <div className="app-page">
        <h2 className="logo-container">
          <span className="logo react-logo">
          <img className="logo-img" src={reactLogo} alt="react" height="36" width="36" />
          React
          </span>
           +
          <span className="logo redux-logo">
            <img className="logo-img" src={reduxLogo} alt="react" height="36" width="36" />
          Redux
          </span>
        </h2>
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
};

export default AppPage;

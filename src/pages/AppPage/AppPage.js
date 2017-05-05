import React, { Component } from 'react';

import './AppPage.css';
import logo from '../../assets/icons/logo.svg';

class AppPage extends Component {
  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>*/}
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default AppPage;

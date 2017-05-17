import React, { Component } from 'react';

import './AppPage.css';

class AppPage extends Component {
  render() {
    return (
      <div className="app-page">
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
};

export default AppPage;

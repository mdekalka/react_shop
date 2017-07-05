import React from 'react';

import reactLogo from '../../assets/icons/logo.svg';
import reduxLogo from '../../assets/icons/redux.svg';

import './Header.css';

const Header = () => {
  return (
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
  )
};

export default Header;

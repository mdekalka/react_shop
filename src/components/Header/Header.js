import React from 'react';

import './Header.css';

const Header = ({ logo }) => {
  return (
    <h2 className="logo">
      <img className="logo-img" src={logo} alt="react" height="36" width="36" />
      React
    </h2>
  )
};

export default Header;

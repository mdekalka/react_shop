import React from 'react';

import Logo from './Logo';
import reactLogo from '../../assets/icons/react.svg';
import reduxLogo from '../../assets/icons/redux.svg';

const LogoHeader = ({ nodeRef }) => {
  return (
    <h2 className="logo-container" ref={nodeRef} >
      <span className="logo react-logo">
        <Logo logo={reactLogo} height={36} width={36} />
        React
      </span>
      <span className="logo redux-logo">
        <Logo logo={reduxLogo} height={36} width={36} />
        Redux
      </span>
    </h2>
  )
};

export default LogoHeader;
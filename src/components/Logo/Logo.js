import React from 'react';

const Logo = ({ logo, width, height }) => {
  return <img className="logo-img" src={logo} alt="react" height={height} width={width} />
};

export default Logo;
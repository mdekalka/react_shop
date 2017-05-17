import React from 'react';
import PropTypes from 'prop-types';

import './AnimatedCircle.css';

const AnimatedCircle = (props) => {
  let circle;
  
  const onClick = (event) => {
    props.onClick(circle, event);
  }

  return (
    <div className="animated-circle" ref={(node) => {circle = node}} onClick={onClick}>
      <div className="inner-circle"></div>
      <div className="outer-circle"></div>
    </div>
  )
};

AnimatedCircle.propTypes = {
  onClick: PropTypes.func
};

AnimatedCircle.defaultProps = {
  onClick: () => {}
};

export default AnimatedCircle;
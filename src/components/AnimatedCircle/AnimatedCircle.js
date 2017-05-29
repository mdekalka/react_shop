import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './AnimatedCircle.css';

const AnimatedCircle = ({ onClick, active, name }) => {
  let circle;
  
  const onCircleClick = (event) => {
    onClick(circle, event);
  };
  
  return (
    <div data-name={name} className={classNames('animated-circle', {'active': active})} ref={(node) => {circle = node}} onClick={onCircleClick}>
      <div className={classNames('inner-circle', {'anim-circle': !active, 'anim-rotate': active})} ></div>
      <div className={classNames('outer-circle', {'anim-circle': !active, 'anim-rotate': active})} ></div>
    </div>
  )
};

AnimatedCircle.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
  name: PropTypes.string
};

AnimatedCircle.defaultProps = {
  onClick: () => {},
  active: false,
  name: ''
};

export default AnimatedCircle;
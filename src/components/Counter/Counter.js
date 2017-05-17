import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

const Counter = (props) => {
  const { onClick } = props;

  return (
    <div className="counter-container" ref={props.nodeRef} >
      <div className="counter-option icon icon-dec pointer" onClick={() => onClick(false)}></div>
      {props.children}
      <div className="counter-option icon icon-inc pointer" onClick={() => onClick(true)}></div>
    </div>
  )
};

Counter.propTypes = {
  onClick: PropTypes.func.isRequired
};

Counter.defaultProps = {
  onClick: () => {}
}

export default Counter;

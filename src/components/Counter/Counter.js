import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

const Counter = (props) => {
  const { onClick } = props;

  return (
    <div className="counter-container">
      <button type="button" className="counter-option icon icon-dec pointer" onClick={() => onClick(false)}></button>
      {props.children}
      <button type="button" className="counter-option icon icon-inc pointer" onClick={() => onClick(true)}></button>
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

import React from 'react';

import './Counter.css';

const Counter = (props) => {
  const { onClick } = props;

  return (
    <div className="counter-container">
      <div className="counter-option icon pointer" onClick={() => onClick(false)}>-</div>
      {props.children}
      <div className="counter-option icon pointer" onClick={() => onClick(true)}>+</div>
    </div>
  )
};

export default Counter;

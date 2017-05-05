import React from 'react';

import './CartItem.css';

export default (props) => {
  const { name, description, source } = props.item;

  return (
    <div className="cart-item">
      <img className="cart-image" src={source} alt="cart icon"/>
      <div onClick={() => onRemove(props.item)} className="icon icon-remove pointer"></div>
      <div className="cart-info">
        <div className="item-name">{name}</div>
        <div className="item-description">{description}</div>
      </div>
    </div>
  )
};
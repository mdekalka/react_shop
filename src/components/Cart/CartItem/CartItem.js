import React from 'react';

import './CartItem.css';

import Counter from '../../Counter/Counter';

const CartItem = (props) => {
  const { name, image, count, totalPrice } = props.item;

  const onCounter = (direction) => {
    props.onCounterClick(props.item, direction);
  }

  return (
    <div className="cart-item pointer">
      <img className="cart-image" src={image.source} alt="cart icon"/>
      <div onClick={() => props.onRemove(props.item)} className="icon icon-remove pointer"></div>
      <div className="cart-info">
        <div className="item-name">{name}</div>
        <Counter onClick={onCounter}>
          <div className="counter-value">{count}</div>
        </Counter>
        <div className="item-price">Total: {totalPrice} $</div>
      </div>
    </div>
  )
};

export default CartItem;
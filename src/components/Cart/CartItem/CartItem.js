import React from 'react';
import { Link } from 'react-router';

import './CartItem.css';

import Counter from '../../Counter/Counter';

const CartItem = (props) => {
  const { name, image, count, totalPrice } = props.item;

  // Note: Create new functions in stateless components with care: each time CartItem will be rendered, <onCounter> fn
  // will creates and will re-render the <Counter> component
  const onCounter = (direction) => {
    props.onCounterClick(props.item, direction);
  }

  return (
    <div className="cart-item pointer">
      <img className="cart-image" src={image.source} alt="cart icon"/>
      <div className="cart-actions">
        <div onClick={() => props.onRemove(props.item)} className="icon icon-remove pointer"></div>
        <Link className="icon icon-link pointer" to={`item/${props.item.id}`}></Link>
      </div>
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
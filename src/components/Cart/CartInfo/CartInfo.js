import React from 'react';
import { Link } from 'react-router';

import './CartInfo.css';

const CartInfo = ({ info }) => {
  return (
    <div className="cart-info">
      <h3>{info.name}</h3>
      <img className="cart-image" src={info.image.source} alt="cart item preview"/>
      <div className="cart-row">Count: {info.count}</div>
      <div className="cart-row">Price: {info.price} $</div>
      <div className="cart-row">Total: {info.totalPrice} $</div>
      <Link to={'/'} className="btn">Back to list</Link>
    </div>
  )
};

export default CartInfo;
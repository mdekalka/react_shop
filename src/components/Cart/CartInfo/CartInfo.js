import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { totalPrice } from '../CartService';
import { createCartItem } from '../../../pages/ShopCartPage/model';
import { totalPrice } from '../CartService';

import './CartInfo.css';

const CartInfo = ({ info }) => {
  const total = totalPrice(info.count, info.price);

  return (
    <div className="cart-info">
      <h3>{info.name}</h3>
      <img className="cart-image" src={info.image.source} alt="cart item preview"/>
      <div className="cart-row">Count: {info.count}</div>
      <div className="cart-row">Price: {info.price} $</div>
      <div className="cart-row">Total: {total} $</div>
      <Link to={'/'} className="btn">Back to list</Link>
    </div>
  )
};

CartInfo.propTypes = {
  info: PropTypes.object
};

CartInfo.defaultProps = {
  info: createCartItem()
};

export default CartInfo;
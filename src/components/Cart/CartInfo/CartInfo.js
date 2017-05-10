import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import ShopCartItem from '../../../pages/ShopCartPage/ShopCartItem';

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

CartInfo.propTypes = {
  info: PropTypes.instanceOf(ShopCartItem)
};

CartInfo.defaultProps = {
  info: new ShopCartItem()
};

export default CartInfo;
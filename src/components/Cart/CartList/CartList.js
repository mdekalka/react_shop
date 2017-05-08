import React from 'react';

import CartItem from '../CartItem/CartItem';

const CartList = (props) => {
  return (
    <div className="cart-list">
      {props.list.map((cartItem, index) =>
        <CartItem key={cartItem.id} item={cartItem} onCounterClick={props.onPriceClick} onRemove={props.onRemove} />
      )}
    </div>
  )
};

export default CartList;


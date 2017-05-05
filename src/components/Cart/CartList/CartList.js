import React from 'react';

import CartItem from '../CartItem/CartItem';

export default (props) => {
  return (
    <div className="cart-list">
      {/* TODO: change index to id */}
      {props.list.map((cartItem, index) =>
        <CartItem item={cartItem} key={index} />
      )}
    </div>
  )
};


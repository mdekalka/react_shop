import React from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem/CartItem';

const CartList = (props) => {
  const { list, onPriceClick, onRemove} = props;

  return (
    <div className="cart-list">
      {list.map((cartItem, index) =>
        <CartItem key={cartItem.id} item={cartItem} onCounterClick={onPriceClick} onRemove={onRemove} />
      )}
    </div>
  )
};

CartList.propTypes = {
  list: PropTypes.array,
  onPriceClick: PropTypes.func,
  onRemove: PropTypes.func
};

CartList.defaultProps = {
  list: [],
  onPriceClick: () => {},
  onRemove: () => {}
};

export default CartList;


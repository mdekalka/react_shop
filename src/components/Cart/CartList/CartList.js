import React from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem/CartItem';
import CartItemPreview from '../../Preview/CartItemPreview/CartItemPreview';

const CartList = ({ list, onPriceClick, onCircleClick, onRemove, isOpen }) => {
  return (
    <div className="cart-list">
      {list.map((cartItem, index) => {
        if (!index) {
          return <CartItemPreview key={cartItem.id} item={cartItem} onCounterClick={onPriceClick} isOpen={isOpen} onCircleClick={onCircleClick} onRemove={onRemove} />;
        } else {
          return <CartItem key={cartItem.id} item={cartItem} onCounterClick={onPriceClick} onRemove={onRemove} />;
        }
      })}
    </div>
  )
};

CartList.propTypes = {
  list: PropTypes.array,
  onPriceClick: PropTypes.func,
  onRemove: PropTypes.func,
  isOpen: PropTypes.bool
};

CartList.defaultProps = {
  list: [],
  onPriceClick: () => {},
  onRemove: () => {},
  isOpen: false
};

export default CartList;


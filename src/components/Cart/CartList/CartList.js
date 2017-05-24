import React from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem/CartItem';
import CartItemPreview from '../../Preview/CartItemPreview/CartItemPreview';

const CartList = ({ list, onPriceClick, onCircleClick, onRemove }) => {
  return (
    <div className="cart-list">
      {list.map((cartItem, index) => {
        if (!index) {
          return <CartItemPreview key={cartItem.id} item={cartItem} onCounterClick={onPriceClick} onCircleClick={onCircleClick} onRemove={onRemove} />;
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
  onRemove: PropTypes.func
};

CartList.defaultProps = {
  list: [],
  onPriceClick: () => {},
  onRemove: () => {}
};

export default CartList;


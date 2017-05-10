import React from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem/CartItem';

import ShopCartItem from '../../../pages/ShopCartPage/ShopCartItem';

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
  list: PropTypes.arrayOf(PropTypes.instanceOf(ShopCartItem)),
  onPriceClick: PropTypes.func,
  onRemove: PropTypes.func
};

CartList.defaultProps = {
  list: [],
  onPriceClick: () => {},
  onRemove: () => {}
};

export default CartList;


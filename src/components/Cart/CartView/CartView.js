import React from 'react';
import PropTypes from 'prop-types';

import CartList from '../CartList/CartList';
import EmptyBlock from '../../EmptyBlock/EmptyBlock';

import ShopCartItem from '../../../pages/ShopCartPage/ShopCartItem';
import { getTotal } from '../CartService';

import './CartView.css';

const CartView = (props) => {
  const { cartList, onRemoveItem, onPriceClick } = props;
  const total = getTotal(cartList);

  return (
    <div>
      {cartList.length ?
        <CartList list={cartList} onRemove={onRemoveItem} onPriceClick={onPriceClick} />
      : <EmptyBlock title='Your cart list is empty' />
      }
      {cartList.length ? <div className="total-price">Total: {total} $</div> : null}
    </div>
  )
};

CartView.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.instanceOf(ShopCartItem)),
  onRemoveItem: PropTypes.func,
  onPriceClick: PropTypes.func
};

CartView.defaultProps = {
  cartList: [],
  onRemoveItem: () => {},
  onPriceClick: () => {}
};

export default CartView;
 

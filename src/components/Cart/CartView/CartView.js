import React from 'react';
import PropTypes from 'prop-types';

import CartList from '../CartList/CartList';
import EmptyBlock from '../../EmptyBlock/EmptyBlock';
import TotalPricePreview from '../../Preview/TotalPricePreview/TotalPricePreview';

import { getTotal } from '../CartService';

import './CartView.css';

const CartView = ({ cartList, onRemoveItem, onPriceClick, isOpen, onCircleClick }) => {
  const total = getTotal(cartList);

  return (
    <div>
      {cartList.length ?
        <CartList list={cartList} onRemove={onRemoveItem} onPriceClick={onPriceClick} isOpen={isOpen} onCircleClick={onCircleClick} />
      : <EmptyBlock title='Your cart list is empty' />
      }
      {cartList.length ? <TotalPricePreview onCircleClick={onCircleClick} total={total} /> : null}
    </div>
  )
};

CartView.propTypes = {
  cartList: PropTypes.array,
  onRemoveItem: PropTypes.func,
  onPriceClick: PropTypes.func,
  isOpen: PropTypes.bool
};

CartView.defaultProps = {
  cartList: [],
  onRemoveItem: () => {},
  onPriceClick: () => {},
  isOpen: false
};

export default CartView;
 

import React from 'react';
import PropTypes from 'prop-types';

import CartList from '../CartList/CartList';
import EmptyBlock from '../../EmptyBlock/EmptyBlock';

import './CartView.css';

const CartView = (props) => {
  const { cartList, onRemoveItem, onPriceClick, total } = props;

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
  cartList: PropTypes.array,
  onRemoveItem: PropTypes.func,
  onPriceClick: PropTypes.func,
  total: PropTypes.number
};

CartView.defaultProps = {
  cartList: [],
  onRemoveItem: () => {},
  onPriceClick: () => {},
  total: null
};

export default CartView;
 

import React from 'react';
import PropTypes from 'prop-types';

import CartList from '../CartList/CartList';
import EmptyBlock from '../../EmptyBlock/EmptyBlock';

import { getTotal } from '../cartService';

import './CartView.css';

const CartView = (props) => {
  const { list, onRemoveItem, onPriceClick } = props;
  const total = getTotal(list);

  return (
    <div>
      {list.length
      ? <CartList list={list} onRemove={onRemoveItem} onPriceClick={onPriceClick} />
      : <EmptyBlock title='Your cart list is empty' />
      }
      {list.length ? <div className="total-price">Total: {total} $</div> : null}
    </div>
  )
};

CartView.propTypes = {
  list: PropTypes.array,
  onRemoveItem: PropTypes.func,
  onPriceClick: PropTypes.func,
  total: PropTypes.number
};

CartView.defaultProps = {
  list: [],
  onRemoveItem: () => {},
  onPriceClick: () => {},
  total: null
};

export default CartView;

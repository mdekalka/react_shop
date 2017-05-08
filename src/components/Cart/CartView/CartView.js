import React from 'react';

import CartList from '../CartList/CartList';
import EmptyBlock from '../../EmptyBlock/EmptyBlock';

import { getTotal } from '../CartService';

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

export default CartView;
 

import { createSelector } from 'reselect';

import { getTotal } from '../Cart/cartService';

const getCartList = (state) => state.shopCart.cartList;

export const selectCartList = createSelector(getCartList, (cartList) => cartList);

export const selectTotalPrice = createSelector([getCartList], (cartList) => {
  return getTotal(cartList);
});
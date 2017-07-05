import axios from 'axios';

import types from './types';
import config from '../../constants/constants';
import { normalizeCartItem } from '../Cart/cartModel';

// Action creators
export const fetchCartList = () => {
  return {
    type: types.FETCHING_CARTLIST_START
  }
};

export const fetchCartListSuccess = (cartList) => {
  return {
    type: types.FETCHING_CARTLIST_SUCCESS,
    data: cartList
  }
};

export const fetchCartListFailed = (error) => {
  return {
    type: types.FETCHING_CARTLIST_FAILED,
    error
  }
};

export const onItemAdd = (item) => {
  return {
    type: types.ON_ITEM_ADD,
    cartItem: item
  }
};

export const onItemRemove = (itemId) => {
  return {
    type: types.ON_ITEM_REMOVE,
    id: itemId
  }
};

export const onCounterChange = (itemId, itemCount) => {
  return {
    type: types.ON_COUNTER_CHANGE,
    id: itemId,
    count: itemCount
  }
}

// Thunk action creators
export const loadCartList = () => (dispatch, getState) => {
  dispatch(fetchCartList());

  return axios.get(config.url)
    .then(response => response.data)
    .then(cartList => {
      cartList.forEach(cartItem => {
          normalizeCartItem(cartItem);
      });

      return dispatch(fetchCartListSuccess(cartList));
    })
    .catch(error => dispatch((fetchCartListFailed(error))));
};
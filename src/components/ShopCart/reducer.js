import types from './types';

const initialState = {
  cartList: [],
  isFetching: false,
  isFailed: false,
  errorMessage: ''
};

const ShopCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_CARTLIST_START:
      return { ...state, isFetching: true };

    case types.FETCHING_CARTLIST_SUCCESS:
      return { ...state, cartList: action.data, isFetching: false, isFailed: false, errorMessage: '' };

    case types.FETCHING_CARTLIST_FAILED:
      return { ...state, isFetching: false, isFailed: true, errorMessage: action.error };

    case types.ON_ITEM_ADD:
      return { ...state, cartList: [ ...state.cartList, action.cartItem ] }
    
    case types.ON_ITEM_REMOVE:
      return { ...state, cartList: state.cartList.filter(cartItem => cartItem.id !== action.id) }
  
    case types.ON_COUNTER_CHANGE:
      return {
        ...state,
        cartList: state.cartList.map(cartItem => {
          if (cartItem.id === action.id) {
            return { ...cartItem, count: action.count };
          }

          return cartItem;
        })
      }

    default:
      return state;
  }
};

export default ShopCartReducer;
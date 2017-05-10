const initialState = {
    cartList: [],
    isFerching: false,
    isFailed: false,
    errorMessage: ''
};

const ShopCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_CARTLIST_START':
      return state;

    case 'FETCHING_CARTLIST_SUCCESS':
      return state;

    case 'FETCHING_CARTLIST_FAILED':
      return state;

    default:
      return state;
  }
};

export default ShopCartReducer;
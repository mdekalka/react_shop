import types from './actions.js';

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
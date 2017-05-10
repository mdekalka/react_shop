import { combineReducers } from 'redux';

import ShopCartReducer from '../pages/ShopCartPage/reducer';

const rootReducer = combineReducers({
    shopCart: ShopCartReducer
});

export default rootReducer;
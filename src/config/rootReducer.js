import { combineReducers } from 'redux';

import ShopCartReducer from '../components/ShopCart/reducer';

const rootReducer = combineReducers({
    shopCart: ShopCartReducer
});

export default rootReducer;
import React, { Component } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartForm from '../Cart/CartForm/CartForm';
import CartView from '../Cart/CartView/CartView';
import CartInfo from '../Cart/CartInfo/CartInfo';

import { countPrice, findById, INVALID_COUNT } from '../Cart/cartService';
import { normalizeCartItem } from '../Cart/cartModel';
import * as shopCartActions from './actions';
import { selectCartList, selectTotalPrice } from './selectors';

export class ShopCart extends Component {
  componentDidMount() {
    this.props.shopCartActions.loadCartList().then(() => {
      // Note: promise returns from thunk action creator to component. You can put any component-based logic here
    });
  }

  onRemoveItem = (item) => {
    this.props.shopCartActions.onItemRemove(item.id);
  }

  onPriceClick = (item, direction) => {
    let updatedCount = countPrice(item.count, direction);

    if (updatedCount <= INVALID_COUNT) {
      return;
    }

    this.props.shopCartActions.onCounterChange(item.id, updatedCount);
  }

  onAdd = (cartItem, callback = () => {}) => {
    const newCartItem = normalizeCartItem(cartItem);

    this.props.shopCartActions.onItemAdd(newCartItem);

    callback();
  }

  render() {
    const { cartList, totalPrice, isFetching, isFailed, errorMessage } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-half">
            <h3>Add product to your cart list</h3>
            <CartForm onAdd={this.onAdd}/>
          </div>
          <div className="col-half">
            <h3>Product list</h3>
            {isFailed && !isFetching
            ? <div>Something went wrong: {errorMessage}</div>
            : <Switch>
                <Route exact path="/" render={(props) => <CartView {...props} list={cartList} onRemoveItem={this.onRemoveItem} total={totalPrice} onPriceClick={this.onPriceClick} />} />
                <Route exact path="/item/:id" render={({ match }) => <CartInfo info={findById(cartList, match.params.id)} />} />
              </Switch>
            }
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
    return {
        cartList: selectCartList(state),
        totalPrice: selectTotalPrice(state),
        isFetching: state.shopCart.isFetching,
        isFailed: state.shopCart.isFailed,
        errorMessage: state.shopCart.errorMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        shopCartActions: bindActionCreators(shopCartActions, dispatch)
    }
};
// Bug described here: https://github.com/ReactTraining/react-router/issues/4671
ShopCart = withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopCart));

export default ShopCart;
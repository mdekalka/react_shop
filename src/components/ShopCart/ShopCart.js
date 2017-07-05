import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import CartForm from '../Cart/CartForm/CartForm';
import CartView from '../Cart/CartView/CartView';
import CartInfo from '../Cart/CartInfo/CartInfo';

import { mockedCart } from '../Cart/cartMock';
import { countPrice, findById, INVALID_COUNT } from '../Cart/cartService';
import { normalizeCartItem } from '../Cart/cartModel';

class ShopCart extends Component {
  state = {
    cartList: []
  };

  componentDidMount() {
    this.setState({ cartList: mockedCart.map(cartItem => normalizeCartItem(cartItem)) });
  }

  onRemoveItem = (item) => {
    this.setState(prevState => {
      return {
        cartList: prevState.cartList.filter(cartItem => cartItem.id !== item.id)
      }
    });
  }

  onPriceClick = (item, direction) => {
    this.setState(prevState => {
      let updatedCount = countPrice(item.count, direction);

      if (updatedCount <= INVALID_COUNT) {
        return;
      }

      return {
        cartList: prevState.cartList.map(cartItem => {
          if (cartItem.id === item.id) {
            cartItem.count = updatedCount;
          }

          return cartItem;
        })
      }
    });
  }

  onAdd = (cartItem, callback = () => {}) => {
    const newCartItem = normalizeCartItem(cartItem);

    this.setState(prevState => {
      return {
        cartList: prevState.cartList.concat(newCartItem)
      }
    }, callback);
  }

  render() {
    const { cartList } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-half">
            <h3>Add product to your cart list</h3>
            <CartForm onAdd={this.onAdd}/>
          </div>
          <div className="col-half">
            <h3>Product list</h3>
            <Switch>
              <Route exact path="/" render={() => <CartView list={cartList} onRemoveItem={this.onRemoveItem} onPriceClick={this.onPriceClick} />} />
              <Route path="/item/:id" render={({ match }) => <CartInfo info={findById(cartList, match.params.id)} />} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
};

export default ShopCart;
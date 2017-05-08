import React, { Component } from 'react';

import './ShopCartPage.css';

import CartForm from '../../components/Cart/CartForm/CartForm';
import CartView from '../../components/Cart/CartView/CartView';

import { mockedCart,  } from '../../components/Cart/CartService';
import ShopCartItem from './ShopCartItem';

const INVALID_COUNT = 0;

class ShopCartPage extends Component {
  state = {
    formState: new ShopCartItem(),
    cartList: [],
    isIconSelectorOpen: false,
  }

  componentDidMount() {
    this.setState({ cartList: mockedCart.map(cartItem => new ShopCartItem(cartItem)) });
  }

  onIconSelect = (selectedIcon) => {
    this.setState(prevState => {
      return {
        formState: { ...prevState.formState, image: selectedIcon },
        isIconSelectorOpen: false
      }
    });
  }

  onIconToggle = (state) => {
    if (typeof state !== 'boolean') {
      state = !this.state.isIconSelectorOpen;
    }

    this.setState(prevState => {
      return {
        isIconSelectorOpen: state
      }
    })
  }

  onAddItem = (event) => {
    event.preventDefault();

    this.setState(prevState => {
      const newCartItem = new ShopCartItem({ ...prevState.formState });

      return {
        cartList: prevState.cartList.concat(newCartItem)
      }
    }, this.resetFormValues);

    // TODO: add focus to parent?
    // this.setNameFocus();
  }

  onRemoveItem = (item) => {
    this.setState(prevState => {
      return {
        cartList: prevState.cartList.filter(cartItem => cartItem.id !== item.id)
      }
    })
  }

  changeInputValue(name, value) {
    this.setState(prevState => {
      return {
        formState: { ...prevState.formState, [name]: value }
      }
    });
  }

  onInputChange = (event) => {
    const target = event.target;
    const value = target.value.trim();

    this.changeInputValue(target.name, value);
  }

  resetFormValues() {
    this.setState(prevState => {
      return {
        formState: new ShopCartItem()
      }
    });
  }

  countPrice(count, direction) {
    return direction ? count += 1 : count -= 1;
  }

  onCounterClick = (direction) => {
    this.setState(prevState => {
      let updatedCount = this.countPrice(prevState.formState.count, direction);
      if (updatedCount <= INVALID_COUNT) {
        return;
      }

      return {
        formState: { ...prevState.formState, count: updatedCount }
      }
    })
  }

  onPriceClick = (item, direction) => {
    this.setState(prevState => {
      let updatedCount = this.countPrice(item.count, direction);
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
    })
  }

  render() {
    const { formState, cartList, isIconSelectorOpen } = this.state;

    return (
      <div className="row">
        <div className="col-half">
          <h3>Add product to your cart list</h3>
          <CartForm
            formState={formState}
            isIconSelectorOpen={isIconSelectorOpen}
            onIconSelect={this.onIconSelect}
            onAddItem={this.onAddItem}
            onInputChange={this.onInputChange}
            onCounterClick={this.onCounterClick}
            onIconToggle={this.onIconToggle}
          />
        </div>
        {/* TODO: Is this a better way to do partial-nested view? */}
        <div className="col-half">
          {this.props.children ?
            React.cloneElement(this.props.children, {
              list: cartList
            })
          :
            <div>
              <h3>Product list</h3>
              <CartView 
                cartList={cartList}
                onRemoveItem={this.onRemoveItem}
                onPriceClick={this.onPriceClick}
              />
            </div>
          }
        </div>
      </div>
    )
  }
};

export default ShopCartPage;
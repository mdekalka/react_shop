import React, { Component } from 'react';

import './ShopCartPage.css';

import IconSelector from '../../components/IconSelector/IconSelector';
import CartList from '../../components/Cart/CartList/CartList';
import Counter from '../../components/Counter/Counter';
import EmptyBlock from '../../components/EmptyBlock/EmptyBlock';

import { mockedCart, getFoodList, getTotal } from './ShopCartPageService';
import ShopCartItem from './ShopCartItem';

class ShopCartPage extends Component {
  state = {
    formState: new ShopCartItem(),
    cartList: [],
    isIconSelectorOpen: false,
    foodList: getFoodList()
  }

  componentDidMount() {
    this.setState({ cartList: mockedCart.map(cartItem => new ShopCartItem(cartItem)) });
    this.setNameFocus();
  }

  setNameFocus() {
    this.nameInput.focus();
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

    this.setNameFocus();
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
      if (updatedCount <= 0) {
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
      if (updatedCount <= 0) {
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
    const { formState: { name, price, count, image }, cartList, foodList, isIconSelectorOpen } = this.state;
    const total = getTotal(cartList);

    return (
      <div>
        <div className="row">
          <div className="col-half">
            <h3>Add product to your cart list</h3>
            <form onSubmit={this.onAddItem}>
              <div className="form-row">
                <label>
                  <input 
                    type="text"
                    autoFocus={this.state.focus}
                    autoComplete="off"
                    placeholder='Product name'
                    name="name"
                    className="full-width"
                    value={this.state.formState.name}
                    ref={node => {this.nameInput = node; }}
                    onChange={this.onInputChange}
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <input 
                    type="number"
                    autoComplete="off"
                    placeholder='Product price'
                    name="price"
                    min="0"
                    className="full-width"
                    value={this.state.formState.price}
                    onChange={this.onInputChange}
                  />
                </label>
              </div>
              <Counter onClick={this.onCounterClick}>
                <div className="counter-value">{count}</div>
              </Counter>
              <div className="avatar-icon pointer" onClick={this.onIconToggle}><img src={image.source} alt="icon food choose"/></div>
              <IconSelector list={foodList} isOpen={isIconSelectorOpen} onSelect={this.onIconSelect} onToggle={this.onIconToggle} />
              <button className="btn" type="submit" disabled={!name || !price}>Add to list</button>
            </form>
          </div>
          <div className="col-half">
            <h3>Product list</h3>
            {cartList.length ?
              <CartList list={cartList} onRemove={this.onRemoveItem} onPriceClick={this.onPriceClick} />
            : <EmptyBlock title='Your cart list is empty' />
            }
            {cartList.length ? <div className="total-price">Total: {total} $</div> : null}
          </div>
        </div>
      </div>
    )
  }
};

export default ShopCartPage;
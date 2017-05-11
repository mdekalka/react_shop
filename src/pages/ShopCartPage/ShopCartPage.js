import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartForm from '../../components/Cart/CartForm/CartForm';
import CartView from '../../components/Cart/CartView/CartView';

import * as shopCartActions from './actions';
import { normalizeCartItem, createCartItem } from './model';

const INVALID_COUNT = 0;

class ShopCartPage extends Component {
  state = {
    formState: createCartItem(),
    isIconSelectorOpen: false
  }

  componentDidMount() {
    this.props.shopCartActions.loadCartList().then(() => {
      // Note: promise returns from thunk action creator to component. You can put any component-based logic here
    });
  }

  setNameFocus() {
    this.inputElement.focus();
  }

  onIconSelect = (selectedIcon) => {
    this.setState(prevState => {
      return {
        formState: ({ ...prevState.formState, image: selectedIcon }),
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
    });
  }

  onAddItem = (event) => {
    event.preventDefault();
    const { formState } = this.state;

    this.props.shopCartActions.onItemAdd(normalizeCartItem(formState));

    this.resetFormValues();
    this.setNameFocus();
  }

  onRemoveItem = (item) => {
    this.props.shopCartActions.onItemRemove(item.id);
  }

  changeInputValue(name, value) {
    this.setState(prevState => {
      return {
        formState: ({ ...prevState.formState, [name]: value })
      }
    });
  }

  onInputChange = (event) => {
    const target = event.target;
    const value = target.value;

    this.changeInputValue(target.name, value);
  }

  resetFormValues() {
    this.setState(prevState => {
      return {
        formState: createCartItem()
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
        formState: ({ ...prevState.formState, count: updatedCount })
      }
    });
  }

  onPriceClick = (item, direction) => {
    let updatedCount = this.countPrice(item.count, direction);
    if (updatedCount <= INVALID_COUNT) {
      return;
    }

    this.props.shopCartActions.onCounterChange(item.id, updatedCount);
  }

  render() {
    const { formState, isIconSelectorOpen } = this.state;
    const { cartList, isFetching, isFailed, errorMessage } = this.props;

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
            inputRef={el => this.inputElement = el}
          />
        </div>
        <div className="col-half">
          {this.props.children ?
            React.cloneElement(this.props.children, {
              list: cartList
            })
          :
            <div>
              <h3>Product list</h3>
              {isFailed && !isFetching ? 
                <div>Something went wrong: {errorMessage}</div>
              : <CartView 
                  cartList={cartList}
                  onRemoveItem={this.onRemoveItem}
                  onPriceClick={this.onPriceClick}
                />
              }
            </div>
          }
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
    return {
        cartList: state.shopCart.cartList,
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

ShopCartPage = connect(mapStateToProps, mapDispatchToProps)(ShopCartPage);

export default ShopCartPage;
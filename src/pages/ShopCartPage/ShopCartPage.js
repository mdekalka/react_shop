import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { PrismCode } from 'react-prism';

import Modal from '../../components/Modal/Modal';
import CartForm from '../../components/Cart/CartForm/CartForm';
import CartView from '../../components/Cart/CartView/CartView';
import { CounterPreviewModel } from '../../components/Preview/CounterPreview';
import LogoHeaderPreview from '../../components/Preview/LogoHeaderPreview/LogoHeaderPreview';

import { mockedCart } from '../../components/Cart/CartService';
import { normalizeCartItem, createCartItem } from './model';

import reactLogo from '../../assets/icons/react.svg';
import reduxLogo from '../../assets/icons/redux.svg';

const INVALID_COUNT = 0;

class ShopCartPage extends Component {
  state = {
    formState: createCartItem(),
    cartList: [],
    isIconSelectorOpen: false,
    showModal: false,
    bounds: {},
  }

  componentDidMount() {
    this.setState({ cartList: mockedCart.map(cartItem => normalizeCartItem(cartItem)) });
  }

  onCircleClick = (element, bounds, event) => {
    this.openModalHandler(bounds);
  }

  closeModalHandler = () => {
    this.setState({ showModal: false });
  }

  openModalHandler = (bounds) => {
    this.setState({ showModal: true, bounds });
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

    this.setState(prevState => {
      const newCartItem = normalizeCartItem(prevState.formState);

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
    });
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
    });
  }

  render() {
    const { formState, cartList, isIconSelectorOpen, showModal, bounds } = this.state;

    return (
      <div className="row">
        <LogoHeaderPreview reactLogo={reactLogo} reduxLogo={reduxLogo} onCircleClick={this.onCircleClick} />
        <div className="col-half">
          <h3>Add product to your cart list</h3>
          <CartForm
            formState={formState}
            isIconSelectorOpen={isIconSelectorOpen}
            onCircleClick={this.onCircleClick}
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
              <CartView 
                cartList={cartList}
                onRemoveItem={this.onRemoveItem}
                onPriceClick={this.onPriceClick}
              />
            </div>
          }
        </div>
        <Modal isOpen={showModal} bounds={bounds} >
          <Tabs className="react-tabs notes-tabs">
            <TabList>
              <Tab className="react-tabs__tab react-tab">React</Tab>
              <Tab className="react-tabs__tab redux-tab">Redux</Tab>
            </TabList>

            <TabPanel>
              <div className="formatted-text">You should use <a className="link" href="https://facebook.github.io/react/docs/forms.html#controlled-components" target="_blank">controlled</a> components</div>
            </TabPanel>
            <TabPanel>
              <PrismCode className="language-javascript">{CounterPreviewModel.react.content}</PrismCode>
            </TabPanel>
          </Tabs>
          <button className="btn btn-tab" onClick={this.closeModalHandler}>close me</button>
        </Modal>
      </div>
    )
  }
};

export default ShopCartPage;
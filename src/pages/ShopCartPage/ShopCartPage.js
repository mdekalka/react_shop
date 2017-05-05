import React, { Component } from 'react';

import './ShopCartPage.css';

import IconSelector from '../../components/IconSelector/IconSelector';
import CartList from '../../components/Cart/CartList/CartList';

import { filterByName } from '../../common/utils/utils';
import { getFoodList, cartIcon } from './ShopCartPageService';

const defaultIcon = {
  source: cartIcon
};

class ShopCartPage extends Component {
  state = {
    formState: {
      isNameEmpty: false,
      name: '',
      description: ''
    },
    cartList: [{ name: 'Product item', description: 'lorem ipsum atl klgjlk', id: 1, source: cartIcon}],
    isIconSelectorOpen: false,
    foodList: getFoodList()
  }

  componentDidMount() {
    this.setNameFocus();
  }

  setNameFocus() {
    this.nameInput.focus();
  }

  // TODO: add example of validation
  validation() {}

  selectIcon(list, id) {
    return list.map(listItem =>
      listItem.id === id ? { ...listItem, selected: true } : { ...listItem, selected: false }
    );
  }

  getSelectedIcon(defaultIcon = {}) {
    const { foodList } = this.state;

    return foodList.find(foodItem => foodItem.selected) || defaultIcon;
  }

  onIconSelect = (selectedIcon) => {
    this.setState(prevState => {
      return {
        foodList: this.selectIcon(prevState.foodList, selectedIcon.id),
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
      const { name, description } = prevState.formState;

      return {
        cartList: prevState.cartList.concat({ name, description })
      }
    }, this.resetFormValues);

    this.setNameFocus();
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
        formState: {
          name: '',
          description: ''
        }
      }
    });
  }

  render() {
    const { formState: { isNameEmpty }, cartList, searchQuery, foodList, isIconSelectorOpen } = this.state;
    const selectedIcon = this.getSelectedIcon(defaultIcon);

    return (
      <div>Shop basket
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
                    type="text"
                    autoComplete="off"
                    placeholder='Product description'
                    name="description"
                    className="full-width"
                    value={this.state.formState.description}
                    onChange={this.onInputChange}
                  />
                </label>
              </div>
              <div className="avatar-icon pointer" onClick={this.onIconToggle}><img src={selectedIcon.source} alt="icon food choose"/></div>
              <IconSelector list={foodList} isOpen={isIconSelectorOpen} onSelect={this.onIconSelect} onToggle={this.onIconToggle} />
              <button type="submit">Add to list</button>
            </form>
          </div>
          <div className="col-half">
            <h3>Product list</h3>
            <CartList list={cartList} />
          </div>
        </div>
      </div>
    )
  }
};

export default ShopCartPage;
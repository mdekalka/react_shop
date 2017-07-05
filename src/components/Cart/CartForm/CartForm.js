import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Counter from '../../Counter/Counter';
import IconSelector from '../../IconSelector/IconSelector';

import { getFoodList, countPrice, INVALID_COUNT } from '../cartService';
import { createCartItem } from '../cartModel';

import './CartForm.css';

class CartForm extends Component {
  static propTypes = {
    onAdd: PropTypes.func
  };

  static defaultProps = {
    onAdd: () => {}
  };

  state = {
    formState: createCartItem(),
    foodList: getFoodList(),
    isIconSelectorOpen: false,
  }

  setNameFocus() {
    this.inputElement.focus();
  }

  onAddItem = (event) => {
    event.preventDefault();

    this.props.onAdd({ ...this.state.formState }, () => {
      this.resetFormValues();
      this.setNameFocus();
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

  onIconSelect = (selectedIcon) => {
    this.setState(prevState => {
      return {
        formState: ({ ...prevState.formState, image: selectedIcon }),
        isIconSelectorOpen: false
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

  onCounterClick = (direction) => {
    this.setState(prevState => {
      let updatedCount = countPrice(prevState.formState.count, direction);
      if (updatedCount <= INVALID_COUNT) {
        return;
      }

      return {
        formState: ({ ...prevState.formState, count: updatedCount })
      }
    });
  }

  render() {
    const { formState, foodList, isIconSelectorOpen } = this.state;

    return (
      <form onSubmit={this.onAddItem}>
        <div className="form-row">
          <label>
            <input 
              type="text"
              autoComplete="off"
              placeholder='Product name'
              name="name"
              autoFocus
              className="full-width"
              value={formState.name}
              ref={(input) => { this.inputElement = input; }}
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
              value={formState.price}
              onChange={this.onInputChange}
            />
          </label>
        </div>
        <Counter onClick={this.onCounterClick}>
          <div className="counter-value">{formState.count}</div>
        </Counter>
        <div className="avatar-icon pointer" onClick={this.onIconToggle}><img src={formState.image.source} alt="icon food choose"/></div>
        <IconSelector list={foodList} isOpen={isIconSelectorOpen} onSelect={this.onIconSelect} onToggle={this.onIconToggle} />
        <button className="btn" type="submit" disabled={!formState.name || !formState.price}>Add to list</button>
      </form>
    )
  }
};

export default CartForm;
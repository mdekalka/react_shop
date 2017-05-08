import React, { Component } from 'react';

import Counter from '../../Counter/Counter';
import IconSelector from '../../IconSelector/IconSelector';

import { getFoodList } from '../CartService';

class CartForm extends Component {
  state = {
    foodList: getFoodList()
  }

  componentDidMount() {
    this.setNameFocus();
  }

  setNameFocus() {
    this.nameInput.focus();
  }

  onAddItem = (event) => {

  }

  render() {
    const { onAddItem, onInputChange, onCounterClick, onIconSelect, onIconToggle, formState, isIconSelectorOpen } = this.props;
    const { foodList } = this.state;

    return (
      <form onSubmit={onAddItem}>
        <div className="form-row">
          <label>
            <input 
              type="text"
              autoComplete="off"
              placeholder='Product name'
              name="name"
              className="full-width"
              value={formState.name}
              ref={node => {this.nameInput = node; }}
              onChange={onInputChange}
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
              onChange={onInputChange}
            />
          </label>
        </div>
        <Counter onClick={onCounterClick}>
          <div className="counter-value">{formState.count}</div>
        </Counter>
        <div className="avatar-icon pointer" onClick={onIconToggle}><img src={formState.image.source} alt="icon food choose"/></div>
        <IconSelector list={foodList} isOpen={isIconSelectorOpen} onSelect={onIconSelect} onToggle={onIconToggle} />
        <button className="btn" type="submit" disabled={!formState.name || !formState.price}>Add to list</button>
      </form>
    )
  }
}

export default CartForm;
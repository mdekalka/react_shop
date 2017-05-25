import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Counter from '../../Counter/Counter';
import AddButton from '../../AddButton/AddButton';
import IconSelector from '../../IconSelector/IconSelector';
import { CounterPreview } from '../../Preview/CounterPreview';
import CartInputsPreview from '../../Preview/CartInputsPreview/CartInputsPreview';
import IconSelectorPreview from '../../Preview/IconSelectorPreview/IconSelectorPreview';
import AddButtonPreview from '../../Preview/AddButtonPreview/AddButtonPreview';

import { getFoodList } from '../CartService';
import { createCartItem } from '../../../pages/ShopCartPage/model';

import './CartForm.css';

class CartForm extends Component {
  static propTypes = {
    onAddItem: PropTypes.func,
    onCircleClick: PropTypes.func,
    onInputChange: PropTypes.func.isRequired,
    onCounterClick: PropTypes.func,
    onIconSelect: PropTypes.func,
    onIconToggle: PropTypes.func,
    formState: PropTypes.object,
    isIconSelectorOpen: PropTypes.bool,
    inputRef: PropTypes.func
  };

  static defaultProps = {
    onAddItem: () => {},
    onCircleClick: () => {},
    onInputChange: () => {},
    onCounterClick: () => {},
    onIconSelect: () => {},
    onIconToggle: () => {},
    formState: createCartItem(),
    isIconSelectorOpen: false,
    inputRef: () => {}
  };

  state = {
    foodList: getFoodList()
  }

  render() {
    const { onAddItem, onCircleClick, onInputChange, onCounterClick, onIconSelect, onIconToggle, formState, isIconSelectorOpen, inputRef } = this.props;
    const { foodList } = this.state;

    return (
      <form onSubmit={onAddItem}>
        <CartInputsPreview inputRef={inputRef} formState={formState} onInputChange={onInputChange} onCircleClick={onCircleClick} />
        <CounterPreview onClick={onCounterClick} onCircleClick={onCircleClick} >
          <div className="counter-value">{formState.count}</div>
        </CounterPreview>
        <IconSelectorPreview onIconToggle={onIconToggle} formState={formState} onCircleClick={onCircleClick} />
        <IconSelector list={foodList} isOpen={isIconSelectorOpen} onSelect={onIconSelect} onToggle={onIconToggle} />
        <AddButtonPreview className="btn" disabled={!formState.name || !formState.price}>Add to list</AddButtonPreview>
      </form>
    )
  }
};

export default CartForm;
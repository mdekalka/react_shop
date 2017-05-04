import React, { Component } from 'react';

class ShopCartPage extends Component {
  state = {
    formState: {
      isNameEmpty: false
    },
    cartList: []
  }

  // TODO: add example of validation
  validation() {

  }

  onAddItem = (event) => {
    event.preventDefault();

    this.setState(prevState => {
      const { name, description } = prevState.formState;

      return {
        cartList: prevState.cartList.concat({ name, description })
      }
    }, this.resetFormValues);
  }

  changeInputValue(name, value, callback) {
    this.setState(prevState => {
      return {
        formState: { ...prevState.formState, [name]: value }
      }
    }, () => {
      callback && callback();
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
    const { formState: { isNameEmpty }, cartList } = this.state;

    return (
      <div>Shop basket
        <div className="cart-list">
          {/* TODO: change index to id */}
          {cartList.map((cartItem, index) =>
            <div key={index} className="cart-item">
              <div>Name: {cartItem.name}</div>
              <div>Description: {cartItem.description}</div>
            </div>
          )}
        </div>
        <h5>Add product to your cart list</h5>
        <form onSubmit={this.onAddItem}>
          <div className="form-row">
            <label>
              <input type="text" placeholder='Product name' name="name" value={this.state.formState.name} onChange={this.onInputChange} />
              {isNameEmpty ? <span>A name is required</span> : null}
            </label>
          </div>
          <div className="form-row">
            <label>
              <input type="text" placeholder='Product description' name="description" value={this.state.formState.description} onChange={this.onInputChange}/>
            </label>
          </div>
          <button type="submit">Add to list</button>
        </form>
      </div>
    )
  }
};

export default ShopCartPage;
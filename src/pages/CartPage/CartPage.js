import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CartInfo from '../../components/Cart/CartInfo/CartInfo';

import { findById } from '../../components/Cart/CartService';

class CartPage extends Component {
  static propTypes = {
    list: PropTypes.array
  };

  static defaultProps = {
    list: []
  };

  _renderInfo() {
    if (!this.props.list.length) {
      return <div>No info yet</div>;
    } else {
      const info = findById(this.props.list, this.props.params.id);

      return <CartInfo info={info} />;
    }
  }

  render() {
    return this._renderInfo();
  }
};

export default CartPage;
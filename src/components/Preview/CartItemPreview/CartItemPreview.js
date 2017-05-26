import React from 'react';
import PropTypes from 'prop-types';

import CounterItemPreview from '../CounterItemPreview/CounterItemPreview';
import RemoveButtonPreview from '../RemoveButtonPreview/RemoveButtonPreview';
import LinkPreview from '../LinkPreview/LinkPreview';

import { createCartItem } from '../../../pages/ShopCartPage/model';
import { totalPrice } from '../../Cart/CartService';

const CartItemPreview = (props) => {
  const { name, image, count, price} = props.item;
  const total = totalPrice(count, price);

  const onCounter = (direction) => {
    props.onCounterClick(props.item, direction);
  };

  const onRemove = () => {
    props.onRemove(props.item);
  };

  return (
    <div className="cart-item pointer" ref={props.nodeRef} >
      <img className="cart-image" src={image.source} alt="cart icon" />
      <div className="cart-actions">
        <RemoveButtonPreview onRemove={onRemove} isOpen={props.isOpen} onCircleClick={props.onCircleClick} />
        <LinkPreview className="icon icon-link pointer" to={`item/${props.item.id}`} isOpen={props.isOpen} onCircleClick={props.onCircleClick} />
      </div>
      <div className="cart-info">
        <div className="item-name">{name}</div>
        <CounterItemPreview onClick={onCounter} isOpen={props.isOpen} onCircleClick={props.onCircleClick} >
          <div className="counter-value">{count}</div>
        </CounterItemPreview>
        <div className="item-price">Total: {total} $</div>
      </div>
    </div>
  )
};

CartItemPreview.propTypes = {
  item: PropTypes.object,
  isOpen: PropTypes.bool
};

CartItemPreview.defaultProps = {
  item: createCartItem(),
  isOpen: false
};

export default CartItemPreview;
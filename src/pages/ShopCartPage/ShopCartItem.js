import uuidV4 from 'uuid/v4';

import { cartIcon } from '../../components/Cart/CartService';

const defaultIcon = {
  source: cartIcon
};
const MIN_COUNT = 1;

class ShopCartItem {
  constructor({ id = uuidV4(), name = '', price = '', count = MIN_COUNT, image = defaultIcon } = {}) {
    this.name = name;
    this.price = price;
    this.count = count;
    this.image = image;
    this.id = id;
  }

  get totalPrice() {
    return this.count * parseInt(this.price, 10);
  }
};

export default ShopCartItem;
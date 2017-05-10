import uuidV4 from 'uuid/v4';

import { cartIcon } from '../../components/Cart/CartService';

const defaultIcon = {
  source: cartIcon
};
const MIN_COUNT = 1;

export const normalizeCartItem = (item) => {
  if (!item.id) {
    item.id = uuidV4();
  }

  if (!item.image) {
    item.image = defaultIcon;
  }

  return item;
};

export const createCartItem = () => {
  return {
    name: '',
    price: '',
    count: MIN_COUNT,
    image: defaultIcon,
    id: uuidV4()
  }
};

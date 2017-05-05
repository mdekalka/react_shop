import apple from '../../assets/icons/food/003-apple-1.svg';
import carrot from '../../assets/icons/food/004-carrot.svg';
import fish from '../../assets/icons/food/007-fish.svg'
import cupcake from '../../assets/icons/food/008-cupcake.svg';
import cart from '../../assets/icons/food/cart.svg';

export const foodList = [apple, carrot, fish, cupcake];

export const cartIcon = cart;

export const getFoodList = () => {
  return foodList.map((foodItem, index) => {
    return {
      id: index,
      source: foodItem
    }
  })
};


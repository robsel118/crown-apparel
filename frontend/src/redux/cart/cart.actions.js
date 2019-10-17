import {
  ADD_TO_CART,
  TOGGLE_CART_VISIBILITY
} from '../../constants/actionTypes';

export const toggleCartVisibility = () => ({
  type: TOGGLE_CART_VISIBILITY
});

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item
});

import {
  ADD_TO_CART,
  TOGGLE_CART_VISIBILITY,
  REMOVE_FROM_CART,
  REMOVE_ITEM
} from '../../constants/actionTypes';

export const toggleCartVisibility = () => ({
  type: TOGGLE_CART_VISIBILITY
});

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item
});

export const removeFromCart = item => ({
  type: REMOVE_FROM_CART,
  payload: item
});
